import React from 'react'
import Hero from './_components/Hero'
import SearchBar from './_components/Search'
import RestaurantCards from './_components/RestaurantCards'

const page = () => {
  return (
    <main>
      
      <Hero/>
      {/* <SearchBar/> */}
      <RestaurantCards/>
    </main>
  )
}

export default page