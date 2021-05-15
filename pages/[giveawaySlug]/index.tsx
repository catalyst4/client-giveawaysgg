import React from 'react'
import Head from 'next/head'
import { Navbar } from '../../components/navbar/Navbar'
import { Header } from '../../components/Header'
import { Form } from '../../components/Form'
import { RecentEntries } from '../../components/RecentEntries'
import { Info } from '../../components/Info'
import { PreviousWinners } from '../../components/PreviousWinners'
import axios from 'axios'
import { url } from '../../redux/store'
import { useRouter } from 'next/router'

export async function getServerSideProps(context) {

    const { giveawaySlug } = context.params

    try {

        const { data } = await axios.get(`${url}/type/${giveawaySlug}`)
        const giveaway = data
        
        return {
            props: { giveaway }
        }

    } catch(e) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }

}

const index = ({ giveaway }) => {

    const router = useRouter()

    if(process.browser) {
        if(giveaway.expiry - Date.now() <= 0) {
            router.push('/')
        }    
    }

    return (
        <div>
            <Head>
                <title>{giveaway?.name} | Daily Giveaways GG</title>
            </Head>
            <Navbar />
            <div className="container mx-auto mt-10 px-4">
                <Header type={giveaway} homepage={false} />
                <div className="flex flex-col lg:flex-row justify-between">
                    <div className="w-full mr-5">
                        <Form giveaway={giveaway} />
                        <Info />
                    </div>
                    <div className="w-full mt-5 lg:mt-0 lg:ml-5">
                        <RecentEntries giveaway={giveaway} />
                    </div>
                </div>
                <PreviousWinners winners={giveaway.winners} />
            </div>
        </div>
    )
}

export default index
