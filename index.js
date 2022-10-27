/*const http= require ("http")
const host = 'localhost';
const port = 8000;

const requestLister=function(req,res){
res.writeHead(200);
Response.apply("Eto es un servido");
};

const server=http.createServer(requestLister);
server.listen(port,host,()=>{
    console.log(`servidos ejecutado sobre http://${host}:${port}`);
})

*/
/*const op=require('./ejercicio1.js')
console.log(op)
op.sumar(2,4)
//op.dividir(4,2)
/*op.restar(5,3)
op.multiplicar(4,2)
op.dividir(8,2)*/

/*const http=require("http")
function handleServer(req,res){
res.write('<h1>Respuesta del Usuario </h1>')
res.end()
}

const server=http.createServer(handleServer).listen(3001)*/

const express = require('express')
const app = express()
const port = 3000
app.use(express.static(__dirname + '/public'));

app.set('view engine','ejs')

app.set('views',__dirname + '/views')

//rutas
app.use('/',require('./routes/Routes'))

app.use((req,res,next)=>{

res.status(404).sendFile(__dirname + '/public/404.html')
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})