import express  from "express";
import ejsLayouts from "express-ejs-layouts";

const server = express();
const port = 3000;

server.set('view engine', 'ejs');
server.use(ejsLayouts);

server.get('/',(req, res)=>{res.send("<center><h2>Easily</h2></center>")})

server.listen(port,(err)=>{
    if(err)
        console.log(err)
    else
        console.log(`Server is listening on ${port}`)
})