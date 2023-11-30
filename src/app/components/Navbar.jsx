"use client"
import React from 'react'
import Image from 'next/image'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const {data} = useSession();
  const session = useSession();
  
  const router = useRouter();
  

  return (
   
    <nav className="bg-white drop-shadow-lg sticky top-0 z-50">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 md:flex-row">
      <a className="flex items-center">
        <span className="text-2xl font-semibold whitespace-nowrap text-black">GecEcom</span>
      </a>
      <div className="flex md:order-2">
        {data?.user ? (
          <div className="flex items-center space-x-4">
            <Link href="/sellitem" >
            <button className="text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">Sell Item</button>
            </Link>
            
            <button onClick={() => signOut('google')} className="text-white bg-red-500 px-4 py-2 rounded hover:bg-red-600">
              Sign Out
            </button>
            <div className="text-black flex items-center ml-4 ">
              <img src={data?.user?.image} width={30} height={30} alt="User Image" className='rounded-3xl' />
              <span className="ml-2">Hi, {data.user.name}</span>
            </div>
          </div>
        ) : (
          <button onClick={() => signIn('google')} className="text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48">
              <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
              <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
              <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
              <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
            </svg>
            Sign In
          </button>
        )}
        <button
          data-collapse-toggle="navbar-sticky"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-sticky"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            ></path>
          </svg>
        </button>
      </div>
     
    </div>
  </nav>

  )
}

export default Navbar