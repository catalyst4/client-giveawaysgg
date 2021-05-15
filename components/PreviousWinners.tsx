import React from 'react'
import { SecHeading } from './SecHeading'

export const PreviousWinners = ({ winners }) => {

    return (
        <div className="mt-5">
            <SecHeading>Previous Winners</SecHeading>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {winners?.map((winner, i) => (
                    <Item key={i} winner={winner} />    
                ))}
            </div>
        </div>
    )
}

const Item = ({ winner }) => {
    return (
        <div style={{background: '#121212'}} className="p-2 rounded-md">
            <div className="aspect-w-16 aspect-h-9">
                {winner.link ? (
                    <iframe 
                        src={winner.link} 
                        title={winner.name} 
                        frameBorder="0" 
                        className="rounded-md"
                    />
                ) : (
                    <div className="flex justify-center items-center font-semibold text-lg">{winner.status}</div>
                )}
                
            </div>
            <div className="w-full py-2 mt-2 bg-purple-600 flex justify-center items-center text-sm rounded-md">{winner.name}</div>
        </div>
    )
}