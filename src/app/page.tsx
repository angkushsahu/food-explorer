import Image from "next/image";

import logoImg from "@/assets/logo.png";

export default function Home() {
   return (
      <section className="bg-orange-200">
         <div className="container flex flex-col items-center py-10 text-center sm:py-20">
            <Image src={logoImg} alt="Logo" loading="eager" className="size-56 md:size-80" />
            <h1 className="mb-8 mt-10 font-serif text-3xl font-bold md:text-5xl">Food Explorer: Discover, Learn, Eat</h1>
            <p className="mb-10 max-w-[60ch] font-medium text-neutral-700 md:text-xl">
               Explore a world of flavors and nutrition. Dive into detailed insights on your favorite foods from categories.
               Discover what&#39;s on your plate today!
            </p>
         </div>
      </section>
   );
}
