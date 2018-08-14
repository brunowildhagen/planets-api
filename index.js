var express = require('express'),
app = express(),
port = process.env.PORT || 3000;

require("./config/db");

app.listen(port);

console.log('planets-api rodando na porta: ' + port);
