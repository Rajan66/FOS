"use client"

import Image from 'next/image'
import React from 'react'
import restaurant from '@/public/assets/restaurant.png'
import Link from 'next/link'
import { Button } from '../ui/button'

import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const Recommendations = () => {
    return (
        <section className="mt-10 md:mt-20 mx-[20px] md:mx-[40px] 2xl:mx-[80px] max-md:flex-wrap">
            <h1 className="text-[42px] font-bold text-center">Top Picks for you</h1>
            <Carousel
                plugins={[
                    Autoplay({
                        delay: 2000,
                        stopOnMouseEnter: true,
                    })
                ]}
                opts={{
                    loop: true
                }}
                className="max-w-full justify-center flex"
            >
                <CarouselContent className="flex">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index} className="basis-full">
                            <div className="max-md:max-w-full mt-10 md:mt-20 ">
                                <div className="flex gap-5 max-mmd:flex-col max-md:gap-0">
                                    <div className="flex flex-col w-[41%] max-mmd:w-full">
                                        <Image
                                            src={restaurant}
                                            width={500}
                                            height={500}
                                            alt="Restaurant"
                                            className="mmd:grow w-full aspect-[1.43] max-mmd:mt-6"
                                        />
                                    </div>
                                    <div className="flex flex-col ml-5 w-[59%] max-mmd:ml-0 max-mmd:w-full">
                                        <div className="flex flex-col self-stretch my-auto text-lg font-medium text-black max-md:mt-10">
                                            <h3 className="text-[28px] font-medium">Alchemy Pizzeria</h3>
                                            <p className="mt-6 font-light leading-[26px] max-md:mt-4">
                                                Lorem ipsum dolor sit amet consectetur. Nibh rhoncus tincidunt in posuere morbi in ac fames et. Duis lacus scelerisque in massa dictumst nibh phasellus. Malesuada nisl in eget curabitur interdum. Leo scelerisque condimentum id ac justo praesent. Viverra fringilla et pretium nibh pellentesque vulputate viverra interdum. Ipsum montes tincidunt diam amet tristique varius nec quis posuere. Aliquam eu pharetra pharetra scelerisque id dolor.
                                            </p>
                                            <Link href="/about" className="flex justify-start items-center mt-[28px]">
                                                <Button className="">
                                                    {`Order Now ->`}
                                                </Button>
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className='hidden md:block'>
                    <CarouselPrevious />
                    <CarouselNext />
                </div>
            </Carousel>
        </section>
    )
}

export default Recommendations