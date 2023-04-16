'use strict'
/*
CREACION DE MODELO DE PRODUCTO 
*/

var mongoose = require ('mongoose');

var Schema = mongoose.Schema;

var ProductoShema = Schema ({

    title: String,
    description: String,
    price : Number,
});


module.exports = mongoose.model('Product' , ProductoShema);




