import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { ShoppingBasket } from 'lucide-react';
import Image from 'next/image';
import burger from '@/public/assets/burger.png'
import { PlusIcon, MinusIcon } from 'lucide-react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';

const Cart = ({ itemCount }: any) => {

    return (
        <Sheet>
            <SheetTrigger>
                <div className="relative inline-block cursor-pointer">
                    <ShoppingBasket className="size-8" />
                    {itemCount > 0 && (
                        <span className="absolute bottom-1 left-[80%] transform -translate-x-1/2 translate-y-1/2 bg-secondary text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                            {itemCount}
                        </span>
                    )}
                </div>
            </SheetTrigger>
            <SheetContent className="w-full h-full sm:max-w-sm sm:h-auto">
                <div className="p-1 py-2 bg-white rounded-lg h-full flex flex-col justify-between">
                    <div>
                        <h2 className="text-xl font-bold text-center mb-4">Your Shopping Cart</h2>
                        <h2 className="text-lg font-semibold text-center mb-8">Alchemy Pizzeria</h2>
                    </div>

                    {itemCount > 0 ? (
                        <div className="flex flex-col justify-between w-full flex-grow">
                            <div className="flex justify-between">
                                <div className="flex gap-x-2 vvsm:gap-x-6">
                                    <div className="w-auto h-full border justify-center items-center">
                                        <Image src={burger} width={80} height={80} alt="food" />
                                    </div>
                                    <div className="flex flex-col gap-y-1 justify-center items-start text-sm vvsm:text-base">
                                        <p>Burger</p>
                                        <p>Rs. 200</p>
                                    </div>
                                    <div className="flex flex-col gap-x-2 w-10 justify-center items-center">
                                        <ChevronUp className="size-5 text-green-600 w-full" />
                                        <p className="py-2">x 3</p>
                                        <ChevronDown className="size-5 text-red-600 w-full" />
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <p>Rs.600</p>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex flex-col gap-y-4">
                                    <div className="flex justify-between">
                                        <p>Subtotal: </p>
                                        <p className='opacity-70'>600</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p>Delivery Charge: </p>
                                        <p className='opacity-70'>120</p>
                                    </div>
                                    <div className="border border-yellow-300"></div>
                                    <div className="flex justify-between">
                                        <p>Total: </p>
                                        <p className='opacity-70'>720</p>
                                    </div>
                                </div>
                                <Link href={"/checkout"}>
                                    <Button className='w-full mt-10'>
                                        Proceed to Checkout
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <p className="text-center text-gray-600">Your cart is empty</p>
                    )}
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default Cart;
//    <table className="min-w-full bg-white">
//                             <thead>
//                                 <tr className="w-full border-b-2 border-gray-300">
//                                     <th className="py-2 text-left text-sm font-medium text-gray-600">Food Name</th>
//                                     <th className="py-2 text-center text-sm font-medium text-gray-600">Quantity</th>
//                                     <th className="py-2 text-center text-sm font-medium text-gray-600">Price</th>
//                                     <th className="py-2 text-right text-sm font-medium text-gray-600">Total</th>
//                                 </tr>
//                             </thead>
//                             <tbody>

//                                 <tr className="border-b border-gray-200">
//                                     <td className="py-2 text-left text-sm text-gray-800">Cheese Burger</td>
//                                     <td className="py-2 text-center text-sm text-gray-800">5</td>
//                                     <td className="py-2 text-center text-sm text-gray-800">$20</td>
//                                     <td className="py-2 text-right text-sm text-gray-800">
//                                         ${(5 * 20).toFixed(2)}
//                                     </td>
//                                 </tr>

//                             </tbody>
//                             <tfoot>
//                                 <tr>
//                                     <td colSpan={3} className="py-2 text-right text-sm font-bold text-gray-800">Total Price:</td>
//                                     <td className="py-2 text-right text-sm font-bold text-gray-800">${(5 * 20).toFixed(2)}</td>
//                                 </tr>
//                             </tfoot>
//                         </table>