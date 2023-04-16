'use strict'

// CREAMOS UN FICHERO DE RUTAS 

/*importamos el modulo express , tambien importamos el fichero de productos controlador */

var express = require('express');

var productController = require ('../controller/product');

var router = express.Router();


// creamos la ruta asignandole un nombre y la funcion del controlador de producto


router.post('/save' ,productController.save);

router.get('/all' ,productController.getProducts);

//router.delete('/delete/:id' , productController.getDeleteProduct);

module.exports = router;

