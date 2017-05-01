import { middleware } from "../middleware"
import { reducerThunk } from "../reducer"
import { createStore, applyMiddleware } from "redux"

const storeMiddleware = applyMiddleware(...middleware);
const store = createStore(reducerThunk, storeMiddleware)

export default store;