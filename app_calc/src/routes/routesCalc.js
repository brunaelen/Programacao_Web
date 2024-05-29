const express = require('express');
const router  = express.Router();
const rota = require('../controller/controllerCalc');

router.get('/', rota.index);
router.post('/resultado', rota.resultado);

module.exports = router;