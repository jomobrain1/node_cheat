const express=require("express")
const router=express.Router();
const Blog=require("../models/blog")
const blogController=require("../controller/blogController")


router.get('/',blogController.blog_index)
router.post('/',blogController.blog_post)
router.get('/:id',blogController.blog_single) 
router.delete('/:id',blogController.blog_delete)
 
 module.exports=router