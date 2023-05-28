import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./menuSlice";
import postData from "./postData";

const store= configureStore({
    reducer:{
        menu:menuSlice,
        post:postData
    }
})
export default store;