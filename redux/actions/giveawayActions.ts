import axios from "axios"
import { GET_GIVEAWAYS_FAIL, GET_GIVEAWAYS_REQUEST, GET_GIVEAWAYS_SUCCESS } from "../constants/giveawayConstants"
import { url } from "../store"

export const getGiveaways = () => async (dispatch) => {

    try {

        dispatch({ type: GET_GIVEAWAYS_REQUEST })

        const { data } = await axios.get(`${url}/type`)

        dispatch({
            type: GET_GIVEAWAYS_SUCCESS,
            payload: data
        })

    } catch(e) {
        dispatch({
            type: GET_GIVEAWAYS_FAIL,
            payload: e.response && e.response.data.message
                ? e.response.data.message 
                : e.response
        })
    }

}