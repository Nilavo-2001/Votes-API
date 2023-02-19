const express = require('express');
const app = express();
const port = 8000;
const db = require('./config/mongoose');
app.use("/", require('./routes'))

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(`server running on port: ${port}`);
})