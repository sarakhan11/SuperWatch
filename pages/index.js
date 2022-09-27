import { useEffect, useState } from 'react'
import Image from "next/image";
import React from 'react';const Index = () => {
  const [showMenu, setShowMenu] = useState(false);
    return (
      <>
        <div className='container'>
      <div className=" justify-center mx-auto border-b">
        <div className="">
          <div className="flex flex-wrap justify-between items-center">
            <div className='pl-20 mt-10'>
              <Image className="cursor-pointer" src="/S.Watch.png" width={100} height={24}/>
            </div>
            <button
          className=" block xl:hidden text-gray py-8 px-6"
          onClick={() => setShowMenu(!showMenu)}
        >
           <svg
                fill="#000000"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
                width="30px"
                height="30px"
              >
                <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z" />
              </svg>
        </button>

       
            <div className="items-right justify-center flex absolute right-8 p-8 mr-4 top-0 text-white z-40 cursor-pointer">
            <ul className="xl:flex hidden gap-9 " >
              <li className="cursor-pointer relative">
                <div className="flex items-center ">
                  <a href="#home-section" className="cursor-pointer text-base leading-4 text-gray-600 ">
                    Home
                  </a>
                </div>
              </li>
              <li className="relative mx-4">
                <div className="flex items-center ">
                  <a href="#explore-section" className="cursor-pointer text-base leading-4 text-gray-600  ">
                    About Us
                  </a>
                </div>
              </li>
              <li className="relative mx-4">
                <div className="flex items-center ">
                  <a href="#packages-section" className="cursor-pointer text-base leading-4 text-gray-600  ">
                    Services
                  </a>
                </div>
              </li>
              <li className="relative ml-4">
                <div className="flex items-center ">
                  <a href="#timeline-section" className="cursor-pointer text-base leading-4 text-gray-600  ">
                    Products
                  </a>
                </div>
              </li>
            </ul>

            <div className='pl-20 inset-0'>
              <Image className="cursor-pointer" src="/Group 303.png" width={515} height={530}/>
            </div>
            </div>

            <nav
        className={showMenu
            ? "absolute top-0 xl:hidden w-full h-full transform -translate-x-0 z-40 transition duration-700"
            : "absolute top-0 xl:hidden w-full h-full transform -translate-x-full z-40 transition duration-700"} id="mobile-nav">
               <div className=" items-right justify-center flex absolute right-8 p-4 -top-0  text-white z-40 cursor-pointer">
              <Image
                src="/icons8-multiply-50.png"
                width={40}
                height={40}
                alt=""
                onClick={() => setShowMenu(!showMenu)}
              />
            </div>
            <ul className="xl:hidden lg:hidden flex bg-gray-100 w-full flex-col w-full px-8 rounded-xl my-6">
              <li className="cursor-pointer relative pb-2 pt-8">
                <div className="flex items-center justify-center">
                  <a href="#home-section" className="cursor-pointer font-normal text-base leading-4 text-gray-600 ">
                    Home
                  </a>
                </div>
              </li>
              <li className=" relative py-2">
                <div className="flex items-center justify-center">
                  <a href="#explore-section" className="cursor-pointer cursor-pointer font-normal text-base leading-4 text-gray-600 ">
                    About Us
                  </a>
                </div>
              </li>
              <li className="relative py-2">
                <div className="flex items-center justify-center">
                  <a href="#packages-section" className="cursor-pointer cursor-pointer font-normal text-base leading-4 text-gray-600 ">
                    Services
                  </a>
                </div>
              </li>
              <li className="relative py-2">
                <div className="flex items-center justify-center">
                  <a href="#timeline-section" className="cursor-pointer cursor-pointer font-normal text-base leading-4 text-gray-600 ">
                    Products
                  </a>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    </div>

    

    <div class="pt-24 pl-20">
          <h1 class="font-semibold text-6xl pb-6 text-slate-800 max-w-[624px]">
            Super Luxury Smart Watch
          </h1>
          <p class="pb-8 text-slate-600 max-w-[405px]">
            Lorem Ipsum dolor sit amet, consectetur adipisicing elit. 
            plac erat vivamus tortor, vitae aliquam ullamcorper
          </p>
          <button class="font-medium text-white py-4 px-6 bg-gray-800 rounded-lg hover:bg-gray-700">
            Shop Now
          </button>
        </div>


        <div class="py-12 mt-72 container mx-auto flex">
          <div class="w-1/2 pr-8">
            <p class="font-medium text-4xl text-slate-800 pb-4 ">
              About Us
            </p>
            <p class="text-slate-600 pb-12">
              Putting a watch on your wrist has a larger impact than a simple fashion accessory. 
              The world sees the timepiece that you choose to wear so make sure it represents you.
            </p>
            <div class="flex ">
              <div class="flex flex-col justify-center text-center pr-12">
                <p class="text-xl font-medium text-slate-800 pb-4">1000+</p>
                <p class="text-slate-600">Brands</p>
              </div>
              <div class="flex flex-col justify-center text-center pr-8">
                <p class="text-xl font-medium text-slate-800 pb-4 ">250k+</p>
                <p class="text-slate-600">customer</p>
              </div>
              <div class="flex flex-col justify-center text-center">
                <p class="text-xl font-medium text-slate-800 pb-4">3.2k+</p>
                <p class="text-slate-600">Active Merchant</p>
              </div>
            </div>
          </div>
        
        <div class="grid grid-cols-1 gap-y-8  w-1/2">
          <div class=" gap-x-8 grid-cols-2 grid ">
            <div className='gap-y-8 grid grid-cols-1'>
              <Image className="cursor-pointer" src="/Rectangle 83.png" width={296} height={168}/>
              <Image className="cursor-pointer" src="/Rectangle 84.png" width={296} height={168}/>
            </div>
            <div>
              <Image className="cursor-pointer" src="/Rectangle 82.png" width={296} height={368}/>
            </div>
          </div>
        </div>
      </div>


      <div class="container mx-auto mt-32 mb-32 ">
        <h1 class="text-4xl text-gray-800 font-semibold ml-48 pl-8 2xl:ml-48 2xl:pl-8 xl:ml-16 xl:pl-8 lg:ml-0 lg:pl-0">
          Available Products
        </h1>
        <div className='grid grid-cols-2 '>
        <div className='grid grid-cols-1 gap-y-8'>

        <div class="mt-12 gap-12 justify-center items-center">
          <div class=" ">
            <div class="relative ">
            <Image className="cursor-pointer" src="/Rectangle 78.png" width={515} height={560}/>
              <div class="absolute bottom-10 left-7 bg-gray-100 py-3 px-4 rounded-lg opacity-75">
                X Hybrid Smartwatch
              </div>
            </div>
          </div>
        </div>

        <div class="">
          <div class="">
            <div class="relative">
            <Image className="cursor-pointer" src="/Rectangle 81.png" width={515} height={330}/>
              <div class="absolute bottom-10 left-7 bg-gray-100 py-3 px-4 rounded-lg opacity-75">
                Timex Analog Women's watch
              </div>
            </div>
          </div>
        </div>

        </div>

        <div className='grid grid-cols-1 gap-y-8'>


        <div class="">
          <div class="">
            <div class="relative">
            <Image className="cursor-pointer" src="/Rectangle 81.png" width={515} height={330}/>
              <div class="absolute bottom-10 left-7 bg-gray-100 py-3 px-4 rounded-lg opacity-75">
                Timex Analog Women's watch
              </div>
            </div>
          </div>
        </div>

        <div class="mt-12 gap-12 justify-center items-center">
          <div class=" ">
            <div class="relative ">
            <Image className="cursor-pointer" src="/Rectangle 78.png" width={515} height={560}/>
              <div class="absolute bottom-10 left-7 bg-gray-100 py-3 px-4 rounded-lg opacity-75">
                X Hybrid Smartwatch
              </div>
            </div>
          </div>
        </div>

        </div>
        </div>
      </div>

    



      </>
    );
  };
  
  export default Index;