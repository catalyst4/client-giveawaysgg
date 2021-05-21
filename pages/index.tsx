import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Navbar } from '../components/navbar/Navbar'
import { countdown } from '../hooks/countdown'
import { ArrowNarrowRightIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { Header } from '../components/Header'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { getGiveaways } from '../redux/actions/giveawayActions'
import TagManager from 'react-gtm-module'
import { Announcement } from '../components/Announcement'

const tagManagerArgs = {
  gtmId: process.env.NEXT_PUBLIC_GTM
}

if(process.browser) {
  TagManager.initialize(tagManagerArgs) 
}


const Index = () => {

  const dispatch = useDispatch()

  const { loading, error, types } = useSelector((state: RootStateOrAny) => state.giveaways) 

  useEffect(() => {
    if(!types) {
      dispatch(getGiveaways())
    }
  }, [])

  return (
    <div>
      <Head>
        <title>Daily Giveaways GG - Free Fortnite Giveaways</title>
        <meta name="title" content="Daily Giveaways GG - Free Fortnite Giveaways" />
        <meta name="description" content="We're the #1 place for free gaming giveaways. We give away Fortnite skins every single day" /> 
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dailygiveaways.gg/" />
        <meta property="og:title" content="Daily Giveaways GG - Free Fortnite Giveaways" />
        <meta property="og:description" content="We're the #1 place for free gaming giveaways. We give away Fortnite skins every single day" />
        <meta property="og:image" content="https://dailygiveaways.gg/img/meta.jpg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://dailygiveaways.gg/" />
        <meta property="twitter:title" content="Daily Giveaways GG - Free Fortnite Giveaways" />
        <meta property="twitter:description" content="We're the #1 place for free gaming giveaways. We give away Fortnite skins every single day" />
        <meta property="twitter:image" content="https://dailygiveaways.gg/img/meta.jpg" />
        <meta name="theme-color" content="#7C3AED" />
      </Head>
      <Navbar />
      <div className="container mx-auto px-4 lg:px-0 mt-5">
        <Announcement />
        {loading ? (
          <div>loading</div>
        ) : error ? (
          <div>error</div>
        ) : types ? (
          <div>
            {types?.find(type => type.frequency === 'daily') && (
              <>
                <div className="flex items-center mb-3">
                  <h3 className="uppercase text-purple-600 font-bold text-lg tracking-wider mr-5">Daily</h3>  
                  <div className="w-full h-1 bg-purple-600 bg-opacity-10 rounded-lg"></div>
                </div>
                {types?.filter(type => type.frequency === 'daily').map(type => (
                  <Header homepage={true} type={type} key={type.type} />
                ))}  
              </>
            )}
            {types?.find(type => type.frequency === 'weekly') && (
              <>
                <div className="flex items-center mb-3">
                  <h3 className="uppercase text-purple-600 font-bold text-lg tracking-wider mr-5">Weekly</h3>  
                  <div className="w-full h-1 bg-purple-600 bg-opacity-10 rounded-lg"></div>
                </div>                {types?.filter(type => type.frequency === 'weekly').map(type => (
                  <Header homepage={true} type={type} key={type.type} />
                ))}  
              </>
            )}
          </div>
        ) : ''}
      </div>
    </div>
  )
}

export default Index