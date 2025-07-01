import React from 'react'
import Expertise from '../components/Expertise'
import Testimonials from '../components/Testimonial'
import BlogPosts from '../components/BlogPost'

const Home = () => {
  return (
    <div>
      <Expertise/>
         <Testimonials />
      <BlogPosts /> 
    </div>
  )
}

export default Home
