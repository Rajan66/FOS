"use client"

import { useGetAllRestaurants } from "@/hooks/restaurantQueries";
import { useMutation } from "@tanstack/react-query";


export default function Home() {
  // const [page, setPage] = useState<number>(1);

  const { data: restaurantData, isPending } = useGetAllRestaurants()
  console.log(restaurantData)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <p className="text-black">Our Food App Setup is Complete?</p>
      {restaurantData?.content.map((restaurant: any) => (
        <div className="text-black">
          <p>{restaurant.name}</p>
          <p>{restaurant.restaurantId}</p>
          <p>{restaurant.cuisine}</p>
          <p>{restaurant.email}</p>
          <p>{restaurant.contact}</p>
        </div>
      ))}
      <button className="text-black">
        Order now
      </button>
    </main>
  );
}
