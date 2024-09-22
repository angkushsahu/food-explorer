import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuRadioGroup,
   DropdownMenuRadioItem,
   DropdownMenuTrigger,
   Skeleton,
} from "@/components";
import { useGetCategories } from "@/hooks";
import { useAppContext } from "@/context";

export function Categories() {
   const { category, setCategory, setBarcode, setSearchTerms } = useAppContext();
   const { categories, isLoading } = useGetCategories();

   function handleCategoryChange(selectedCategory: string) {
      // cancels any barcode and searchTerm changes as category searches can't work hand in hand
      setBarcode("");
      setSearchTerms("");

      setCategory(selectedCategory);
   }

   return (
      <DropdownMenu>
         <DropdownMenuTrigger asChild>
            <div className="flex cursor-pointer items-center justify-between rounded-md border border-neutral-300 px-3 py-2 text-sm">
               <span className="text-muted-foreground">Categories</span>
               <span className="text-muted-foreground">{category}</span>
            </div>
         </DropdownMenuTrigger>
         <DropdownMenuContent className="h-56 w-56 overflow-auto">
            <DropdownMenuRadioGroup value={category} onValueChange={(e) => handleCategoryChange(e)}>
               {isLoading
                  ? Array.from({ length: 10 }).map((_, index) => (
                       <Skeleton key={`Loading-category-${index + 1}`} className="my-3 h-5 bg-neutral-200" />
                    ))
                  : categories?.map((categoryLabel, index) => (
                       <DropdownMenuRadioItem key={`Category-${index + 1}-${categoryLabel.name}`} value={categoryLabel.name}>
                          {categoryLabel.name}
                       </DropdownMenuRadioItem>
                    ))}
            </DropdownMenuRadioGroup>
         </DropdownMenuContent>
      </DropdownMenu>
   );
}
