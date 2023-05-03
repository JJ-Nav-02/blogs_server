const Blog = require('../models/blog')
const User = require('../models/user')

const initialBlogs = [
  {
    title: 'Blog post 1',
    author: 'Author 1',
    url: 'www.example.com/1',
    likes: 8
  },
  {
    title: 'Blog post 2',
    author: 'Author 2',
    url: 'www.example.com/2',
    likes: 16
  },
]

const initialUsers = [
  {
    username: 'username 1',
    name: 'user 1',
    password: '1111'
  },
  {
    username: 'username 2',
    name: 'user 2',
    password: '222'
  }
]

const nonExistingId = async () => {
  const blog = new Blog({ title: 'toRemove', author: 'removeAuthor', url: 'www.remove.com', likes: 1 })
  await blog.save()
  await blog.remove()

  return blog._id.toString()
}

const blogsInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map(blog => blog.toJSON())
}

const userInDb = async () => {
  const users = await User.find({})
  return users.map( u => u.toJSON())
}

module.exports = {
  initialBlogs,
  initialUsers,
  nonExistingId,
  blogsInDb,
  userInDb
}
