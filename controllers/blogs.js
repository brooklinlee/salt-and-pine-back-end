import { Profile } from "../models/profile.js"
import { Blog } from "../models/blog.js"


async function create(req, res){
  try {
    req.body.author = req.user.Profile
    const blog = await Blog.create(req.body)
    const profile = await Profile.findByIdAndUpdate(
      req.user.profile,
      { $push: {blogs: blog} },
      { new: true }
    )
    blog.author = profile
    res.status(201).json(blog)
  } catch (error) {
    console.log('❌', error)
    res.status.json(500).json(error)    
  }
}

async function index(req,res){
  try {
    const blogs = await Blog.find({})
      .populate('author')
      .sort({ createdAt: 'desc' })
      res.status(200).json(blogs)
  } catch (error) {
    console.log('❌', error)
    res.status.json(500).json(error)
  }
}

export { 
  create,
  index
}