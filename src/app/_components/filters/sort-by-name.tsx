"use client";

import type { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { useState } from "react";

type Checked = DropdownMenuCheckboxItemProps["checked"];

import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from "@/components";

export function SortByName() {
   const [showStatusBar, setShowStatusBar] = useState<Checked>(true);
   const [showActivityBar, setShowActivityBar] = useState<Checked>(false);

   return (
      <DropdownMenu>
         <DropdownMenuTrigger asChild>
            <div className="flex items-center justify-between rounded-md border border-neutral-300 px-3 py-2 text-sm">
               <span>Sort Alphabetically</span>
               <span className="text-muted-foreground">A - Z</span>
            </div>
         </DropdownMenuTrigger>
         <DropdownMenuContent className="w-56">
            <DropdownMenuCheckboxItem checked={showStatusBar} onCheckedChange={setShowStatusBar}>
               A - Z
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked={showActivityBar} onCheckedChange={setShowActivityBar}>
               Z - A
            </DropdownMenuCheckboxItem>
         </DropdownMenuContent>
      </DropdownMenu>
   );
}
