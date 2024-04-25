import React from 'react'
import Link from 'next/link'
import {FaLaptop, FaGithub } from "react-icons/fa"

export default function Navbar() {
  return (
    <nav className='bg-blue-400 sticky top-0 h-12 drop-shadow-xl z-10'>
      <div className='prose prose-xl mx-auto flex justify-between flex-col sm:flex-row'>
            <Link className="no-underline text-white/90 hover:text-white" href="/">
                Lakshay
            </Link>
            <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl">
                    
                    <Link className="text-white/90 hover:text-white" href="https://courses.davegray.codes/">
                        <FaLaptop />
                    </Link>
                    <Link className="text-white/90 hover:text-white" href="https://github.com/gitdagray">
                        <FaGithub />
                    </Link>
                    
                </div>
      </div>
    </nav>
  )
}
