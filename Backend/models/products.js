'use strict'


/*

CREACION DE MODELO DE PRODUCTO 

*/

var mongoose = require ('mongoose');

var Shema = mongoose.Shema;

var ProductoShema = Shema ({

    title: String,
    description: String,
    price : {type: Number , default: 0},
    image: String
})


module.exports = mongoose.model('Product' , ProductoShema);




