import type { MetadataRoute } from "next";
import { metaData } from "@/lib";

export default function manifest(): MetadataRoute.Manifest {
   return {
      name: metaData.title,
      short_name: metaData.title.toLowerCase(),
      description: metaData.description,
      start_url: "/",
      scope: "/",
      id: "/",
      display: "standalone",
      background_color: metaData.backgroundColor,
      theme_color: metaData.themeColor,
      icons: [
         {
            src: "/favicon-32x32.png",
            sizes: "32x32",
            type: "image/png",
         },
         {
            src: "/favicon-16x16.png",
            sizes: "16x16",
            type: "image/png",
         },
         {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
         },
         {
            src: "/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
         },
         {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
         },
         {
            src: "/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
         },
      ],
   };
}
