import {createStore, combineReducers, applyMiddleware} from "redux";
import { Reducer_journal} from "./Reducers/Reducer_journal";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    homejournal: Reducer_journal
})


export const store = createStore(rootReducer,applyMiddleware(thunk))