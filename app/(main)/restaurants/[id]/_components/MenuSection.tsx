"use client"
import React from 'react';
import Image from 'next/image';
import imgPlaceholder from '@/public/assets/img-placeholder.png';

interface MenuSectionProps {
    selectedCategory: string;
    foodItems: Food[];
}

const MenuSection: React.FC<MenuSectionProps> = ({ selectedCategory, foodItems }) => {
    return (
        <div className="px-6 py-10">
            <h2 className="text-2xl font-semibold mb-4">{selectedCategory}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {foodItems.map((item, idx) => (
                    <div key={idx} className="flex items-center bg-white p-4 rounded-lg shadow-md">
                        <Image
                            src={imgPlaceholder}
                            alt={item.name}
                            width={100}
                            height={100}
                            className="rounded-lg"
                        />
                        <div className="ml-4">
                            <h3 className="text-lg font-semibold">{item.name}</h3>
                            {/* <p className="text-gray-600 mt-1">{item.description}</p> */}
                            <p className="text-gray-800 font-bold mt-2">{item.price}</p>
                        </div>
                        <button className="ml-auto bg-yellow-500 text-white px-3 py-1 rounded-lg">+</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MenuSection;
