import Divider from '@/components/Divider'
import Food from '@/components/Home/Food'
import Cuisine from '@/components/Home/Cuisine'
import Hero from '@/components/Home/Hero'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero />
      <Food />
      <Divider />
      <Cuisine />
      <Divider />
    </div>
  )
}

export default page