"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputBox from "@/components/InputBox";
import { Button } from "@/components/ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createOrder } from "@/apicalls/order";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { TOrder, OrderSchema } from "@/schemas/orderSchema";
import { Card, CardContent } from "@/components/ui/card";
import { Banknote } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { useGetMenuDetail } from "@/hooks/menusQueries";
import { clearCart } from "@/store/slices/cartSlice";

const OrderForm = () => {
    const router = useRouter();
    const queryClient = useQueryClient();
    const session = useSession();
    const user = session.data?.user;
    const dispatch = useDispatch();


    const [selectedPayment, setSelectedPayment] = useState(null);

    const cart = useSelector((state: RootState) => state.cart.items);
    const menuId = cart.length > 0 ? cart[0].menuId : -1;
    const menu = useGetMenuDetail(menuId, session?.data?.user?.access_token);

    const subtotal = cart.reduce(
        (total, food) => total + parseFloat(food.price) * food.quantity,
        0
    );

    const totalQuantity = cart.reduce(
        (quantity, food) => quantity + food.quantity,
        0
    );

    const total = subtotal + 120;
    const averagePrice = subtotal / totalQuantity;

    const handleSelect = (paymentType: any) => {
        setSelectedPayment(paymentType);
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
        reset,
    } = useForm<TOrder>({
        resolver: zodResolver(OrderSchema),
        mode: "onChange",
    });

    const { mutate, isPending, error } = useMutation({
        mutationFn: createOrder,
        onSuccess: (data: any) => {
            if (data?.status === 201) {
                queryClient.invalidateQueries({ queryKey: ["orders"] });
                toast.success("Order Created Successfully");
                reset();
                router.push("/");
            } else {
                toast.error("Unexpected response status");
            }
        },
        onError: (error: any) => {
            toast.error("An error occurred: " + error.message);
            console.error("Mutation error:", error);
        },
    });

    const onSubmit = async (data: TOrder) => {
        if (selectedPayment === "esewa") {
            console.log("Esewa Payment");
            router.push('/');
        }

        const additionalFields = {
            restaurantId: menu.data?.restaurant.restaurantId,
            paymentStatus: 'pending',
            orderStatus: 'unfulfilled',
            orderDetails: [...cart],
            totalPrice: total,
            averagePrice: averagePrice,
        };

        const orderData = {
            userId: Number(user?.id),
            body: {
                ...data,
                ...additionalFields
            },
            token: session?.data?.user?.access_token
        };
        console.log(orderData)
        mutate(orderData);
        handleClearCart();
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-y-8 py-10  vsm:px-14"
        >
            <InputBox<TOrder>
                name="deliveryAddress"
                id="address"
                placeholder="Enter Delivery Address..."
                register={register}
                error={(errors && errors?.deliveryAddress?.message?.toString()) || ""}
                desc="enter the delivery address"
                label=""
            />

            <div className="flex flex-col sm:flex-row gap-4 ">
                <Card>
                    <CardContent
                        className={`bg-white rounded-lg p-10 flex gap-4 cursor-pointer transition ${selectedPayment === 'cash' ? 'border-2 border-yellow-300' : ''}`}
                        onClick={() => handleSelect('cash')}
                    >
                        <Banknote />
                        <p>Cash on Delivery</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent
                        className={`bg-white rounded-lg p-10 flex gap-4 cursor-pointer transition ${selectedPayment === 'esewa' ? 'border-2 border-yellow-300' : ''}`}
                        onClick={() => handleSelect('esewa')}
                    >
                        <Banknote />
                        <p>Esewa Payment</p>
                    </CardContent>
                </Card>
            </div>

            <Button className="text-base w-[200px] text-white bg-primary hover:bg-primary/80 mt-10">
                {isPending ? (
                    <div className="flex items-center gap-2">
                        <Loader2 className="size-5 animate-spin" />
                        <p>Creating..</p>
                    </div>
                ) : (
                    "Place Order"
                )}
            </Button>
        </form>
    );
};

export default OrderForm