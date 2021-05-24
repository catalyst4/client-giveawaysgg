import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
    return (
        <div className="w-full h-16 flex justify-center items-center text-white bg-purple-600">
            <Link href="/">
                <img src="/img/logo.png" alt="DailyGiveaways.GG logo" className="w-64" />           
            </Link>
        </div>
    )
}