import { ShoppingCart } from "lucide-react";
import Link from "next/link";

import { Button } from "../ui/button";

export function LinkToCart() {
   return (
      <Link href="/cart">
         <Button
            size="icon"
            variant="secondary"
            className="fixed bottom-6 right-6 rounded-full border-2 border-neutral-300 sm:bottom-8 sm:right-8"
         >
            <ShoppingCart />
         </Button>
      </Link>
   );
}
