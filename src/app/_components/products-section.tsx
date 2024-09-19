import { ProductCard } from "@/components";
import { Filters } from "./filters";

export function ProductsSection() {
   return (
      <section className="container py-10 sm:py-20">
         <h1 className="mb-10 font-serif text-3xl font-semibold">Products Section</h1>
         <Filters />
         <div className="mt-10 grid gap-x-5 gap-y-10 sm:grid-cols-2 md:gap-x-10 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, idx) => (
               <ProductCard key={idx} index={idx} />
            ))}
         </div>
      </section>
   );
}
