"use client";

import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from "@/components";
import { useAppContext } from "@/context";

export function SortByNutrition() {
   const { sortByNutritionalValue, setSortByNutritionalValue } = useAppContext();

   function handleSortUpdate(e: boolean, type: "ascending" | "descending") {
      if (e === false) setSortByNutritionalValue("none");
      else setSortByNutritionalValue(type);
   }

   return (
      <DropdownMenu>
         <DropdownMenuTrigger asChild>
            <div className="flex cursor-pointer items-center justify-between rounded-md border border-neutral-300 px-3 py-2 text-sm">
               <span className="text-muted-foreground">Sort by nutritional value</span>
               <span className="text-muted-foreground">
                  {sortByNutritionalValue === "ascending" ? "A - E" : sortByNutritionalValue === "descending" ? "E - A" : ""}
               </span>
            </div>
         </DropdownMenuTrigger>
         <DropdownMenuContent className="w-56">
            <DropdownMenuCheckboxItem
               checked={sortByNutritionalValue === "ascending"}
               onCheckedChange={(e) => handleSortUpdate(e, "ascending")}
            >
               A - E
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
               checked={sortByNutritionalValue === "descending"}
               onCheckedChange={(e) => handleSortUpdate(e, "descending")}
            >
               E - A
            </DropdownMenuCheckboxItem>
         </DropdownMenuContent>
      </DropdownMenu>
   );
}
