import { ArrowNarrowRightIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { countdown } from '../hooks/countdown'
import { useWindowSize } from '../hooks/useWindowSize'

export const Header = ({ type, homepage }) => {

    let size, mobile
    if(process.browser) {
        size = useWindowSize()
        mobile = size.width < 813 ? true : false
    }

    let cd
    if(process.browser) {
        cd = countdown(type.expiry)
    }

    const formatted = cd?.days + 'd ' + cd?.hours + 'h ' + cd?.mins + 'm ' + cd?.secs + 's'

    return (
        <div
            style={{background: '#121212'}}
            className="w-full sm:h-full lg:h-48 relative mb-5 flex justify-center items-center overflow-hidden rounded-2xl shadow-2xl hover:border-2 hover:border-purple-700"
        >
            {mobile ? (
                <>
                    <img src="/img/bg.jpg" alt="Background of giveaway" />
                    <div 
                        style={{background: 'linear-gradient(to right, rgb(18, 18, 18), rgba(18, 18, 18,0.5))'}}
                        className="absolute w-full h-full p-5 flex flex-col justify-evenly"
                    >
                        <div>
                            <img src="/img/fortnite.png" alt="Fortnite logo" className="w-20 mb-3" />
                            <h1 className="text-2xl font-bold">{type.name}</h1> 
                            <div className="uppercase text-sm font-semibold tracking-wider opacity-50">5 Hourly Entries</div>    
                        </div>
                        <div className=" flex justify-between items-center">
                            <span className="text-xl font-medium">{formatted}</span>
                            {homepage && (
                                <Link href={type.slug}>
                                    <button 
                                        className="px-3 py-2 flex items-center bg-purple-600 text-purple-200 uppercase text-xs rounded-md font-semibold"
                                    >
                                        Enter Now
                                        <ArrowNarrowRightIcon className="w-4 h-4 ml-2" />
                                    </button>
                                </Link>    
                            )}
                        </div>
                    </div>
                </>
            ) : (
            <>
                <div className="order-1 w-full h-full p-10">
                    <div className="flex h-full flex-col justify-center">
                        <img src="/img/fortnite.png" alt="Fortnite logo" className="w-28 mb-3" />
                        <h1 className="text-3xl font-bold">{type.name}</h1> 
                        {homepage && (
                            <div className="flex items-center mt-2">
                                <Link href={type.slug}>
                                    <button 
                                        className="px-3 py-2 flex items-center bg-purple-600 text-purple-200 uppercase text-xs rounded-md font-semibold"
                                    >
                                        Enter Now
                                        <ArrowNarrowRightIcon className="w-4 h-4 ml-2" />
                                    </button>
                                </Link>
                                <div className="ml-5 uppercase tracking-wider opacity-50">5 Hourly Entries</div>
                            </div>     
                        )} 
                    </div>
                </div>
                <div className="relative order-2 w-full flex justify-center items-center">
                    <img src="/img/bg.jpg" alt="Background of giveaway" className="w-full" />
                    <div style={{background: 'linear-gradient(to right, #121212 , rgba(18, 18, 18,0.85))'}} className="absolute w-full h-full flex justify-center items-center">
                        <div className="flex flex-col">
                            <span className="text-md uppercase font-bold tracking-wider text-purple-500 text-center mb-1">Time Remaining:</span>
                            <span className="text-3xl font-semibold">{formatted}</span>
                        </div>
                    </div>  
                </div>
            </>
            )}
        </div>
    )
}
