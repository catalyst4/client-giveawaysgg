import { ExternalLinkIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import React from 'react'

export const Announcement = () => {
    return (
        <div className="container mx-auto px-4 lg:px-0 my-5">
            <div style={{background: '#121212'}} className="w-full px-2 lg:px-5 py-2 bg-opacity-20 rounded-lg text-md flex flex-col lg:flex-row justify-between items-center">
                <div className="text-center lg:text-left">What other games should we do giveaways for?</div>
                <Link href="https://strawpoll.com/u9e47qefx">
                    <div className="flex justify-center items-center mt-3 lg:mt-0 bg-purple-600 w-full md:w-auto bg-opacity-50 px-4 py-2 rounded-md cursor-pointer">
                        Vote here
                        <ExternalLinkIcon className="w-5 h-5 ml-3 opacity-50" />
                    </div>
                </Link>
                
            </div>
        </div>
    )
}