"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { SortByNutrition } from "./sort-by-nutrition";
import { SearchByBarcode } from "./search-by-barcode";
import { SearchByName } from "./search-by-name";
import { SortByName } from "./sort-by-name";
import { Categories } from "./categories";
import { Button } from "@/components";
import { cn } from "@/lib";

export function Filters() {
   const [show, setShow] = useState(false);

   return (
      <section className="sticky top-0 z-50 rounded-md border-2 border-neutral-200 bg-background p-5">
         <div className="flex items-center gap-x-4">
            <span>Filters</span>
            <Button
               size="icon"
               variant="outline"
               className={cn("rounded-full transition-transform", show ? "rotate-180" : "")}
               onClick={() => setShow((prev) => !prev)}
            >
               <ChevronDown className="size-5" />
            </Button>
         </div>
         <div className={cn("mt-5", show ? "block max-h-96" : "hidden max-h-0")} style={{ transition: "max-height 300ms ease" }}>
            <div className="flex flex-col gap-4 sm:flex-row">
               <SearchByName />
               <SearchByBarcode />
            </div>
            <div className="mt-4 flex flex-col gap-4 lg:flex-row [&>*]:flex-1">
               <Categories />
               <SortByName />
               <SortByNutrition />
            </div>
         </div>
      </section>
   );
}
