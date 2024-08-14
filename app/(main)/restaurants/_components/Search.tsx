import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'

const SearchBar = () => {
    return (
        <div className='flex mt-4'>
            <Input className='rounded-none focus:no-underline text-black placeholder:opacity-80 placeholder:italic' placeholder='Find your favorite restaurants' />
            <Button className='border border-1 bg-secondary rounded-none h-10 px-3 py-2 hover:bg-secondary/80 gap-2' >
                <Search />
            </Button>
        </div>
    )
}

export default SearchBar