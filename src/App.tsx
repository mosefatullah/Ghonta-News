import React from "react";

function App() {
 let greetings = ["Salam!", "Hello!", "Welcome!", "Merhaba!"];
 return (
  <main className="App bg-gray-100 dark:bg-gray-800 min-h-screen">
   <nav className="bg-white border-gray-200 dark:bg-gray-900 border-b dark:border-gray-600">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-5xl px-4">
     <a
      href="https://flowbite.com"
      className="flex items-center space-x-1 rtl:space-x-reverse"
     >
      <img
       src="/logo-2x.png"
       className="h-[80px] object-cover"
       alt="Flowbite Logo"
      />
      <span className="self-center text-2xl mt-1 font-semibold whitespace-nowrap text-gray-400 dark:text-white">
       News
      </span>
     </a>
     <div className="flex">
      <button
       type="button"
       data-collapse-toggle="navbar-search"
       aria-controls="navbar-search"
       aria-expanded="false"
       className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
      >
       <svg
        className="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 20"
       >
        <path
         stroke="currentColor"
         stroke-linecap="round"
         stroke-linejoin="round"
         stroke-width="2"
         d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
        />
       </svg>
       <span className="sr-only">Search</span>
      </button>
      <div className="relative hidden md:block">
       <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg
         className="w-4 h-4 text-gray-500 dark:text-gray-400"
         aria-hidden="true"
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 20 20"
        >
         <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
         />
        </svg>
        <span className="sr-only">Search</span>
       </div>
       <input
        type="text"
        id="search-navbar"
        className="block w-[100vw] max-w-[550px] p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
        placeholder="Search..."
       />
      </div>
     </div>
     <div>
      <button
       type="button"
       className="text-gray-600 hover:bg-gray-100 active:bg-gray-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:active:ring-blue-800 dark:hover:bg-blue-500"
      >
       <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-7 h-7"
       >
        <path
         strokeLinecap="round"
         strokeLinejoin="round"
         d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
        />
       </svg>
       <span className="sr-only">Help</span>
      </button>
     </div>
    </div>
   </nav>
   <div className="mx-auto max-w-screen-xl px-4 py-3 md:py-5">
    <section className="__header flex items-center justify-between">
     <div>
      <h1 className="mb-1 text-2xl font-medium tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
       {greetings[Math.floor(Math.random() * greetings.length)]}
      </h1>
      <p className="text-gray-500 dark:text-gray-400">
       {new Date().toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
       })}
      </p>
     </div>
     <section className="__header-weather">
      <div className="flex items-center space-x-2">
       <img
        src="https://img.icons8.com/fluency/48/partly-cloudy-day.png"
        alt="Weather"
        className="w-8 h-8"
       />
       <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
         Dhaka
        </h3>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
         24°C (Sunny)
        </p>
       </div>
      </div>
     </section>
    </section>
    <section className="__headnews">
     <div className="md:flex gap-4">
      <section className="w-full md:w-[70%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
       <article className="flex flex-col items-start p-4 space-y-2 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-600">
        <div className="flex space-x-1 mb-1">
         <span className="inline-block px-2 py-1 text-xs font-semibold text-green-600 bg-green-100 rounded-full">
          News
         </span>
         <span className="inline-block px-2 py-1 text-xs font-semibold text-gray-600 bg-gray-100 rounded-full">
          Politics
         </span>
        </div>
        <a href="#" className="group">
         <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7l-DhWdraiv3euef8GsOoTyQYAFiHNGnRal11U66WEg&s"
          alt="Thumbnail"
          className="w-full h-48 object-cover rounded-lg bg-gray-200 dark:bg-gray-700 border border-gray-200 dark:border-gray-600"
         />
         <div className="mt-2">
          <div className="flex items-center space-x-1">
           <img
            src="https://i.pinimg.com/originals/11/6e/d8/116ed80f298c8ee40551e9291a2273f6.png"
            alt="Newspaper"
            className="h-8 border border-gray-200 dark:border-gray-700 rounded-md"
           />
           <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Al Jazeera
           </p>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white line-clamp-1 mt-1 group-hover:underline group-hover:underline-offset-4">
           The quick brown fox jumps over the lazy dog
          </h2>
          <p className="text-gray-400 dark:text-gray-500 text-sm">1 hour ago</p>
         </div>
        </a>
       </article>
       <article className="flex flex-col items-start p-4 space-y-2 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-600">
        <div className="flex space-x-1 mb-1">
         <span className="inline-block px-2 py-1 text-xs font-semibold text-green-600 bg-green-100 rounded-full">
          News
         </span>
         <span className="inline-block px-2 py-1 text-xs font-semibold text-gray-600 bg-gray-100 rounded-full">
          Politics
         </span>
        </div>
        <a href="#" className="group">
         <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7l-DhWdraiv3euef8GsOoTyQYAFiHNGnRal11U66WEg&s"
          alt="Thumbnail"
          className="w-full h-48 object-cover rounded-lg bg-gray-200 dark:bg-gray-700 border border-gray-200 dark:border-gray-600"
         />
         <div className="mt-2">
          <div className="flex items-center space-x-1">
           <img
            src="https://i.pinimg.com/originals/11/6e/d8/116ed80f298c8ee40551e9291a2273f6.png"
            alt="Newspaper"
            className="h-8 border border-gray-200 dark:border-gray-700 rounded-md"
           />
           <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Al Jazeera
           </p>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white line-clamp-1 mt-1 group-hover:underline group-hover:underline-offset-4">
           The quick brown fox jumps over the lazy dog
          </h2>
          <p className="text-gray-400 dark:text-gray-500 text-sm">1 hour ago</p>
         </div>
        </a>
       </article>
       <article className="flex flex-col items-start p-4 space-y-2 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-600">
        <div className="flex space-x-1 mb-1">
         <span className="inline-block px-2 py-1 text-xs font-semibold text-green-600 bg-green-100 rounded-full">
          News
         </span>
         <span className="inline-block px-2 py-1 text-xs font-semibold text-gray-600 bg-gray-100 rounded-full">
          Politics
         </span>
        </div>
        <a href="#" className="group">
         <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7l-DhWdraiv3euef8GsOoTyQYAFiHNGnRal11U66WEg&s"
          alt="Thumbnail"
          className="w-full h-48 object-cover rounded-lg bg-gray-200 dark:bg-gray-700 border border-gray-200 dark:border-gray-600"
         />
         <div className="mt-2">
          <div className="flex items-center space-x-1">
           <img
            src="https://i.pinimg.com/originals/11/6e/d8/116ed80f298c8ee40551e9291a2273f6.png"
            alt="Newspaper"
            className="h-8 border border-gray-200 dark:border-gray-700 rounded-md"
           />
           <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Al Jazeera
           </p>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white line-clamp-1 mt-1 group-hover:underline group-hover:underline-offset-4">
           The quick brown fox jumps over the lazy dog
          </h2>
          <p className="text-gray-400 dark:text-gray-500 text-sm">1 hour ago</p>
         </div>
        </a>
       </article>
       <article className="flex flex-col items-start p-4 space-y-2 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-600">
        <div className="flex space-x-1 mb-1">
         <span className="inline-block px-2 py-1 text-xs font-semibold text-green-600 bg-green-100 rounded-full">
          News
         </span>
         <span className="inline-block px-2 py-1 text-xs font-semibold text-gray-600 bg-gray-100 rounded-full">
          Politics
         </span>
        </div>
        <a href="#" className="group">
         <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7l-DhWdraiv3euef8GsOoTyQYAFiHNGnRal11U66WEg&s"
          alt="Thumbnail"
          className="w-full h-48 object-cover rounded-lg bg-gray-200 dark:bg-gray-700 border border-gray-200 dark:border-gray-600"
         />
         <div className="mt-2">
          <div className="flex items-center space-x-1">
           <img
            src="https://i.pinimg.com/originals/11/6e/d8/116ed80f298c8ee40551e9291a2273f6.png"
            alt="Newspaper"
            className="h-8 border border-gray-200 dark:border-gray-700 rounded-md"
           />
           <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Al Jazeera
           </p>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white line-clamp-1 mt-1 group-hover:underline group-hover:underline-offset-4">
           The quick brown fox jumps over the lazy dog
          </h2>
          <p className="text-gray-400 dark:text-gray-500 text-sm">1 hour ago</p>
         </div>
        </a>
       </article>
      </section>
      <section className="md:flex-1 w-full md:w-[30%] mt-5 flex flex-wrap flex-col gap-4">
       <article className="w-full p-4 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-600">
        g
       </article>
      </section>
     </div>
    </section>
   </div>
   <nav className="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600">
    <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
     <button
      data-tooltip-target="tooltip-home"
      type="button"
      className="inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
     >
      <svg
       className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 text-green-600 dark:text-green-500"
       aria-hidden="true"
       xmlns="http://www.w3.org/2000/svg"
       fill="currentColor"
       viewBox="0 0 20 20"
      >
       <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
      </svg>
      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 text-green-600 dark:text-green-500">
       Home
      </p>
     </button>
     <div
      id="tooltip-home"
      role="tooltip"
      className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
     >
      Home
      <div className="tooltip-arrow" data-popper-arrow></div>
     </div>
     <button
      data-tooltip-target="tooltip-wallet"
      type="button"
      className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
     >
      <svg
       className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-500"
       aria-hidden="true"
       xmlns="http://www.w3.org/2000/svg"
       fill="currentColor"
       viewBox="0 0 20 20"
      >
       <path d="M11.074 4 8.442.408A.95.95 0 0 0 7.014.254L2.926 4h8.148ZM9 13v-1a4 4 0 0 1 4-4h6V6a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-2h-6a4 4 0 0 1-4-4Z" />
       <path d="M19 10h-6a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1Zm-4.5 3.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM12.62 4h2.78L12.539.41a1.086 1.086 0 1 0-1.7 1.352L12.62 4Z" />
      </svg>
      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-500">
       Wallet
      </p>
     </button>
     <div
      id="tooltip-wallet"
      role="tooltip"
      className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
     >
      Wallet
      <div className="tooltip-arrow" data-popper-arrow></div>
     </div>
     <div className="flex items-center justify-center">
      <button
       data-tooltip-target="tooltip-new"
       type="button"
       className="inline-flex items-center justify-center w-10 h-10 font-medium bg-green-600 rounded-full hover:bg-green-700 group focus:ring-4 focus:ring-green-300 focus:outline-none dark:focus:ring-green-800"
      >
       <svg
        className="w-4 h-4 text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 18 18"
       >
        <path
         stroke="currentColor"
         stroke-linecap="round"
         stroke-linejoin="round"
         stroke-width="2"
         d="M9 1v16M1 9h16"
        />
       </svg>
       <span className="sr-only">New item</span>
      </button>
     </div>
     <div
      id="tooltip-new"
      role="tooltip"
      className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
     >
      Create new item
      <div className="tooltip-arrow" data-popper-arrow></div>
     </div>
     <button
      data-tooltip-target="tooltip-settings"
      type="button"
      className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
     >
      <svg
       className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-500"
       aria-hidden="true"
       xmlns="http://www.w3.org/2000/svg"
       fill="none"
       viewBox="0 0 20 20"
      >
       <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"
       />
      </svg>
      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-500">
       Settings
      </p>
     </button>
     <div
      id="tooltip-settings"
      role="tooltip"
      className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
     >
      Settings
      <div className="tooltip-arrow" data-popper-arrow></div>
     </div>
     <button
      data-tooltip-target="tooltip-profile"
      type="button"
      className="inline-flex flex-col items-center justify-center px-5 rounded-e-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
     >
      <svg
       className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-500"
       aria-hidden="true"
       xmlns="http://www.w3.org/2000/svg"
       fill="currentColor"
       viewBox="0 0 20 20"
      >
       <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
      </svg>
      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-500">
       Profile
      </p>
     </button>
     <div
      id="tooltip-profile"
      role="tooltip"
      className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
     >
      Profile
      <div className="tooltip-arrow" data-popper-arrow></div>
     </div>
    </div>
   </nav>
  </main>
 );
}

export default App;
