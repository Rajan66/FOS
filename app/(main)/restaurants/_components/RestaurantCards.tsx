"use client"
import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { useGetAllRestaurants } from "@/hooks/restaurantsQueries";


const RestaurantCards = () => {
    const [page, setPage] = useState<number>(1);

    const { data: restaurants, isPending } = useGetAllRestaurants(page);
    console.log(restaurants)
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {restaurants?.content.map((restaurant) => (
                <Card key={restaurant.restaurantId} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                        <Image
                            src={''}
                            alt={restaurant.name}
                            width={400}
                            height={200}
                            className="rounded-t-md object-cover"
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
    );
};

export default RestaurantCards;
