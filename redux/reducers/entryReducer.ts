import { GET_RECENT_ENTRIES_FAIL, GET_RECENT_ENTRIES_REQUEST, GET_RECENT_ENTRIES_SUCCESS, NEW_ENTRY_SUCCESS } from "../constants/entryConstants"

export const entryReducer = (state = { entries: undefined }, action) => {
    switch(action.type) {
        case GET_RECENT_ENTRIES_REQUEST:
            return { loading: true }
        case GET_RECENT_ENTRIES_SUCCESS:
            return { loading: false, entries: action.payload }
        case GET_RECENT_ENTRIES_FAIL:
            return { loading: false, error: action.payload }

        case NEW_ENTRY_SUCCESS: {

            const newEntry = action.payload 

            let exists = false
            const newArray = state.entries.map(entry => {
                if(entry.username === newEntry.username) {
                    exists = true
                    return newEntry
                }
                return entry
            })

            if(!exists) {
                newArray.unshift(newEntry)
                if(newArray.length > 5) {
                    newArray.pop()
                }
            }

            return { entries: [...newArray] }

        }

        default:
            return state
    }
}