import axios from 'axios'
import React from 'react'
import { Header } from '../../components/Header'
import { Navbar } from '../../components/navbar/Navbar'
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
    return (
        <div>
            <Navbar />
            <div className="container mx-auto mt-10">
                <Header type={giveaway} homepage={false} />
                {giveaway.name}
            </div>
        </div>
    )
}

export default entries
