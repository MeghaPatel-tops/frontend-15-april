import CategoryReducer from "./CategorySlice";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer:{
        'category':CategoryReducer
    }
})

export default store