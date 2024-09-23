"use client";

import { Trash } from "lucide-react";
import Image from "next/image";

import { Button, CartItemQuantity, NutritionalScore } from "@/components";
import { alreadyInCart, nutriscorePresent } from "@/lib";
import { EmptyCart } from "./_components/empty-cart";
import { useAppContext } from "@/context";
import { toast } from "@/hooks";

export default function Cart() {
   const { cart, setCart } = useAppContext();

   function removeFromCart(id: string) {
      if (!alreadyInCart({ cart, productId: id }).found) return;
      setCart((prev) => prev.filter((item) => item.id !== id));
      toast({ title: "Product removed from cart" });
   }

   return cart?.length ? (
      <section className="container py-10">
         <h1 className="font-serif text-3xl font-semibold">Your Cart</h1>
         <div className="mt-10 divide-y-2">
            <h2 className="pb-2 text-xl">Total Items: {cart.length}</h2>
            {cart.map((item, index) => (
               <article key={`Cart-Item-${index + 1}-${item.id}`} className="flex flex-col py-6 sm:flex-row">
                  {item.productImage ? (
                     <div className="relative h-40 w-40 overflow-hidden sm:h-60">
                        <Image
                           src={item.productImage}
                           alt={item.productName ?? "Product Image"}
                           fill
                           loading="lazy"
                           placeholder="empty"
                           className="object-contain mix-blend-multiply transition-transform group-hover:scale-110"
                        />
                     </div>
                  ) : null}
                  <section className="w-full space-y-4 px-2 py-4">
                     <p className="text-xl font-semibold">{item.productName}</p>
                     {nutriscorePresent(item.nutriScore) ? (
                        <div className="flex items-center gap-x-2">
                           <span className="font-semibold">Nutritional Score:</span>
                           <NutritionalScore score={item.nutriScore as "c"} />
                        </div>
                     ) : null}
                     <CartItemQuantity id={item.id} quantity={item.quantity} />
                  </section>
                  <section>
                     <Button
                        size="icon"
                        variant="outline"
                        className="rounded-full border-red-500"
                        onClick={() => removeFromCart(item.id)}
                     >
                        <Trash className="size-4 text-red-500" />
                     </Button>
                  </section>
               </article>
            ))}
         </div>
      </section>
   ) : (
      <EmptyCart />
   );
}
