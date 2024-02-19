// var soma = require('./soma.js')
// var sub = require('./sub.js')
// var div = require('./div.js')
// var mult = require('./mult.js')

// console.log("A soma é: ", soma(10,10))
// console.log("A sub é: ", sub(10, 5))
// console.log("A div é: ", div(10, 2))
// console.log("A mult é: ", mult(10, 5))

var http = require('http')

http.createServer(function(req, res){
    res.end("Mensagem direcionada")
}).listen(8081)

console.log("Servidor está ativo!")