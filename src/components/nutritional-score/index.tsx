import { cn } from "@/lib";

export type NutritionalScoreProps = {
   score: "a" | "b" | "c" | "d" | "e" | "A" | "B" | "C" | "D" | "E";
};

export function NutritionalScore({ score }: NutritionalScoreProps) {
   const upperCaseScore = score.toUpperCase();

   return (
      <span
         className={cn(
            "rounded-md px-2 py-0.5 font-bold text-white",
            upperCaseScore === "A"
               ? "bg-green-700"
               : upperCaseScore === "B"
                 ? "bg-green-500"
                 : upperCaseScore === "C"
                   ? "bg-orange-500"
                   : upperCaseScore === "D"
                     ? "bg-red-500"
                     : upperCaseScore === "E"
                       ? "bg-red-700"
                       : ""
         )}
      >
         {upperCaseScore}
      </span>
   );
}
