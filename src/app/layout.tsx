import "@/styles/globals.css";

import { cn, interVariable, playfairVariable, viewportMeta, webMeta } from "@/lib";
import { AppContextProvider } from "@/context";
import type { Children } from "@/types";

export const viewport = viewportMeta;
export const metadata = webMeta;

export default function RootLayout({ children }: Children) {
   return (
      <html lang="en" suppressHydrationWarning>
         <body className={cn("flex min-h-screen flex-col font-sans antialiased", interVariable, playfairVariable)}>
            <main className="flex grow flex-col">
               <AppContextProvider>{children}</AppContextProvider>
            </main>
         </body>
      </html>
   );
}
