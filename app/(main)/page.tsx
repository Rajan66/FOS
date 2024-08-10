import Divider from '@/components/Divider'
import Food from '@/components/Home/Food'
import Cuisine from '@/components/Home/Cuisine'
import Hero from '@/components/Home/Hero'
import React from 'react'
import Restaurants from '@/components/Home/Restaurants'
import Recommendations from '@/components/Home/Recommendations'

const page = () => {
  return (
    <div>
      <Hero />
      <Food />
      <Divider />
      <Restaurants />
      <Divider />
      <Recommendations />
      <Divider />
      <Cuisine />
      <Divider />
    </div>
  )
}

export default page