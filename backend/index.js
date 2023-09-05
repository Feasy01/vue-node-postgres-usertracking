
require('dotenv').config();
const app = require('./app');
app.listen(process.env.PORT, () => {
    console.log("Server Listening on PORT:", process.env.PORT);
});
