import { CheckIcon } from '@heroicons/react/solid'
import React from 'react'

export const Info = ({ lang }) => {
    return (
        <div style={{background: '#121212'}} className="mt-3 rounded-md divide-y divide-black divide-opacity-50 divide-solid">
            {lang.info.map((info, i) => (
                <Row key={i}>{info}</Row>
            ))}
        </div>
    )
}

const Row = ({ children }) => {
    return (
        <div className="px-5 py-3 flex items-center">
            <CheckIcon className="w-7 h-7 text-purple-500 mr-5" />
            <div>{children}</div>
        </div>
    )
}