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
        <title>Daily Giveaways GG</title>
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