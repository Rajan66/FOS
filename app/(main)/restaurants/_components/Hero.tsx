import Image from 'next/image'
import hero from '@/public/assets/hero.jpg'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'

const Hero = () => {
    return (
        <div className="relative bg-cover bg-center h-96" style={{ backgroundImage: `url(${hero.src})` }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex items-center justify-center h-full mx-[20px] md:mx-[40px] 2xl:mx-[80px] my-2 max-md:flex-wrap">
                <div className="text-start text-white">
                    <h1 className="text-5xl font-bold">Restaurants</h1>
                    <p className="mt-4 text-lg">Find your favorite restaurants</p>
                    <div className='flex mt-4'>
                        <Input className='rounded-none focus:no-underline text-black placeholder:opacity-80 placeholder:italic' placeholder='Search Away!' />
                        <Button className='border border-1 bg-secondary rounded-none h-10 px-3 py-2 hover:bg-secondary/80 gap-2' >
                            <Search />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
