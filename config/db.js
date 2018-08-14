'use strict';
require("../models/Planet");

const mongoose = require("mongoose");

const dbURI =
  "mongodb://localhost/planet";

const config = {
  reconnectTries: Number.MAX_VALUE,
  poolSize: 10
};

mongoose.connect(dbURI, config).then(
  function() {
    console.log("Conexão com o banco de dados bem sucedida!");
  },
  function(err) {
    console.log("Erro ao conectar com a base de dados: ", err);
  }
);
