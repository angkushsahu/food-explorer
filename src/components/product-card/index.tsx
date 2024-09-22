import Image from "next/image";
import Link from "next/link";

import { NutritionalScore } from "../nutritional-score";
import { splitStringToArray } from "@/lib";
import type { ProductType } from "@/types";
import { Badge } from "../ui/badge";

function bgColor(index: number) {
   const lightPink = "#ffeff1";
   const lightGray = "#efebec";
   const lightBlue = "#eef9ff";

   if (!index) return lightBlue;

   if (index % 3 == 0) return lightPink;
   if (index % 2 == 0) return lightGray;
   return lightBlue;
}

export type ProductCardProps = {
   index: number;
   product: ProductType;
};

export function ProductCard({ index, product }: ProductCardProps) {
   const nutriscoreGrade = product.nutriscore_grade?.toLowerCase();
   const isNutriScoreGradePresent =
      nutriscoreGrade === "a" ||
      nutriscoreGrade === "b" ||
      nutriscoreGrade === "c" ||
      nutriscoreGrade === "d" ||
      nutriscoreGrade === "e";

   return (
      <article className="group bg-gray-50 shadow-md">
         {product.image_front_url ? (
            <div className="relative size-52 w-full overflow-hidden" style={{ backgroundColor: bgColor(index + 1) }}>
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
         <section className="px-2 py-4">
            <div className="space-y-4">
               <p className="text-xl font-semibold">{product.product_name_en ?? product.product_name}</p>
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
               {product.ingredients ? (
                  <div>
                     <p className="mb-1 font-semibold">Ingredients</p>
                     <div className="flex flex-wrap gap-x-2">
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
                     </div>
                  </div>
               ) : null}
               {isNutriScoreGradePresent ? (
                  <div className="flex items-center gap-x-2">
                     <span className="font-semibold">Nutritional Score:</span>
                     <NutritionalScore score={product.nutriscore_grade as "c"} />
                  </div>
               ) : null}
            </div>
            <div className="mt-2">
               <Link href={`/product/${product._id}`} className="text-sm text-muted-foreground underline">
                  Know more ....
               </Link>
            </div>
         </section>
      </article>
   );
}
