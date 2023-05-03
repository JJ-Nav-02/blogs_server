/* eslint-disable no-unused-vars */
const blogsRouter = require('express').Router()
const { request, response } = require('express')
const Blog = require('../models/blog')

/* 4.1 - 4.7
blogsRouter.get('/',(request,response,next) => {
    Blog.find({}).then(blogs =>{
        response.json(blogs)
    })
})


blogsRouter.post('/', (request, response, next) => {
    const blog = new Blog(request.body)

    blog.save().then(result => {
        response.status(201).json(result)
    })
})

*/
// 4.8 - 4.14
blogsRouter.get('/', async(request, response) => {
  const blogs = await Blog.find({})
  response.json(blogs)
})

blogsRouter.get('/:id', async(request, response) => {
  const blog = await Blog.findById(request.params.id)
  if (blog) {
    response.json(blog)
  } else {
    response.status(404).end()
  }
})

blogsRouter.delete('/:id', async(request, response) => {
  await Blog.findByIdAndRemove(request.params.id)
  response.status(204).end()
})

blogsRouter.put('/:id', async(request, response) => {
  const { title, author, url, likes } = request.body
  const blog = { title, author, url, likes }

  const updatedBlog = await Blog.findByIdAndUpdate(request.params.id, blog, { new: true })
  response.json(updatedBlog)
})

blogsRouter.post('/', async(request, response) => {
  const { title, author, url, likes } = request.body
  const blog = new Blog ({ title, author, url, likes })
  const newBlog = await blog.save()

  response.status(201).json(newBlog)
})


module.exports = blogsRouter