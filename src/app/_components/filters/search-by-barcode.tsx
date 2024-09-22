"use client";

import type { ChangeEvent } from "react";

import { useAppContext } from "@/context";
import { useDebounce } from "@/hooks";
import { Input } from "@/components";

export function SearchByBarcode() {
   const { setBarcode, setCategory, setSearchTerms } = useAppContext();
   const debounceFn = useDebounce();

   function handleChange(e: ChangeEvent<HTMLInputElement>) {
      // cancels any category and searchTerms changes as barcode searches can't work hand in hand
      setCategory("");
      setSearchTerms("");

      debounceFn(() => setBarcode(e.target.value));
   }

   return <Input placeholder="Search by bar code ...." onChange={handleChange} />;
}
