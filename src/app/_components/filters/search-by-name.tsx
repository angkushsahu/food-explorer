"use client";

import type { ChangeEvent } from "react";

import { useAppContext } from "@/context";
import { useDebounce } from "@/hooks";
import { Input } from "@/components";

export function SearchByName() {
   const { setSearchTerms, setBarcode, setCategory } = useAppContext();
   const debounceFn = useDebounce();

   function handleChange(e: ChangeEvent<HTMLInputElement>) {
      // cancels any barcode and category changes as name searches can't work hand in hand
      setBarcode("");
      setCategory("");

      debounceFn(() => setSearchTerms(e.target.value));
   }

   return <Input placeholder="Search by food name ...." onChange={handleChange} />;
}
