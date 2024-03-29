import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../reducers/todoSlice";

const store = configureStore({
    reducer: todoSlice
})