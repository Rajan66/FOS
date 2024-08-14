"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import MenuBar from './_components/MenuBar';
import { categories } from './list/categories';
import { useParams } from 'next/navigation';
import { useGetRestaurant } from '@/hooks/restaurantsQueries';

const page = () => {
    const { id: id } = useParams();
    const { data: restaurantData, isPending } = useGetRestaurant(Number(id));
    const [selectedCategory, setSelectedCategory] = useState('Burgers');

    const filteredItems = categories.find(category => category.name === selectedCategory)?.items || [];

    return (
        <main className="bg-gray-50 min-h-screen">
            {/* Header Section */}
            <div className="relative h-64 md:h-96">
                <Image
                    src={restaurantData?.image || "/path-to-hero-image.jpg"}
                    alt={restaurantData?.name || "Restaurant Name"}
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                />
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h1 className="text-4xl font-bold">{restaurantData?.name}</h1>
                    {/* <p className="mt-2">{restaurantData?.cuisine.join(' • ')}</p> */}
                    <p className="mt-2">{restaurantData?.cuisine}</p>
                    <p className="mt-2">{restaurantData?.address}</p>
                    {/* <p className="mt-2">Rating: {restaurant.rating} ⭐ ({restaurant.reviews})</p> */}
                    <div className="flex mt-4 space-x-4">
                        <button className="bg-red-500 px-4 py-2 rounded-lg">Delivery</button>
                        <button className="bg-gray-500 px-4 py-2 rounded-lg">Pickup</button>
                    </div>
                </div>
            </div>

            {/* Menu Bar Section */}
            <MenuBar
                categories={categories.map(category => category.name)}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
            />

            {/* Menu Section */}
            <div className="px-6 py-10">
                <h2 className="text-2xl font-semibold mb-4">{selectedCategory}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredItems.map((item, idx) => (
                        <div key={idx} className="flex items-center bg-white p-4 rounded-lg shadow-md">
                            <Image
                                src={item.imageUrl}
                                alt={item.name}
                                width={100}
                                height={100}
                                className="rounded-lg"
                            />
                            <div className="ml-4">
                                <h3 className="text-lg font-semibold">{item.name}</h3>
                                <p className="text-gray-600 mt-1">{item.description}</p>
                                <p className="text-gray-800 font-bold mt-2">{item.price}</p>
                            </div>
                            <button className="ml-auto bg-yellow-500 text-white px-3 py-1 rounded-lg">+</button>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default page;
