"use client";

import { Frown } from "lucide-react";

import { Button, ProductCard, Skeleton } from "@/components";
import type { ProductType } from "@/types";
import { useGetProducts } from "@/hooks";
import { Filters } from "./filters";

export function ProductsSection() {
   const { hasNextPage, isLoading, products, setPage } = useGetProducts();

   return (
      <section className="container py-10 sm:py-20">
         <h1 className="mb-5 font-serif text-3xl font-semibold">Products Section</h1>
         <Filters />
         <ProductsList products={products} isLoading={isLoading} />
         {isLoading ? <Loading /> : null}
         {hasNextPage ? (
            <div className="mt-10 flex items-center justify-center">
               <Button variant="outline" onClick={() => setPage((prev) => prev + 1)}>
                  Load more
               </Button>
            </div>
         ) : null}
      </section>
   );
}

function Loading() {
   return (
      <div className="mt-10 grid gap-x-5 gap-y-10 sm:grid-cols-2 md:gap-x-10 lg:grid-cols-3">
         {Array.from({ length: 6 }).map((_, index) => (
            <Skeleton key={`Loading-card-${index + 1}`} className="h-40 bg-neutral-200" />
         ))}
      </div>
   );
}

function ProductsList({ isLoading, products }: { isLoading: boolean; products: Array<ProductType> }) {
   return products && products.length ? (
      <div className="mt-5 grid gap-x-5 gap-y-10 sm:grid-cols-2 md:gap-x-10 lg:grid-cols-3">
         {products.map((product, index) => (
            <ProductCard key={`Product-${index + 1}-${product._id}`} index={index} product={product} />
         ))}
      </div>
   ) : isLoading ? null : (
      <div className="flex flex-col items-center justify-center gap-y-4 py-20">
         <Frown className="size-28 text-orange-400" strokeWidth="1.25" />
         <h1 className="text-center text-xl text-neutral-700">No products available ....</h1>
      </div>
   );
}
