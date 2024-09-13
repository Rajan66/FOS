import React from 'react'
import Hero from './_components/Hero'
import { ChevronLeft } from 'lucide-react'
import { Input } from '@/components/ui/input'
import OrderForm from './_components/OrderForm'

const page = () => {
    return (
        <section className="mt-10 mx-[20px] md:mx-[40px] 2xl:mx-[80px] max-md:flex-wrap">
            <div>
                <div className='flex gap-x-2 items-center'>
                    <ChevronLeft className='size-6' />
                    <p className='font-semibold text-lg'>Back</p>
                </div>
                <h1 className="text-5xl  mt-4">Checkout</h1>
                <div className='w-full flex justify-between gap-x-10'>
                    <div className='bg-gray-200 w-2/3 p-10'>
                        <h2>Delivery Address</h2>
                        <div className=''>
                            <OrderForm />
                        </div>
                    </div>
                    <div className='bg-gray-300 w-1/3 p-10'>
                        Cart
                    </div>
                </div>
            </div>
        </section>
    )
}

export default page