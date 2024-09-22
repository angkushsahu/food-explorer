import type { Dispatch, PropsWithChildren, SetStateAction } from "react";

export type Children = Readonly<PropsWithChildren>;

export type SortingType = "none" | "ascending" | "descending";

export type IngredientType = {
   id: string;
   percent_estimate: number;
   percent_max: number;
   percent_min: number;
   text: string;
   vegan: string;
   vegetarian: string;
};

export type ProductType = {
   _id: string;
   categories?: string;
   product_name_en?: string;
   product_name?: string;
   image_front_url?: string;
   ingredients?: Array<IngredientType>;
   nutriments?: string;
   nutriscore_grade?: string;
   labels?: string;
};

export type AppContextType = {
   searchTerms: string;
   setSearchTerms: Dispatch<SetStateAction<string>>;
   barcode: string;
   setBarcode: Dispatch<SetStateAction<string>>;
   category: string;
   setCategory: Dispatch<SetStateAction<string>>;
   sortAlphabetically: SortingType;
   setSortAlphabetically: Dispatch<SetStateAction<SortingType>>;
   sortByNutritionalValue: SortingType;
   setSortByNutritionalValue: Dispatch<SetStateAction<SortingType>>;
};
