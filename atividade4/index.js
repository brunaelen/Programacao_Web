const express  = require('express');
const app = express();
const calculo = require('./util/calculadora');

app.get('/somar/:a/:b', function (req, res) {
    let a = req.params.a
    let b = req.params.b
    let c = calculo.somar(a, b);
    res.send(""+c);
});

app.get('/subtrair/:a/:b', function (req, res) {
    let a = req.params.a
    let b = req.params.b
    let c = calculo.subtrair(a, b);
    res.send(""+c);
});

app.get('/multiplicar/:a/:b', function (req, res) {
    let a = req.params.a
    let b = req.params.b
    let c = calculo.multiplicar(a, b);
    res.send(""+c);
});

app.get('/dividir/:a/:b', function (req, res) {
    let a = req.params.a
    let b = req.params.b
    let c = calculo.dividir(a, b);
    res.send(""+c);
});