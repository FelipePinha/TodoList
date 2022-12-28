import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { TodoListTypes } from "../../types/TodoListTypes";

const initialState: TodoListTypes[] = []

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        createTodo: (state, { payload } ) => {
            return [...state, payload]
        },
        deleteTodo: (state, { payload }) => {
            const todoId = payload
            return [...state.filter(todo => todo.id !== todoId)]
        },
        setCompletedTodo: (state, { payload }) => {
            const todoId = payload
            for(let i = 0; i<state.length; i++) {
                if(state[i].id === todoId) {
                    state[i].isCompleted = !state[i].isCompleted
                    return
                }
            }
            
        }
    } 
})


export const { createTodo, deleteTodo, setCompletedTodo } = todoSlice.actions
export const selectTodo = (state: RootState) => state.todo
export default todoSlice.reducer