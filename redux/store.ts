import { applyMiddleware, combineReducers, createStore } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import thunk from 'redux-thunk'
import { entryReducer } from "./reducers/entryReducer"
import { giveawayReducer } from "./reducers/giveawayReducer"

const reducers = combineReducers({
    giveaways: giveawayReducer,
    entries: entryReducer,
})

const middleware = [thunk]

export const store = createStore(
    reducers, 
    composeWithDevTools(applyMiddleware(...middleware))
)

export const url = process.env.NEXT_PUBLIC_NODE_ENV === 'development' 
    ? process.env.NEXT_PUBLIC_LOCAL_HOST 
    : process.env.NEXT_PUBLIC_API_URL