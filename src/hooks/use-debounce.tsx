"use client";

import { useEffect, useRef } from "react";

export function useDebounce() {
   const debounceRef = useRef<NodeJS.Timeout | null>(null);

   function debounceFn(callback: () => void, delay: number = 300) {
      if (debounceRef.current) clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(callback, delay);
   }

   useEffect(() => {
      return () => {
         if (debounceRef.current) clearTimeout(debounceRef.current);
      };
   }, []);

   return debounceFn;
}
