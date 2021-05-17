import { CheckIcon } from '@heroicons/react/solid'
import React from 'react'

export const Info = () => {
    return (
        <div style={{background: '#121212'}} className="mt-3 rounded-md divide-y divide-black divide-opacity-50 divide-solid">
            <Row>The winner is chosen randomly when the countdown expires</Row>
            <Row>You can enter once every hour to gain more entries</Row>
            <Row>The more times you enter the higher your chances of winning</Row>
            <Row>Prizes will be gifted in-game by "GiveawaysGG" on Fortnite</Row>
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