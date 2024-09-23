import type { CartItem } from "@/types";

type CartArgs = {
   cart: Array<CartItem>;
   productId: string;
};

export function alreadyInCart({ cart, productId }: CartArgs): { found: boolean; index: number } {
   for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === productId) return { found: true, index: i };
   }
   return { found: false, index: -1 };
}
