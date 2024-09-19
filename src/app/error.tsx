"use client";

import { RotateCcwIcon } from "lucide-react";
import { Button } from "@/components";

export type ErrorProps = {
   error: Error & { digest?: string };
   reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
   return (
      <section className="flex grow items-center justify-center bg-orange-200 p-5 text-center">
         <div className="container">
            <h1 className="font-serif text-3xl font-semibold">This page got burned in the oven</h1>
            <p className="my-6 text-xl">
               {error.name} :- {error.message}
            </p>
            <Button type="button" onClick={reset}>
               <RotateCcwIcon className="mr-3 size-4" /> Try again
            </Button>
         </div>
      </section>
   );
}
