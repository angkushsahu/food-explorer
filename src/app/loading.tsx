export default function Loading() {
   return (
      <section className="flex grow items-center justify-center bg-orange-200 p-5">
         <div className="container flex flex-col items-center justify-center">
            <div className="translate-y-12">
               <div className="size-20 animate-spin rounded-full border-8 border-orange-800 border-r-transparent border-t-transparent"></div>
            </div>
            <svg
               xmlns="http://www.w3.org/2000/svg"
               width="220"
               height="220"
               version="1.1"
               viewBox="0 0 512 512"
               xmlSpace="preserve"
            >
               <path
                  fill="#E0E0E0"
                  d="M495.6 216.4l-46 74.8c-7.2 11.2-23.6 20.8-36.8 20.8H99.6c-13.2 0-29.6-9.6-36.8-20.8l-46-74.4 478.8-.4z"
               ></path>
               <path d="M412.8 316H99.6c-14.4 0-32.4-10-40-22.8l-46-74.4c-1.2-2-.4-4.4 1.2-5.6 2-1.2 4.4-.4 5.6 1.2l46 74.4c6.4 10.4 21.6 18.8 33.2 18.8h313.2c11.6 0 26.8-8.8 33.2-18.8l46-74.8c1.2-2 3.6-2.4 5.6-1.2 2 1.2 2.4 3.6 1.2 5.6l-46 74.8c-8 12.8-26 22.8-40 22.8z"></path>
               <path
                  fill="#BDBDBD"
                  d="M500 200c4.4 0 8 4.4 8 8.8 0 2.4-.8 3.6-2.4 5.2s-3.6 2-5.6 2H12c-4.4 0-8-2.8-8-7.2 0-2 .8-4.8 2.4-6C8 201.2 10 200 12 200h488z"
               ></path>
               <path d="M500 220h-36c-2.4 0-4-1.6-4-4s1.6-4 4-4h36c2 0 2.4-.4 2.8-.8 1.2-1.2 1.2-1.6 1.2-2.4 0-2.4-2-4.8-4-4.8H12c-.8 0-1.6.8-2.8 1.6-.8.8-1.2 2-1.2 3.2 0 2.8 3.2 3.2 4 3.2h416c2.4 0 4 1.6 4 4s-1.6 4-4 4H12c-6.8 0-12-4.8-12-11.2 0-3.2 1.2-6.8 3.6-8.8 1.6-2 4.8-4 8.4-4h488c6.4 0 12 6 12 12.8 0 4-2 6.4-3.6 8-2.8 3.2-7.2 3.2-8.4 3.2z"></path>
            </svg>
            <p className="-translate-y-12 text-center text-xl font-semibold">Cooking content for you ....</p>
         </div>
      </section>
   );
}
