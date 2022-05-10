const express = require("express");
const middleware = require("./middlewares");
const routes = require("./routes");

const app = express();
const PORT = 3000;

middleware(app);

routes(app);

app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));
