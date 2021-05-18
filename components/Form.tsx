import { ArrowRightIcon, InformationCircleIcon } from '@heroicons/react/solid'
import React, { useEffect, useState, useRef } from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { countdown } from '../hooks/countdown'
import { newEntry } from '../redux/actions/entryActions'
import { SecHeading } from './SecHeading'
import ReCAPTCHA from 'react-google-recaptcha'

export const Form = ({ giveaway }) => {
    
    let initialCooldown
    if(process.browser) {
        const cooldowns = JSON.parse(localStorage.getItem('cooldowns'))
        const cooldown = cooldowns && cooldowns.find(cooldown => cooldown.id === giveaway.id)
        cooldown ? initialCooldown = cooldown?.cooldown : initialCooldown = Date.now() + 3_600_000
    }

    const [username, setUsername] = useState<string>('')
    const [valid, setValid] = useState<boolean>(false)
    const [submit, setSubmit] = useState<boolean>(false)
    const reRef = useRef<ReCAPTCHA>()

    const onCooldown = () => {
        const cooldowns = JSON.parse(localStorage.getItem('cooldowns'))
        console.log(cooldowns)
        const cooldown = cooldowns?.find(cooldown => cooldown.id === giveaway.id)
        if(parseInt(cooldown?.cooldown) > Date.now()) {
            return true
        } else {
            return false
        }
    }

    useEffect(() => {
        console.log('hi')
        if(username) {
            setValid(true)
        } else {
            setValid(false)
        }
        if(onCooldown()) {
            console.log('hello')
            setSubmit(true)
        } else {
            console.log('ight')
            setSubmit(false)
        }
    }, [username])

    const dispatch = useDispatch()

    const submitHandler = async () => {
        const token = await reRef.current.executeAsync()
        reRef.current.reset()
        dispatch(newEntry({ username, token }, giveaway.id))
        setSubmit(true)
    }
    
    let cd
    if(process.browser) {
        cd = countdown(initialCooldown)
    }

    const formatted = cd?.mins + 'm ' + cd?.secs + 's'

    return (
        <div>
            <SecHeading>Enter for free now</SecHeading>
            {!submit ? (
                <div className="text-center deez">
                    <ReCAPTCHA 
                        sitekey={process.env.NEXT_PUBLIC_SITE_KEY}
                        size="invisible"
                        ref={reRef}
                    />
                    <div style={{background: '#121212'}} className="flex justify-between items-center w-full px-3 py-2 rounded-md">
                        <input 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter your Epic username"
                            className="bg-transparent text-sm w-full focus:outline-none placeholder-gray-300"
                        />
                        <button
                            onClick={submitHandler}
                            disabled={!valid}
                            className={`${!valid && 'opacity-10 cursor-not-allowed'} transition w-8 h-8 flex justify-center items-center bg-purple-600 rounded-md`}
                        >
                            <ArrowRightIcon className="w-4 h-4" />
                        </button>
                    </div>
                    <div className="w-full mt-1 flex justify-center items-center text-white opacity-50 text-xs lg:text-sm text-center"> 
                        <div className="flex items-center">
                            <InformationCircleIcon className="w-4 h-4 mr-1" />     
                            <div>Your Epic name is NOT your Xbox/PSN username</div>  
                        </div>
                    </div>    
                </div>
                
            ) : (
                <div style={{background: '#121212'}} className="flex justify-center items-center p-5 rounded-md">
                    <div className="text-center">
                        <h5 className="text-lg font-semibold mb-2">Thanks For Entering</h5>
                        <span className="text-sm">You may enter again in <a className="text-purple-500">{formatted}</a> for another 5 entries</span>    
                    </div>
                </div>
            )}
            
        </div>
        
    )
}
