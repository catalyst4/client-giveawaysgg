import axios from 'axios'
import { useRouter } from 'next/router'
import React from 'react'
import { Header } from '../../components/Header'
import { Navbar } from '../../components/navbar/Navbar'
import { de, en, es, fr } from '../../locales/locale'
import { url } from '../../redux/store'

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

const entries = ({ giveaway }) => {

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

    return (
        <div>
            <Navbar />
            <div className="container mx-auto mt-10">
                <Header lang={lang} type={giveaway} homepage={false} />
                {giveaway.name}
            </div>
        </div>
    )
}

export default entries
