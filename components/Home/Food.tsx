"use client"

import React from 'react'
import Image from 'next/image'
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import { foodItems } from './list/foodItems'

const Food = () => {
    return (
        <section className="mt-20 mx-[20px] md:mx-[40px] 2xl:mx-[80px] max-md:flex-wrap">
            <h1 className="text-[42px] font-bold text-center">What's on your Mind?</h1>
            <div className="flex justify-center items-center mt-14">
                <Carousel
                    plugins={[
                        Autoplay({
                            delay: 2000,
                        }),
                    ]}
                    opts={{
                        loop: true
                    }}
                    className="max-w-full justify-center flex"
                >
                    <CarouselContent className="flex">
                        {foodItems.map((food, index) => (
                            <CarouselItem key={index} className="basis-full sm:basis-1/2 md:basis-1/3 xl:basis-1/5">
                                <div className="flex flex-col justify-center items-center gap-2">
                                    <Image
                                        src={food.image}
                                        alt='food'
                                        width={150}
                                        height={150}
                                        className='w-[130px] h-[120px] border rounded-full bg-gray-50'
                                    />
                                    <span className='text-lg font-semibold opacity-70'>{food.name}</span>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className='hidden md:block'>
                    <CarouselPrevious />
                    <CarouselNext />
                    </div>
                </Carousel>
            </div>
        </section>
    )
}

export default Food