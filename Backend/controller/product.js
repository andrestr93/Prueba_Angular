"use strict";

// para validar datos
var validator = require("validator");
var Product = require("../models/products");

var controller = {
  test: (req, res) => {
    return res.status(200).send({
      curso: "hola como estas",
    });
  },

  // METODO GUARDAR PRODUCTO
  save: (req, res) => {
    var params = req.body;

    try {
      var validator_title = !validator.isEmpty(params.title);
      var validator_description = !validator.isEmpty(params.description);

      if (validator_title && validator_description) {
        // creamos objeto a guardar
        var product = new Product();
        // asignamos valores
        product.title = params.title;
        product.description = params.description;
        product.image = null;
        product.price = 0;

        product.save().then((result) => {
          return res.status(200).send({
            producto: product,
          });
        });
      }
    } catch (err) {
      console.log("error");
    }
  },

  getProducts: (req, res) => {
    try {
      Product.find({}).then((result) => {
        return res.status(200).send({
          productos: result,
        });
      });
    } catch (err) {
      return res.status(404).send({
        mensaje: "error al sacar los articulos",
      });
    }
  },

  getDeleteProduct: (req, res) => {
    var productid = req.params.id;
    

    
    try {
      Product.findOneAndDelete({_id: productid} , (err , productremoved)).then((result) => {
       
        return res.status(200).send({
          productos: result,
          mensaje: 'exito al borrar producto'
        });
      })
    } catch (err) {
      return res.status(404).send({
        mensaje: 'error al borrar el producto',
      });
    }
    
  },

  /*
app.post("/delete" , async ( req , res ) =>{
  await Data.findOneAndRemove({
      _id: req.get("id")   
  })
  res.send("Deleted!")
})
*/

  /*
  getDeleteProduct: (res, req) => {
    var productid = req.params.id;

    Product.findOneAndDelete({ _id: productid }, (err, productremoved) => {
      return res.status(200).send({
        productremoved,
      });
    });
    
  },
  */
};

module.exports = controller;
