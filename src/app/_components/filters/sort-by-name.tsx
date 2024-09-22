"use client";

import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from "@/components";
import { useAppContext } from "@/context";

export function SortByName() {
   const { sortAlphabetically, setSortAlphabetically } = useAppContext();

   function handleSortUpdate(e: boolean, type: "ascending" | "descending") {
      if (e === false) setSortAlphabetically("none");
      else setSortAlphabetically(type);
   }

   return (
      <DropdownMenu>
         <DropdownMenuTrigger asChild>
            <div className="flex cursor-pointer items-center justify-between rounded-md border border-neutral-300 px-3 py-2 text-sm">
               <span className="text-muted-foreground">Sort Alphabetically</span>
               <span className="text-muted-foreground">
                  {sortAlphabetically === "ascending" ? "A - Z" : sortAlphabetically === "descending" ? "Z - A" : ""}
               </span>
            </div>
         </DropdownMenuTrigger>
         <DropdownMenuContent className="w-56">
            <DropdownMenuCheckboxItem
               checked={sortAlphabetically === "ascending"}
               onCheckedChange={(e) => handleSortUpdate(e, "ascending")}
            >
               A - Z
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
               checked={sortAlphabetically === "descending"}
               onCheckedChange={(e) => handleSortUpdate(e, "descending")}
            >
               Z - A
            </DropdownMenuCheckboxItem>
         </DropdownMenuContent>
      </DropdownMenu>
   );
}
