import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";

import { axiosClient, nutriscorePresent, splitStringToArray } from "@/lib";
import { Badge, LinkToCart, NutritionalScore } from "@/components";
import { AddToCart } from "./_components/add-to-cart";
import type { Params, ProductType } from "@/types";

export async function generateMetadata({ params }: Params): Promise<Metadata> {
   const response = await axiosClient.get(`/api/v0/product/${params.slug}.json`);
   if (response.data.status !== 1) return { title: "Food Product" };

   const productName: string = response.data.product.product_name_en ?? response.data.product.product_name;
   const title = productName?.length ? productName : "Food Product";
   return { title };
}

export default async function Product({ params }: Params) {
   const response = await axiosClient.get(`/api/v0/product/${params.slug}.json`);
   if (response.data.status !== 1) return notFound();
   const product = response.data.product as ProductType;

   const isNutriScoreGradePresent = nutriscorePresent(product.nutriscore_grade);

   return (
      <>
         <section className="container flex grow flex-col items-center justify-center gap-10 py-10 lg:flex-row">
            {product.image_front_url ? (
               <div className="relative size-60 w-full overflow-hidden">
                  <Image
                     src={product.image_front_url}
                     alt={product.product_name_en ?? product.product_name ?? "Product Image"}
                     fill
                     loading="lazy"
                     placeholder="empty"
                     className="object-contain mix-blend-multiply transition-transform group-hover:scale-110"
                  />
               </div>
            ) : null}
            <div className="w-full space-y-4">
               <p className="font-serif text-3xl font-semibold">{product.product_name_en ?? product.product_name}</p>
               <AddToCart
                  id={product._id}
                  quantity={1}
                  nutriScore={product.nutriscore_grade}
                  productName={product.product_name_en ?? product.product_name}
                  productImage={product.image_front_url}
               />
               {product.categories ? (
                  <div>
                     <p className="mb-2 font-semibold">Categories</p>
                     <div className="flex flex-wrap items-center gap-2">
                        {splitStringToArray(product.categories).map((category, index) => (
                           <Badge key={`${product.product_name_en ?? product.product_name}-${category}-${index + 1}`}>
                              {category}
                           </Badge>
                        ))}
                     </div>
                  </div>
               ) : null}
               {product.labels ? (
                  <div>
                     <p className="mb-1 font-semibold">Labels</p>
                     <div className="text-neutral-700">{product.labels}</div>
                  </div>
               ) : null}
               {isNutriScoreGradePresent ? (
                  <div className="flex items-center gap-x-2">
                     <span className="font-semibold">Nutritional Score:</span>
                     <NutritionalScore score={product.nutriscore_grade as "c"} />
                  </div>
               ) : null}
               {product.ingredients ? (
                  <div>
                     <p className="mb-1 font-semibold">Ingredients</p>
                     <ul className="flex flex-wrap gap-x-2">
                        {product.ingredients.map((ingredient, index) => (
                           <span
                              key={`${product.product_name_en ?? product.product_name}-${ingredient.id}-${index + 1}`}
                              className="text-sm text-neutral-700"
                           >
                              {ingredient.text[0].toUpperCase() +
                                 ingredient.text.substring(1) +
                                 (index === product.ingredients!.length - 1 ? "" : ",")}
                           </span>
                        ))}
                     </ul>
                  </div>
               ) : null}
            </div>
         </section>
         <LinkToCart />
      </>
   );
}
