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
          className=" block xl:hidden text-gray pt-10 px-6"
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

            <div className='pl-20 inset-0 hidden xl:block lg:block'>
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

    

    <div class="pt-24 pl-20 mx-auto">
          <h1 class="font-semibold text-6xl pb-6 text-slate-800 max-w-[624px]">
            Super Luxury Smart Watch
          </h1>
          <p class="pb-8 text-slate-600 xl:max-w-[405px] lg:max-w-[405px] md:max-w-[505px] xl:max-w-[505px] ">
            Lorem Ipsum dolor sit amet, consectetur adipisicing elit. 
            plac erat vivamus tortor, vitae aliquam ullamcorper
          </p>
          <button class="font-medium text-white py-4 px-6 bg-gray-800 rounded-lg hover:bg-gray-700">
            Shop Now
          </button>
        </div>


        <div class="mt-72 mx-20 pr:20 xl:pr-0 lg:pr-20 md:pr-20 sm:pr-20 container mx-auto flex flex-col xl:flex-row lg:flex-row mx-auto md:flex-col sm:flex-col">
          <div class="xl:w-1/2 lg:w-1/2 md:w-4/4 sm:w-11/12 pr-8 mx-auto">
            <p class="font-medium text-4xl text-slate-800 pb-4 mx-auto">
              About Us
            </p>
            <p class="text-slate-600 pb-12">
              Putting a watch on your wrist has a larger impact than a simple fashion accessory. 
              The world sees the timepiece that you choose to wear so make sure it represents you.
            </p>
            <div class="xl:flex-row lg:flex-row md:flex-col sm:flex-col flex flex-col gap-x-8">
              <div class="flex flex-col justify-center text-center">
                <p class="text-xl font-medium text-slate-800 pb-4">1000+</p>
                <p class="text-slate-600">Brands</p>
              </div>
              <div class="flex flex-col justify-center text-center">
                <p class="text-xl font-medium text-slate-800 pb-4 ">250k+</p>
                <p class="text-slate-600">customer</p>
              </div>
              <div class="flex flex-col justify-center text-center">
                <p class="text-xl font-medium text-slate-800 pb-4">3.2k+</p>
                <p class="text-slate-600">Active Merchant</p>
              </div>
            </div>
          </div>
        
          <div class="xl:w-1/2 lg:w-1/2 md:w-4/5 sm:w-5/6 mx-auto ">
            <div class=" gap-x-4 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid ">
              <div className='gap-y-4 grid grid-cols-1 w-full'>
                <Image className="cursor-pointer" src="/Rectangle 82.png" width={296} height={168}/>
                <Image className="cursor-pointer" src="/Rectangle 84.png" width={296} height={168}/>
              </div>
              <div className='gap-y-4 grid grid-cols-1 w-full pt-0 xl:pt-0 lg:pt-0 md:pt-4 sm:pt-4'>
                <Image className="cursor-pointer" src="/Rectangle 83.png" width={296} height={368}/>
              </div>
            </div>
          </div>
        </div>


      <div class="container mx-auto mt-32 mb-32 ">
        <h1 class="text-4xl text-gray-800 font-semibold mx-auto pl-8 2xl:ml-48 2xl:pl-8 xl:ml-16 xl:pl-8 lg:ml-0 lg:pl-0 xl:mx-0 lg:mx-0 md:mx-auto sm:mx-auto">
          Available Products
        </h1>
        <div className=' xl:ml-0 lg:ml-0 md:ml-20 sm:ml-20 grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 mx-auto xl:p-48 lg:p-24 md:p-24 sm:p-24 p-4 lg:gap-8'>
          <div className='grid grid-cols-1 gap-y-8 mx-auto'>
            <div class="mt-12 justify-center items-center">
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

          <div className='grid grid-cols-1 gap-y-8 mx-auto'>
            <div class="mt-12 justify-center items-center">
              <div class="">
                <div class="relative">
                <Image className="cursor-pointer" src="/Rectangle 81.png" width={515} height={330}/>
                  <div class="absolute bottom-10 left-7 bg-gray-100 py-3 px-4 rounded-lg opacity-75">
                    Timex Analog Women's watch
                  </div>
                </div>
              </div>
            </div>
            <div class="">
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


          <div class="container mx-auto mb-32">
            <div class="flex flex-col xl:flex-row lg:flex-row md:flex-col sm:flex-col">
              <div class="w-11/12 mx-auto xl:mx-auto lg:mx-auto md:mx-36 sm:mx-24 mx-20 mb-8">
                <h1 class="text-gray-800 font-semibold w-10/12 lg:w-11/12 xl:w-11/12 2xl:w-10/12 text-5xl mt-16">
                  Subscribe Us And Get Upto 30% Off
                </h1>
                <h1 class="text-gray-600 text-xl mt-8 w-9/12 lg:w-11/12 xl:w-11/12 2xl:w-9/12">
                  Putting a watch on your wrist has a larger impact than a simple fashion accessory
                </h1>
                <div class="flex gap-5 mt-12"><div class="w-6/12">
                  <label class="relative block">
                    <span class="sr-only">Search</span>
                    <span class="absolute inset-y-0 left-0 flex items-center "></span>
                    <input class="border placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-3 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Enter Your Email" type="text" name="search"/>
                  </label>
                </div>
                <div class="w-5/12">
                  <button class="px-6 py-3 bg-gray-800 text-white hover:bg-gray-900 rounded-lg">
                    Submit Now
                  </button>
                </div>
              </div>
            </div>
            <div class="w-11/12 justify-end items-end flex mx-14 xl:mx-0 lg:mx-0 md:mx-10 sm:mx-20">
              <Image className="cursor-pointer" src="/Rectangle 89.png" width={624} height={410}/>
            </div>
          </div>
        </div>


          <footer class="mx-auto w-full bg-gray-800 bg-contain">
            <div class="mx-auto flex flex-col xl:flex-row lg:flex-row md:flex-row sm:flex:col gap-12 px-12 py-20">
              <div class="w-full">
              <Image className="cursor-pointer" src="/S.Watch (2).png" width={100} height={24}/>
              <h1 class="text-white mt-4 w-10/12 lg:w-11/12 xl:w-11/12 2xl:w-10/12">
                The world sees the timepiece that you choose to wear so make sure it represents you
              </h1>
              <div class="flex gap-4 mt-4">
                <div class="cursor-pointer">
                <Image className="cursor-pointer" src="/Group 321.png" width={32} height={32}/>
                </div>
                <div class="cursor-pointer">
                <Image className="cursor-pointer" src="/Group 322.png" width={32} height={32}/>
                </div>
                <div class="cursor-pointer">
                <Image className="cursor-pointer" src="/Group 323.png" width={32} height={32}/>
                </div>
                <div class="cursor-pointer">
                <Image className="cursor-pointer" src="/Group 324.png" width={32} height={32}/>
                </div>
              </div>
            </div>
          <div class="w-10/12">
            <h1 class="font-bold text-xl text-white">Navigation</h1>
            <h1 class="mt-4 text-white cursor-pointer ">Home</h1>
            <h1 class="mt-4 text-white cursor-pointer ">About Us</h1>
            <h1 class="mt-4 text-white cursor-pointer ">Services</h1>
          </div>
          <div class="w-10/12">
            <h1 class="font-bold text-xl text-white">Information</h1>
            <h1 class="mt-4 text-white cursor-pointer ">+123456789</h1>
            <h1 class="mt-4 text-white cursor-pointer ">Seako@gmail.com</h1>
            <h1 class="mt-4 text-white cursor-pointer ">890,Green Lane Pakistan</h1>
          </div>
          <div class="w-10/12">
            <h1 class="font-bold text-xl text-white">Opening Hours</h1>
            <h1 class="mt-4 text-white cursor-pointer ">Mon - friday: 9:00 - 5:00</h1>
            <h1 class="mt-4 text-white cursor-pointer ">Friday 9:00 - 4:00</h1>
            <h1 class="mt-4 text-white cursor-pointer ">Sat - Sun Off</h1>
          </div>
        </div>
        <h1 class="text-white pb-12 text-xl text-center w-10/12 lg:w-11/12 xl:w-11/12 2xl:w-10/12">
          Copyright 2022 All rights reserved | Watch is made with by Seako five
        </h1>
      </footer>

      </>
    );
  };
  
  export default Index;