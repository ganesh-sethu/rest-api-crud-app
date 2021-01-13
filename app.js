const express = require("express");
const app = express();
const itemRoute = require("./routes/items");
const bodyParser = require('body-parser');

port=process.env.PORT || 3000;


app.get("/",(req,res)=>{
    res.send("you are on homepage,go to /crud route to perform crud operations in a array");
})
// app.use(()=>{
//     console.log('req res cycle triggered...');
// })
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
var arr=[{"id":1,"name":"ganesh","degree":"be"},
{"id":2,"name":"charan","degree":"me"},
{"id":3,"name":"raja","degree":"bsc"},
{"id":4,"name":"mrudul","degree":"mds"}];

app.use("/crud",itemRoute)

app.listen(port);

console.log("listening on port 3000...");
exports.arr=arr;