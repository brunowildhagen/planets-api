'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var planet = new Schema({
    nome:{
        type:String,
        required:"O planeta deve ter um nome."
    },
    clima:{
        type:String,
        required:"O planeta deve ter um clima."
    },
    terreno:{
        type:String,
        required:"O planeta deve ter um tipo de terreno."
    },
	featured:[{
		type:Number,
		required:"Digite o número de aparições do planeta em filmes."
	}]
});

module.exports = mongoose.model("Planets", planet);
