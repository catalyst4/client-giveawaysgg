import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Navbar } from '../components/navbar/Navbar'
import { countdown } from '../hooks/countdown'
import { ArrowNarrowRightIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { Header } from '../components/Header'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { getGiveaways } from '../redux/actions/giveawayActions'
import { Announcement } from '../components/Announcement'
import { useRouter } from 'next/router'
import { de, en, es, fr } from '../locales/locale'

const Index = () => {

  const dispatch = useDispatch()

  const { loading, error, types } = useSelector((state: RootStateOrAny) => state.giveaways) 

  useEffect(() => {
    if(!types) {
      dispatch(getGiveaways())
    }
  }, [])

  const { locale } = useRouter()

  let lang = en
  switch(locale) {
    case 'en':
      lang = en
      break
    case 'fr':
      lang = fr
      break
    case 'es':
      lang = es
      break
    case 'de':
      lang = de
      break
    default:
      lang = en
  }

  const csGiveaways = [
    {
      name: 'Win a $1.25m Shark Card',
      logo: '/img/gta.png',
      background: '/img/gtabg.jpg',
    },
    {
      name: 'Rocket League Giveaway',
      logo: '/img/rocketleague.png',
      background: '/img/rocketleaguebg.jpg',
    },
    {
      name: 'Win 2,200 Fifa Points',
      logo: '/img/fifa.png',
      background: '/img/fifabg.jpg',
    },
  ]

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
        <Announcement lang={lang} />
        {loading ? (
          <div>
            <div className="animate-pulse mb-4">
              <div style={{background: '#202020'}} className="w-1/3 h-6 mb-2 rounded-lg"></div>
              <div 
                style={{background: '#121212'}}
                className="w-full rounded-lg p-5"
              >
                <div style={{background: '#202020'}} className="w-1/3 mb-3 h-8 rounded-md"></div>
                <div style={{background: '#202020'}} className="w-full mb-2 h-10 rounded-md"></div>
                <div style={{background: '#202020'}} className="w-1/2 h-4 mb-4 rounded-md"></div>
                <div className="flex justify-between items-center">
                  <div style={{background: '#202020'}} className="w-1/2 h-8 rounded-md"></div>
                  <div style={{background: '#202020'}} className="w-1/3 h-8 rounded-md"></div>
                </div>
              </div>
            </div>  
            <div className="animate-pulse">
              <div style={{background: '#202020'}} className="w-1/3 h-6 mb-2 rounded-lg"></div>
              <div 
                style={{background: '#121212'}}
                className="w-full rounded-lg p-5"
              >
                <div style={{background: '#202020'}} className="w-1/3 mb-3 h-8 rounded-md"></div>
                <div style={{background: '#202020'}} className="w-full mb-2 h-10 rounded-md"></div>
                <div style={{background: '#202020'}} className="w-1/2 h-4 mb-4 rounded-md"></div>
                <div className="flex justify-between items-center">
                  <div style={{background: '#202020'}} className="w-1/2 h-8 rounded-md"></div>
                  <div style={{background: '#202020'}} className="w-1/3 h-8 rounded-md"></div>
                </div>
              </div>
            </div>  
          </div>
          
        ) : error ? (
          <div>error</div>
        ) : types ? (
          <div>
            {types?.find(type => type.frequency === 'daily') && (
              <>
                <div className="flex items-center mb-3">
                  <h3 className="w-1/5 uppercase text-purple-600 font-bold text-lg tracking-wider mr-5">{lang.daily}</h3>  
                  <div className="w-full h-1 bg-purple-600 bg-opacity-10 rounded-lg"></div>
                </div>
                {types?.filter(type => type.frequency === 'daily' && type.active === true).map(type => (
                  <Header lang={lang} homepage={true} type={type} key={type.type} />
                ))}  
              </>
            )}
            {types?.find(type => type.frequency === 'weekly' && type.active === true) && (
              <>
                <div className="flex items-center mb-3">
                  <h3 className="w-1/5 uppercase text-purple-600 font-bold text-lg tracking-wider mr-5">{lang.weekly}</h3>  
                  <div className="w-full h-1 bg-purple-600 bg-opacity-10 rounded-lg"></div>
                </div>                {types?.filter(type => type.frequency === 'weekly').map(type => (
                  <Header lang={lang} homepage={true} type={type} key={type.type} />
                ))}  
              </>
            )}
            {csGiveaways.map((type, i) => {
              return <Header lang={lang} homepage={true} comingSoon={true} type={type} key={i} />
            })}
            </div>
        ) : ''}
      </div>
    </div>
  )
}

export default Index