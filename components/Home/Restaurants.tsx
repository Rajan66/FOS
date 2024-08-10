import Image from 'next/image'
import React from 'react'
import restaurant from '@/public/assets/restaurant.png'

const Restaurants = () => {
    return (
        // TODO i think mt-10 is better for all screens than mt-20?
        <section className="mt-10 md:mt-20 mx-[20px] md:mx-[40px] 2xl:mx-[80px] max-md:flex-wrap">
            <h1 className="text-[42px] font-bold text-center">Featured Restaurants</h1>
            <div className='mt-10 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20'>
                <div className='flex flex-col items-center justify-center gap-5'>
                    <Image
                        src={restaurant}
                        alt='Restaurant'
                        width={300}
                        height={300}
                        className=''
                    />
                    <h3 className="text-2xl font-bold opacity-80">Fire and Ice Pizzeria</h3>
                </div>
                <div className='flex flex-col items-center justify-center gap-5'>
                    <Image
                        src={restaurant}
                        alt='Restaurant'
                        width={300}
                        height={300}
                        className=''
                    />
                    <h3 className="text-2xl font-bold">Fire and Ice Pizzeria</h3>
                </div>
                <div className='flex flex-col items-center justify-center gap-5'>
                    <Image
                        src={restaurant}
                        alt='Restaurant'
                        width={300}
                        height={300}
                        className=''
                    />
                    <h3 className="text-2xl font-bold">Fire and Ice Pizzeria</h3>
                </div>
                <div className='flex flex-col items-center justify-center gap-5'>
                    <Image
                        src={restaurant}
                        alt='Restaurant'
                        width={300}
                        height={300}
                        className=''
                    />
                    <h3 className="text-2xl font-bold">Fire and Ice Pizzeria</h3>
                </div>
                <div className='flex flex-col items-center justify-center gap-5'>
                    <Image
                        src={restaurant}
                        alt='Restaurant'
                        width={300}
                        height={300}
                        className=''
                    />
                    <h3 className="text-2xl font-bold">Fire and Ice Pizzeria</h3>
                </div>
                <div className='flex flex-col items-center justify-center gap-5'>
                    <Image
                        src={restaurant}
                        alt='Restaurant'
                        width={300}
                        height={300}
                        className=''
                    />
                    <h3 className="text-2xl font-bold">Fire and Ice Pizzeria</h3>
                </div>
                <div className='flex flex-col items-center justify-center gap-5'>
                    <Image
                        src={restaurant}
                        alt='Restaurant'
                        width={300}
                        height={300}
                        className=''
                    />
                    <h3 className="text-2xl font-bold">Fire and Ice Pizzeria</h3>
                </div>
                <div className='flex flex-col items-center justify-center gap-5'>
                    <Image
                        src={restaurant}
                        alt='Restaurant'
                        width={300}
                        height={300}
                        className=''
                    />
                    <h3 className="text-2xl font-bold">Fire and Ice Pizzeria</h3>
                </div>

            </div>

        </section>
    )
}

export default Restaurants