const express = require('express');
const app = express();
app.get('/', (request, response)=>{
    response.send("This is home page");
    response.end();
});
module.exports = app;
