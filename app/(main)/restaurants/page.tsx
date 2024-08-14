import React from 'react'
import Hero from './_components/Hero'
import SearchBar from './_components/Search'
import RestaurantCards from './_components/RestaurantCards'
import Filter from './_components/Filter'

const page = () => {
  return (
    <main>
      
      <Hero/>
      {/* <SearchBar/> */}
      {/* <Filter/> */}
      <RestaurantCards/>
    </main>
  )
}

export default page