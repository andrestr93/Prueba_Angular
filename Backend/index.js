"use strict";

// realizamos conexión
var mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/api-rest_productos", {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("conexion realizada");

  });
