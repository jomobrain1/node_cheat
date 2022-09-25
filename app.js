const express=require("express")
const app=express()
const mongoose=require('mongoose')

const blogRoutes=require("./routes/blogRoutes")

// dbUri
const dbUri="mongodb+srv://jomobrain1:19BrainEmpire9149@cluster0.eew0u0n.mongodb.net/blogs?retryWrites=true&w=majority"
mongoose.connect(dbUri,{useNewUrlParser:true,useUnifiedTopology:true})
.then((result)=>{
    console.log("connected to database")
    app.listen(3000)
})
.catch((e)=>console.log(e))


app.set('view engine','ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

// Middleware runs  after a request and before a response
app.use((req,res,next)=>{
    console.log('A request has been made')
    console.log('this middleware is called')
    console.log('Host name',req.hostname)
    console.log('Path',req.path)
    console.log('method',req.method)
    next()
})

app.use((req,res,next)=>{
    console.log('This middleware is fireD')
    next()
    
})
app.get('/',(req,res)=>{
    res.redirect('/blogs')
})
// Viewing Single in  Database
app.get('/single',(req,res)=>{
    Blog.findById("63308719db3cd83e3d0a9d38")
    .then((result)=>{res.send(result)})
    .catch(err=>console.log(err))
})
app.get('/add',(req,res)=>{
    const blog=new Blog({
        title:"blog 2 by JomoBrain2 beast",
        body:"Good boy just keep being a beast the sky is the limit"
    })
    blog.save()
    .then((result)=>{res.send(result)})
    .catch(err=>console.log(err))    
})
// -=============================================



//==================== All Pages=================================
app.get('/create',(req,res)=>{
    res.render('create',{title:"Create blog"})
})
app.get('/contact',(req,res)=>{
    res.render('contact',{title:"Contact"})
})
app.get('/about',(req,res)=>{
    res.render('about',{title:"Title"})
})
app.use('/blogs',blogRoutes)
app.use((req,res)=>{
    res.status(404).render('404')
})

 
