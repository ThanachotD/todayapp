
import {createSlice} from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: { mode: 'light'},
    reducers: {
        addTodo(state, action) {
            state.mode = action.payload
        },
        toogleDark(state, action) {
            state.mode = 'dark'
        },
    }
})

export const {addTodo,toggleTodo} = todoSlice.actions

export default todoSlice.reducer
