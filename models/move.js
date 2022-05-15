const { moviValidate } = require('../validator')
const { dbconn } = require('../configuration')

class Move {

    constructor(move) {
        this.move = { ...move }
    }
    static validateMove = (move) => {
        return moviValidate.validate(move)
    }

    saveMove = (cb) => {
        dbconn('movies', async (db) => {
            try {
                await db.insertOne(this.move)
                cb()
            } catch (err) {
                cb(err)
            }
        })
    }
}

module.exports = Move