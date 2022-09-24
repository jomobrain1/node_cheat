
const express= require('express')
const app=express();

const bodyParser=require("body-parser")
app.use(bodyParser.urlencoded({extended:true}))

app.get('/',function(req,res){
    res.sendFile(__dirname+"/index.html")
})
app.get('/about',function(req,res){
    res.sendFile(__dirname+"/views/about.html")
})
app.post('/',function(req,res){
    var num1=req.body.num1
    res.send('Num : ',num1)
})

app.get('/contact',function(req,res){
    res.send("<h1>This is the contact page</h1>")
})

// app.use((req,res)=>{
// res.status(404).sendFile(__dirname+"/views/404.html")
// })




app.listen(3000,()=>{console.log('app running on port 3000');})