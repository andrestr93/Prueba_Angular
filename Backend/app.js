"use strict";

// Cargar modulos de Node para crear servidor

var express = require("express");

var bodyParse = require("body-parser");
const bodyParser = require("body-parser");

//Ejecutar Express

var app = express();

// Cargar ficheros rutas

// MIddlewares

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Cors

//Cargar rutas

var product_routes = require('./routes/product');

app.use( '/', product_routes);


// Exportar modulos

module.exports = app;
