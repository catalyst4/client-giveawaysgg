import { ExternalLinkIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import React from 'react'

export const Announcement = ({ lang }) => {
    return (
        <div style={{background: '#121212'}} className="w-full px-2 lg:px-5 py-2 mb-2 bg-opacity-20 rounded-lg text-md flex flex-col lg:flex-row justify-between items-center">
            <div className="text-center lg:text-left opacity-80">{lang.pollQuestion}</div>
            <Link href="https://strawpoll.com/u9e47qefx">
                <div className="flex justify-center items-center mt-3 lg:mt-0 bg-purple-600 w-full md:w-auto px-4 py-2 rounded-md cursor-pointer">
                    {lang.voteHere}
                    <ExternalLinkIcon className="w-5 h-5 ml-3 opacity-50" />
                </div>
            </Link>   
        </div>
    )
}