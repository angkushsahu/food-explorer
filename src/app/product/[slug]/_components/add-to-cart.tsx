"use client";

import { useAppContext } from "@/context";
import { CartInfo } from "@/components";
import type { CartItem } from "@/types";
import { alreadyInCart } from "@/lib";

export type AddToCartProps = CartItem;

export function AddToCart(product: AddToCartProps) {
   const { cart } = useAppContext();
   if (!cart) return <CartInfo {...product} />;

   const { found, index } = alreadyInCart({ cart, productId: product.id });

   return <section>{found ? <CartInfo {...cart[index]} /> : <CartInfo {...product} />}</section>;
}
