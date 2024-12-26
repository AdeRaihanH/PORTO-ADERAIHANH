import React from 'react'
import Jumbotron from '../components/Jumbotron'
import Card from '../components/Card'
import Layout from '../layout/Layout'

const Homepage = () => {
  return (
    <div className='bg-blue-300'>
      
    <Layout>
      <Jumbotron/>
      <h1 className='font-bold  text-white mt-2 text-3xl flex flex-col justify-center items-center bg-teal-400 '>SKILL</h1>
      <Card/>
    </Layout>
    </div>
  )
}

export default Homepage