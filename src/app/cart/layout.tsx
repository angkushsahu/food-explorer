import type { Metadata } from "next";
import type { Children } from "@/types";

export const metadata: Metadata = {
   title: "Your cart",
};

export default function CartLayout({ children }: Children) {
   return children;
}
