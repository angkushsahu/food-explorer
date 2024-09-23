"use client";

import { createContext, useContext, useState } from "react";
import type { AppContextType, CartItem, Children, SortingType } from "@/types";

const AppContext = createContext<AppContextType | null | undefined>(null);

export function AppContextProvider({ children }: Children) {
   const [cart, setCart] = useState<Array<CartItem>>([]);
   const [searchTerms, setSearchTerms] = useState("");
   const [barcode, setBarcode] = useState("");
   const [category, setCategory] = useState("");
   const [sortAlphabetically, setSortAlphabetically] = useState<SortingType>("none");
   const [sortByNutritionalValue, setSortByNutritionalValue] = useState<SortingType>("none");

   const value: AppContextType = {
      cart,
      setCart,
      searchTerms,
      setSearchTerms,
      barcode,
      setBarcode,
      category,
      setCategory,
      sortAlphabetically,
      setSortAlphabetically,
      sortByNutritionalValue,
      setSortByNutritionalValue,
   };

   return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
   const context = useContext(AppContext);
   if (!context) throw new Error("App-context cannot be used outside App-Context-Provider");
   return context;
}
