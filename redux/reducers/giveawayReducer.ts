import { GET_GIVEAWAYS_FAIL, GET_GIVEAWAYS_REQUEST, GET_GIVEAWAYS_SUCCESS } from "../constants/giveawayConstants"

export const giveawayReducer = (state = { }, action) => {
    switch(action.type) {
        case GET_GIVEAWAYS_REQUEST:
            return { loading: true }
        case GET_GIVEAWAYS_SUCCESS:
            return { loading: false, types: action.payload }
        case GET_GIVEAWAYS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}