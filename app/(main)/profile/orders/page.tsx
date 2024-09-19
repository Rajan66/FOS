"use client"
import Loading from '@/components/Loading';
import { useGetAllOrders } from '@/hooks/orderQueries';
import { useGetRestaurant } from '@/hooks/restaurantsQueries';
import { useSession } from 'next-auth/react';
import React from 'react';

const OrdersPage = () => {
  const { data: session } = useSession();
  const { data: orders, isPending: isLoading } = useGetAllOrders(session?.user?.id, 1);
  console.log(orders)

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="mt-20 mx-[20px] md:mx-[40px] 2xl:mx-[80px] max-md:flex-wrap flex flex-col gap-y-10 justify-center items-center mb-20">
      {orders?.content?.length ? (
        <ul className=''>
          {orders?.content?.map((order) => (
            <div>
              <li key={order.id} className="my-6">
                <h3>Order ID: {order.id}</h3>
                <p>Restaurant: {order.restaurant?.name}</p>
                <p>Total Price: Rs. {order.totalPrice}</p>
                <p>Status: {order.orderStatus}</p>
                <ul>
                  {order.orderDetails?.map((detail) => (
                    <li key={detail.id}>
                      <span>Food: {detail.foodName}</span> -
                      <span> Quantity: {detail.quantity}</span>
                    </li>
                  ))}
                </ul>
              </li>
              <hr />
            </div>

          ))}
        </ul>
      ) : (
        <p>No orders found.</p>
      )}
    </section>
  );
}

export default OrdersPage;
