import type { Metadata, Viewport } from "next";

export const metaData = {
   title: "Food Explorer",
   description:
      "A food specification website that provides detailed information on various food items, including nutritional values, category, ingredients, and dietary suitability. Users can search for foods by name or type, view calorie content, vitamins, minerals, and allergens, and compare items for healthier choices.",
   backgroundColor: "#ffffff",
   themeColor: "#18181b",
};

export const viewportMeta: Viewport = {
   themeColor: metaData.themeColor,
   colorScheme: "dark light",
   width: "device-width",
   initialScale: 1,
};

export const webMeta: Metadata = {
   title: {
      default: metaData.title,
      template: `%s - ${metaData.title}`,
   },
   description: metaData.description,
   robots: { index: true, follow: true },
   keywords:
      "Food specifications, nutritional value, food categories, ingredients, dietary information, calorie content, vitamins, minerals, allergens, food comparison, healthy eating, food details, nutrition facts, food database, diet planner",
   // extra SEO optimisations
   creator: "Angkush Sahu",
   publisher: "Angkush Sahu",
   applicationName: metaData.title,
   generator: "Next.js and Vercel",
   referrer: "origin-when-cross-origin",
   // metadataBase: new URL("https://profile-folio.vercel.app"), // TODO
   authors: [{ name: "Angkush Sahu", url: "https://angkushsahu.vercel.app" }],
   openGraph: {
      title: metaData.title,
      description: metaData.description,
      images: [
         {
            url: "/og-image.png",
            width: 192,
            height: 192,
         },
      ],
   },
};
