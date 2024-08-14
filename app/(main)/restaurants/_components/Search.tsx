import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'

const SearchBar = () => {
    return (
        <section className="mt-10 mx-[20px] md:mx-[40px] 2xl:mx-[80px] max-md:flex-wrap">
            <div className='flex mt-4 justify-center items-center' >
                <Input className='rounded-none focus:no-underline w-80 text-black placeholder:opacity-80 placeholder:italic' placeholder='Find your favorite restaurants' />
                <Button className='border border-1 bg-secondary rounded-none h-10 px-3 py-2 hover:bg-secondary/80 gap-2' >
                    <Search />
                </Button>
            </div>

        </section>


    )
}

export default SearchBar