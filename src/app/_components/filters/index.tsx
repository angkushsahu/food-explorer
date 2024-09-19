import { SortByNutrition } from "./sort-by-nutrition";
import { SortByName } from "./sort-by-name";
import { Categories } from "./categories";
import { Input } from "@/components";

export function Filters() {
   return (
      <section>
         <div className="flex gap-4">
            <Input placeholder="Search by food name ...." />
            <Input placeholder="Search by bar code ...." />
         </div>
         <div className="mt-4 flex gap-4 [&>*]:flex-1">
            <Categories />
            <SortByName />
            <SortByNutrition />
         </div>
      </section>
   );
}
