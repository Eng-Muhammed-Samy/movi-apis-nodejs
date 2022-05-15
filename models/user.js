const { dbconn } = require("../configuration");
const { hashSync, compareSync } = require('bcryptjs')
const { userValidate, loginSchema } = require("../validator");

class User {
    constructor(userData) {
        this.userData = { ...userData };
    }

    save(cb) {
        dbconn("users", async (db) => {
            try {
                const hashedPassword = hashSync(this.userData['password'], 12)
                this.userData['password'] = hashedPassword
                await db.insertOne(this.userData);
                cb()
            } catch (err) {
                cb(err)
            }
        });
    }

    static validate(userData) {
        return userValidate.validate(userData);
    }

    checkExistance() {
        return new Promise((resolve, reject) => {
            try {
                dbconn("users", async (db) => {
                    const user = await db.findOne({
                        '$or': [
                            { email: this.userData["email"] },
                            { username: this.userData["username"] },
                        ],
                    });

                    if (!user) {
                        resolve({
                            check: false,
                            message: "User not found"
                        });
                    } else if (this.userData["username"] == user.username) {
                        resolve({
                            check: true,
                            message: "username already exist",
                        });
                    } else if (this.userData["email"] == user.email) {
                        resolve({
                            check: true,
                            message: "email already exist",
                        });
                    }
                });
            } catch (err) {
                reject(err);
            }
        });
    }

    static login(userData) {
        return new Promise((resolve, reject) => {
            const valdation = loginSchema.validate(userData)
            if (valdation.error) {
                const error = new Error(valdation.error.message)
                error.statusCode = 400
                resolve(error)
            }

            dbconn('users', async db => {
                try {
                    const user = await db.findOne({ '$or': [{ username: userData['username'] }, { email: userData['username'] }] }, { projection: { username: 1, password: 1 } })

                    if (!user || !compareSync(userData['password'], user.password)) {
                        const error = new Error("please enter valid username or password")
                        error.statusCode = 404
                        resolve(error)
                    }
                    resolve(user)
                } catch (err) { reject(err) }
            })
        })
    }
}


module.exports = User