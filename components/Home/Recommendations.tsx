"use client"

import Image from 'next/image'
import React from 'react'
import restaurantImage from '@/public/assets/restaurant.png'
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
import { ChevronRight } from 'lucide-react'
import { useGetAllRestaurants, useGetRestaurantRecommendation } from '@/hooks/restaurantsQueries'
import { useSession } from 'next-auth/react'
import { useGetAllOrders } from '@/hooks/orderQueries'

const Recommendations = () => {
    const session = useSession();

    const userId = session.data?.user?.id;
    const orders = useGetAllOrders(userId, 1);

    const { data: restaurantData, isPending } = useGetAllRestaurants(2);
    const { data: data, isPending: isLoading } = useGetRestaurantRecommendation(orders.data?.content, session?.data?.user?.access_token);

    console.log(data)

    return (
        <section className="mt-10 md:mt-20 mx-[20px] md:mx-[40px] 2xl:mx-[80px] max-md:flex-wrap">
            <h1 className="text-[42px] font-bold text-center">Top Picks for you</h1>
            <Carousel
                plugins={[
                    Autoplay({
                        delay: 3000,
                        stopOnMouseEnter: true,
                    })
                ]}
                opts={{
                    loop: true
                }}
                className="max-w-full justify-center flex"
            >
                <div className='xl:mx-20'>
                    <CarouselContent className="flex">
                        {restaurantData?.content.slice(0, 5).map((restaurant, index) => (
                            <CarouselItem key={index} className="basis-full">
                                <div className="max-md:max-w-full mx-10 mt-10 md:mt-20 ">
                                    <div className="flex gap-5 max-mmd:flex-col max-md:gap-0">
                                        <div className="flex flex-col w-[41%] max-mmd:w-full">
                                            <Image
                                                src={restaurant?.image || restaurantImage}
                                                width={500}
                                                height={500}
                                                alt="Restaurant"
                                                className="mmd:grow w-full aspect-[1.43] max-mmd:mt-6"
                                            />
                                        </div>
                                        <div className="flex flex-col ml-5 w-[59%] max-mmd:ml-0 max-mmd:w-full">
                                            <div className="flex flex-col self-stretch my-auto text-lg font-medium text-black max-md:mt-10">
                                                <h3 className="text-[28px] font-medium">{restaurant.name}</h3>
                                                <p className="mt-6 font-light leading-[26px] max-md:mt-4">
                                                    {restaurant.description}
                                                </p>
                                                <Link href="/about" className="flex justify-start items-center mt-[28px]">
                                                    <Button className="text-base text-white bg-primary hover:bg-primary/90">
                                                        {`Order Now`} <ChevronRight />
                                                    </Button>
                                                </Link>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </div>
                <div className='hidden md:block'>
                    <CarouselPrevious />
                    <CarouselNext />
                </div>
            </Carousel>
        </section>
    )
}

export default Recommendations