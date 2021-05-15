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
                    <img src="/img/bg.jpg" className="opacity-100" />
                    <div 
                        style={{background: 'linear-gradient(to right, rgb(18, 18, 18), rgba(18, 18, 18,0.5))'}}
                        className="absolute w-full h-full p-5 flex flex-col justify-evenly"
                    >
                        <div>
                            <img src="/img/fortnite.png" className="w-20 mb-3" />
                            <h1 className="text-2xl font-bold">{type.name}</h1> 
                            <div className="uppercase text-sm font-semibold tracking-wider opacity-50">5 Hourly Entries</div>    
                        </div>
                        <div className=" flex justify-between items-center">
                            <h3 className="text-xl font-medium">{formatted}</h3>
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
                    <div>
                        <img src="/img/fortnite.png" className="w-28 mb-3" />
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
                    <img src="/img/bg.jpg" className="w-full opacity-" />
                    <div style={{background: 'linear-gradient(to right, #121212 , rgba(18, 18, 18,0.85))'}} className="absolute w-full h-full flex justify-center items-center">
                        <div>
                            <h5 className="text-md uppercase font-bold tracking-wider text-purple-600 text-center mb-1">Time Remaining:</h5>
                            <h3 className="text-3xl font-semibold">{formatted}</h3>
                        </div>
                    </div>  
                </div>
            </>
            )}
        </div>
    )
}
