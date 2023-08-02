import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '.'

const Navbar = () => {
  return (
    <header className='sticky top-0 z-20 border-b border-transparent bg-opacity-50 backdrop-blur-[8px] backdrop-filter transition-opacity duration-200 ease-in-out bg-white animate-header-slide-down-fade'>
        <nav className='max-w-7xl mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
            <Link className='flex justify-center items-center' href={'/'}><Image src={'/logo.svg'} alt='logo' width={118} height={90}/></Link>

            <Button title="Sign In" containerStyles="bg-white rounded-full"  />
        </nav>
    </header>
  )
}

export default Navbar