import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Navbar } from '../components/navbar/Navbar'
import { countdown } from '../hooks/countdown'
import { ArrowNarrowRightIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { Header } from '../components/Header'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { getGiveaways } from '../redux/actions/giveawayActions'

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
      <div className="container mx-auto mt-10 px-4">
        {loading ? (
          <div>loading</div>
        ) : error ? (
          <div>error</div>
        ) : types ? (
          <div>
            {types?.map(type => (
              <Header homepage={true} type={type} key={type.type} />
            ))}
          </div>
        ) : ''}
      </div>
    </div>
  )
}

export default Index