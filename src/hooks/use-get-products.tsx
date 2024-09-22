"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AxiosError } from "axios";

import type { ProductType } from "@/types";
import { useAppContext } from "@/context";
import { axiosClient } from "@/lib";
import { toast } from "./use-toast";

export const PAGE_SIZE = 9;

export function useGetProducts() {
   const [isLoading, setIsLoading] = useState(false);
   const [products, setProducts] = useState<Array<ProductType>>([]);
   const [page, setPage] = useState(1);
   const [hasNextPage, setHasNextPage] = useState(false);

   /**
    * to track if the `useEffect` got triggered due to change in page
    * If yes, then we append latest fetched products to the `products` array
    * Else, we update latest fetched data and replace the older data
    */
   const previousPage = useRef<number>(1);

   const { barcode, category, searchTerms, sortAlphabetically, sortByNutritionalValue } = useAppContext();

   async function getProducts() {
      let url = "";
      if (barcode) url = `/api/v0/product/${barcode}.json`;
      else if (category) url = `/category/${category}.json&page=${page}&page_size=${PAGE_SIZE}`;
      else url = `/cgi/search.pl?search_terms=${searchTerms}&json=true&page=${page}&page_size=${PAGE_SIZE}`;

      if (previousPage.current === page) setProducts([]);
      setIsLoading(true);

      try {
         const response = await axiosClient.get(url);

         if (response.data?.count) setHasNextPage(page * PAGE_SIZE < response.data.count);
         else setHasNextPage(false);

         if (barcode && response.data?.product) setProducts([response.data?.product]);
         else if (response.data?.products) {
            const apiProducts: Array<ProductType> = response.data?.products;

            if (sortAlphabetically !== "none") {
               apiProducts.sort((a, b) => {
                  const productAName = a.product_name_en ?? a.product_name;
                  const productBName = b.product_name_en ?? b.product_name;

                  const nameA = productAName?.toUpperCase() ?? "";
                  const nameB = productBName?.toUpperCase() ?? "";

                  if (nameA < nameB) return sortAlphabetically === "ascending" ? -1 : 1;
                  if (nameA > nameB) return sortAlphabetically === "ascending" ? 1 : -1;
                  return 0;
               });
            }

            if (sortByNutritionalValue !== "none") {
               const scoreOrder = { A: 1, B: 2, C: 3, D: 4, E: 5, a: 1, b: 2, c: 3, d: 4, e: 5 };

               apiProducts.sort((a, b) => {
                  const scoreA = scoreOrder[a.nutriscore_grade as "a"] ?? 6;
                  const scoreB = scoreOrder[b.nutriscore_grade as "a"] ?? 6;

                  if (sortByNutritionalValue === "ascending") return scoreA - scoreB;
                  else return scoreB - scoreA;
               });
            }

            if (previousPage.current === page) setProducts(apiProducts);
            else {
               previousPage.current = page;
               setProducts((prev) => prev.concat(apiProducts));
            }
         }
      } catch (error: unknown) {
         let message: string;
         if (error instanceof AxiosError) message = error.response?.data?.message ?? "Some error occurred";
         else message = "Some error occurred";

         toast({ title: message, variant: "destructive" });
         console.error(message);
      } finally {
         setIsLoading(false);
      }
   }

   const getProductsCallback = useCallback(getProducts, [
      barcode,
      category,
      searchTerms,
      sortAlphabetically,
      sortByNutritionalValue,
      page,
   ]);

   useEffect(() => {
      getProductsCallback();
      // eslint-disable-next-line
   }, [barcode, category, searchTerms, sortAlphabetically, sortByNutritionalValue, page]);

   return { products, isLoading, setPage, hasNextPage };
}
