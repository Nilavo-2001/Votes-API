const express = require('express');
const app = express();
const port = 8000;
require('./config/mongoose');


app.use(express.text()); // to parse data send in the form of text
app.use(express.urlencoded()); // to parse form data
app.use(express.json()); // to parse data send in the form of json


app.use("/", require('./routes')); // sending any url requests to routes file


app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(`server running on port: ${port}`);
})