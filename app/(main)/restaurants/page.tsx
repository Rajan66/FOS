import React from 'react'
import SearchBar from './_components/Search'
import RestaurantCards from './_components/RestaurantCards'

const page = () => {
  return (
    <main className="mt-10 mx-[20px] md:mx-[40px] 2xl:mx-[80px] max-md:flex-wrap">
      
      <SearchBar/>
      <RestaurantCards/>
    </main>
  )
}

export default page