"use client";

import { Minus, Plus } from "lucide-react";

import { useAppContext } from "@/context";
import { Button } from "@/components";

export type CartItemQuantityProps = {
   quantity: number;
   id: string;
};

export function CartItemQuantity({ id, quantity }: CartItemQuantityProps) {
   const { cart, setCart } = useAppContext();

   function updateQuantity(id: string, todo: "add" | "subtract") {
      const index = cart.findIndex((item) => item.id === id);

      if (index !== -1) {
         const updatedItems = [...cart];
         const quantity = updatedItems[index].quantity;

         updatedItems[index] = {
            ...updatedItems[index],
            quantity: todo === "add" ? quantity + 1 : quantity - 1,
         };

         setCart(updatedItems);
      }
   }

   return (
      <div className="flex items-center gap-x-6">
         <span className="text-neutral-600">Quantity: {quantity}</span>
         {quantity > 1 ? (
            <Button size="icon" variant="outline" className="rounded-full" onClick={() => updateQuantity(id, "subtract")}>
               <Minus className="size-4 text-muted-foreground" />
            </Button>
         ) : null}
         <Button size="icon" variant="outline" className="rounded-full" onClick={() => updateQuantity(id, "add")}>
            <Plus className="size-4 text-muted-foreground" />
         </Button>
      </div>
   );
}
