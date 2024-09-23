import Link from "next/link";

import { Button } from "@/components";

export function EmptyCart() {
   return (
      <section className="flex grow flex-col items-center justify-center bg-orange-200 py-10 text-center">
         <div className="container">
            <h1 className="mb-6 font-serif text-3xl font-semibold">Your cart is empty</h1>
            <Link href="/">
               <Button>Browse food items</Button>
            </Link>
         </div>
      </section>
   );
}
