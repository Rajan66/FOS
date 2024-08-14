"use client"
import React, { useState, useEffect, useRef } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import restaurantImage from '@/public/assets/restaurant.png'
import { useGetAllRestaurants } from "@/hooks/restaurantsQueries";
import Loading from "@/components/Loading";

const RestaurantCards = () => {
    const [page, setPage] = useState<number>(1);  // Always initializes to 1
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [restaurantList, setRestaurantList] = useState<any[]>([]);
    const { data: restaurants, isPending } = useGetAllRestaurants(page);
    const loaderRef = useRef<HTMLDivElement | null>(null);

    const restaurantsPerPage = 6;

    useEffect(() => {
        if (restaurants?.content) {
            setRestaurantList((prevList) => [...prevList, ...restaurants.content]);
            window.scrollTo(0, 0);
        }
    }, [restaurants]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && page === 1) {
                    loadMoreRestaurants();
                }
            },
            { threshold: 1 }
        );

        if (loaderRef.current) {
            observer.observe(loaderRef.current);
        }

        return () => {
            if (loaderRef.current) {
                observer.unobserve(loaderRef.current);
            }
        };
    }, [restaurantList, page]);

    const loadMoreRestaurants = () => {
        if (currentIndex + restaurantsPerPage >= restaurantList.length) {
            setPage((prevPage) => prevPage + 1);
        } else {
            setCurrentIndex((prevIndex) => prevIndex + restaurantsPerPage);
        }
    };

    const displayedRestaurants = restaurantList.slice(0, currentIndex + restaurantsPerPage);

    return (
        <section className="mt-10 mx-[20px] md:mx-[40px] 2xl:mx-[80px] max-md:flex-wrap">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-14">
                {displayedRestaurants.map((restaurant) => (
                    <Card key={restaurant.restaurantId} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <Image
                                src={restaurantImage}
                                alt={restaurant.name}
                                width={400}
                                height={200}
                                className="rounded-t-md object-cover h-[300px]"
                                loading="lazy"
                            />
                        </CardHeader>
                        <CardContent>
                            <CardTitle>{restaurant.name}</CardTitle>
                            <CardDescription>{restaurant.cuisine}</CardDescription>
                        </CardContent>
                        <CardFooter>
                            <button className="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition-colors">
                                View Details
                            </button>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            {isPending && (
                <div className="flex justify-center mt-6">
                    <Loading />
                </div>
            )}

            <div ref={loaderRef} className="h-10"></div>
        </section>
    );
};

export default RestaurantCards;
