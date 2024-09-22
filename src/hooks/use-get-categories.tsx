"use client";

import { useEffect, useState } from "react";
import { AxiosError } from "axios";

import { axiosClient } from "@/lib";
import { toast } from "./use-toast";

export function useGetCategories() {
   const [isLoading, setIsLoading] = useState(false);
   const [categories, setCategories] = useState<Array<{ name: string }>>([]);

   async function getCategories() {
      setIsLoading(true);
      try {
         const response = await axiosClient.get("/categories.json");
         if (response.data?.tags) setCategories(response.data.tags);
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

   useEffect(() => {
      getCategories();
   }, []);

   return { categories, isLoading };
}
