import app from "../app"
const debug = require("debug")("www");

const PORT = process.env.PORT || 3334;
console.log(PORT);
console.log(process.env.DEBUG)
app.listen(PORT, () => debug(`Server started, listening on PORT: ${PORT}`))
