const Blog=require("../models/blog")

// index
const blog_index=(req,res)=>{
 Blog.find()
.then(data=>res.render('index',{title:"All Blogs Here",blogs:data}))
.catch(err=>console.log(err))
}

// post
const blog_post=(req,res)=>{
    const blog=new Blog(req.body)
     blog.save()
    .then(result=>res.redirect('/'))
    .catch(err=>console.log(err))
 }

// Single blog
const blog_single=(req,res)=>{ 
    Blog.findById(req.params.id)
    .then(result=>res.render('single',{title:"SingleBlog",blog:result}))
    .catch(err=>console.log(err))
}

const blog_delete=(req,res)=>{
    let id=req.params.id
    Blog.findByIdAndDelete(id)
    .then((result)=>{ res.json({redirect:"/"})})
    .catch(err=>console.log(err))
}






module.exports={
    blog_index,blog_post,blog_single,blog_delete
}