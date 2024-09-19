import type { Children } from "@/types";

export function Badge({ children }: Children) {
   return <span className="rounded-full border-2 bg-secondary px-2 py-1 text-xs font-medium">{children}</span>;
}
