import { Button } from "@/components";
import Link from "next/link";

export default function NotFound() {
   return (
      <section className="flex grow items-center justify-center bg-orange-200 p-5 text-center">
         <div className="container">
            <h1 className="font-serif text-9xl font-black drop-shadow-lg">404</h1>
            <p className="mb-6 mt-10 text-xl font-semibold">
               The page you&#39;re looking for has burned in the oven. Try something else!
            </p>
            <Link href="/" replace>
               <Button>Stir me back to home</Button>
            </Link>
         </div>
      </section>
   );
}
