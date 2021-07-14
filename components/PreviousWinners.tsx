import { EmojiSadIcon } from '@heroicons/react/solid'
import React from 'react'
import { SecHeading } from './SecHeading'

export const PreviousWinners = ({ lang, winners }) => {

    return (
        <div className="mt-5">
            <SecHeading>{lang.previousWinners}</SecHeading>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {winners?.map((winner, i) => (
                    <Item key={i} winner={winner} />    
                ))}
                {winners?.length < 1 && (
                    <div style={{background: '#121212'}} className="aspect-w-16 aspect-h-9 rounded-md shadow-lg">
                        <div className="w-full h-full flex flex-col justify-center items-center">
                            <EmojiSadIcon className="w-7 h-7 mb-2 text-purple-500" />
                            <span className="font-medium">{lang.noWinners}</span>  
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

const Item = ({ winner }) => {

    const months = [
        'January', 'February', 'April',
        'March', 'May', 'June', 'July',
        'September', 'October', 'November', 'December',
    ]

    const ts = new Date(winner.timestamp)
    const date = ts.getDate() + ' ' + months[ts.getMonth()]

    return (
        <div style={{background: '#121212'}} className="p-2 rounded-md shadow-lg">
            <div className="aspect-w-16 aspect-h-9">
                {winner.link ? (
                    <iframe 
                        src={winner.link} 
                        title={winner.name} 
                        frameBorder="0" 
                        loading="lazy"
                        className="rounded-md"
                    />
                ) : (
                    <div className="flex justify-center items-center font-semibold text-lg">{winner.status}</div>
                )}
                
            </div>
            <div className="w-full py-2 mt-2 bg-purple-600 flex justify-center items-center text-sm font-medium rounded-md">{winner.name} <span className="font-normal italic ml-2">{date}</span></div>
        </div>
    )
}