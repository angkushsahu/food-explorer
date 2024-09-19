import Image from "next/image";
import Link from "next/link";

import { NutritionalScore } from "../nutritional-score";
import { splitStringToArray } from "@/lib";
import { Badge } from "../ui/badge";

function bgColor(index: number) {
   if (!index) return "#eef9ff";

   if (index % 3 == 0) return "#ffeff1";
   if (index % 2 == 0) return "#efebec";
   return "#eef9ff";
}

export type ProductCardProps = {
   index: number;
};

export function ProductCard({ index }: ProductCardProps) {
   const product = {
      name: "Lorem ipsum dolor set amet consectetor",
      image: "lkjasdfkldsjfkldsfkjasjk",
      categories: "Condiments, Additifs alimentaires, Sauces, Arômes",
      ingredients: "Condiments, Additifs alimentaires, Sauces, Arômes",
      nutritionalGrade: "c",
   };

   return (
      <article className="bg-gray-50 shadow-md">
         <div className="relative size-52 w-full" style={{ backgroundColor: bgColor(index + 1) }}>
            <Image
               src="https://images.openfoodfacts.org/images/products/350/211/000/5663/front_fr.51.200.jpg"
               alt={product.name}
               fill
               loading="lazy"
               placeholder="empty"
               className="object-contain mix-blend-multiply"
            />
         </div>
         <section className="px-2 py-4">
            <div className="space-y-4">
               <p className="text-xl font-semibold">{product.name}</p>
               <div>
                  <p className="mb-2 font-semibold">Categories</p>
                  <div className="flex flex-wrap items-center gap-2">
                     {splitStringToArray(product.categories).map((val) => (
                        <Badge key={val}>{val}</Badge>
                     ))}
                  </div>
               </div>
               <ul>
                  <span className="font-semibold">Ingredients</span>
                  {splitStringToArray(product.ingredients).map((val) => (
                     <li key={val} className="list-inside list-decimal text-sm">
                        {val}
                     </li>
                  ))}
               </ul>
               <div className="flex items-center gap-x-2">
                  <span className="font-semibold">Nutritional Score:</span>
                  <NutritionalScore score={product.nutritionalGrade as "c"} />
               </div>
            </div>
            <div className="mt-2">
               <Link href={`/products/something`} className="text-sm text-muted-foreground underline">
                  Know more ....
               </Link>
            </div>
         </section>
      </article>
   );
}
