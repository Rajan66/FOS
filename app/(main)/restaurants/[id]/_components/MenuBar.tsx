import React from 'react';

const MenuBar = ({ categories, selectedCategory, onSelectCategory }: any) => {
    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-6 py-4 flex items-center space-x-6 overflow-x-auto">
                {/* Hamburger Menu Icon */}
                <div className="flex-shrink-0">
                    <button className="focus:outline-none">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>

                {/* Menu Items */}
                {categories.map(({ category, index }: any) => (
                    <button
                        key={index}
                        onClick={() => onSelectCategory(category)}
                        className={`text-lg   font-medium pb-2 whitespace-nowrap ${selectedCategory === category ? 'border-b-2 border-black' : 'text-gray-600'
                            }`}
                    >
                        {category}
                    </button>
                ))}

                {/* Search Bar */}
                <div className="flex-grow text-right">
                    <input
                        type="text"
                        placeholder="Search in Shake Shack (Fulton Transit Center)"
                        className="bg-gray-100 text-sm py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-300"
                    />
                </div>
            </div>
        </nav>
    );
};

export default MenuBar;
