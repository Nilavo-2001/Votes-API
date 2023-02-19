const express = require('express');
const app = express();
const port = 8000;
require('./config/mongoose');


app.use(express.text());
app.use(express.urlencoded());
app.use(express.json());


app.use("/", require('./routes'));


app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(`server running on port: ${port}`);
})