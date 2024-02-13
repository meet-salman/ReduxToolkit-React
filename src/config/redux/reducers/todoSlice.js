import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todo: []
    },
    reducers: {
        addTodo: () => { }
    }
})


export const { addTodo } = todoSlice.actions
export default todoSlice.reducer