import express from "express";
import {addBlog,updateBlog,getById,deleteBlog,getAllBlogs, getByUserId } from "../controllers/blog-controller";
const blogRouter=express.Router();

//routing on main path
blogRouter.get("/",getAllBlogs);
blogRouter.post("/add",addBlog);
blogRouter.put("/update/:id",updateBlog);
blogRouter.get("/:id",getById);
blogRouter.delete("/:id",deleteBlog);
blogRouter.get("/user/:id",getByUserId)

export default blogRouter;