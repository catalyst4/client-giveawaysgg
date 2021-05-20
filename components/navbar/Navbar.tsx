import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
    return (
        <div className="w-full h-16 flex justify-center items-center text-white bg-purple-600">
            <Link href="/">
                <h1 className="text-xl font-bold cursor-pointer font-sans">Daily Giveaways GG</h1>            
            </Link>
        </div>
    )
}