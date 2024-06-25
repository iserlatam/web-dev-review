const { Router } = require('express');
const router = Router();

const storeCtrl = require('../controllers/storeController');

router.get(
  '/products', // <- Paso 1: Solicita el endpoint
  // <- Paso 2? Ejecutar middleware
  storeCtrl.getProducts // <- Paso 3: el middleware decide si ejecuta el controlador
);

router.get('/product/id/:id', storeCtrl.getProduct);

module.exports = router;
