import { ClockIcon, EmojiSadIcon, TicketIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { getRecentEntries } from '../redux/actions/entryActions'
import { SecHeading } from './SecHeading'

export const RecentEntries = ({ giveaway }) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getRecentEntries(giveaway.id))
    }, [])

    const { loading, error, entries } = useSelector((state: RootStateOrAny) => state.entries)

    return (
        <div>
            <div className="flex justify-between items-center">
                <SecHeading>Recent Entries</SecHeading>   
                <div className="flex items-center text-sm italic opacity-80">
                    <ClockIcon className="w-4 h-4 mr-1" />
                    <span>Updated 5m ago</span>
                </div>
            </div>
            
            <div style={{background: '#121212'}} className="rounded-md">
                <div className="divide-solid divide-y divide-black divide-opacity-50">
                    {loading ? (
                        <div>loading</div>
                    ) : error ? (
                        <div>error</div>
                    ) : (
                        <div>
                            {entries?.length > 0 ? (
                                <div className="divide-y divide-black divide-opacity-50 divide-solid">
                                    {entries.map((entry, i) => (
                                        <Row key={i} entry={entry} />
                                    ))}
                                </div>
                            ) : (
                                <div className="p-7 flex justify-center items-center ">
                                    <div className="flex flex-col items-center">
                                        <EmojiSadIcon className="w-7 h-7 mb-2 text-purple-500" />
                                        <span className="font-medium">No entries yet</span>    
                                    </div>
                                    
                                </div>
                            )}
                        </div>     
                    )}
                    
                </div>
                {entries?.length > 0 && (
                <div className="p-5">
                    <Link href={`${giveaway.slug}/entries`}>
                        <button
                            className="w-full flex justify-center items-center p-3 bg-purple-600 rounded-md"
                        >
                            <TicketIcon className="w-5 h-5 mr-2" />
                            <div className="font-semibold">More Entries</div>
                        </button> 
                    </Link>    
                </div>    
                )}
            </div>
            
        </div>
    )
}

const Row = ({ entry }) => {
    return (
        <div className="flex justify-between px-5 py-3">
            <div className="font-medium">{entry.username}</div>
            <div>+{entry.entries}</div>
        </div>
    )
}