import axios from "axios"
import { GET_ENTRIES_FAIL, GET_ENTRIES_REQUEST, GET_ENTRIES_SUCCESS, GET_RECENT_ENTRIES_FAIL, GET_RECENT_ENTRIES_REQUEST, GET_RECENT_ENTRIES_SUCCESS, NEW_ENTRY_FAIL, NEW_ENTRY_REQUEST, NEW_ENTRY_SUCCESS } from "../constants/entryConstants"
import { url } from "../store"

export const newEntry = (body, id) => async (dispatch) => {

    try {

        dispatch({ type: NEW_ENTRY_REQUEST })

        const { data } = await axios.post(`${url}/entry/${id}`, body)

        dispatch({
            type: NEW_ENTRY_SUCCESS,
            payload: data
        })

        console.log(id)

        const cooldownObj = { id, cooldown: data.cooldown }
        const cooldowns = JSON.parse(localStorage.getItem('cooldowns'))

        let cooldownsArray
        if(cooldowns) {
            cooldownsArray = [...cooldowns, cooldownObj]
        } else {
            cooldownsArray = [cooldownObj]
        }

        localStorage.setItem('cooldowns', JSON.stringify(cooldownsArray))

    } catch(e) {
        dispatch({
            type: NEW_ENTRY_FAIL,
            payload: e.response && e.response.data.message 
                ? e.response.data.message 
                : e.response
        })
    }

}

export const getRecentEntries = (id) => async (dispatch) => {

    try {

        dispatch({ type: GET_RECENT_ENTRIES_REQUEST })

        const { data } = await axios.get(`${url}/entry/${id}/recent`)

        dispatch({
            type: GET_RECENT_ENTRIES_SUCCESS,
            payload: data
        })

    } catch(e) {
        dispatch({
            type: GET_RECENT_ENTRIES_FAIL,
            payload: e.response && e.response.data.message
                ? e.response.data.message
                : e.response
        })
    }

}

export const getEntries = (id) => async (dispatch) => {

    try {

        dispatch({ type: GET_ENTRIES_REQUEST })

        const { data } = await axios.get(`${url}/entry/${id}/recent`)

        dispatch({
            type: GET_ENTRIES_SUCCESS,
            payload: data
        })

    } catch(e) {
        dispatch({
            type: GET_ENTRIES_FAIL,
            payload: e.response && e.response.data.message
                ? e.response.data.message
                : e.response
        })
    }

}