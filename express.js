

const express= require('express')
const app=express();
app.get('/',function(req,res){
    res.sendFile(__dirname+"/views/index.html")
})
app.get('/about',function(req,res){
    res.sendFile(__dirname+"/views/about.html")
})

app.get('/contact',function(req,res){
    res.send("<h1>This is the contact page</h1>")
})

app.use((req,res)=>{
res.status(404).sendFile(__dirname+"/views/404.html")
})




app.listen(3000,()=>{console.log('app running on port 3000');})