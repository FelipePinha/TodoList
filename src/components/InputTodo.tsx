import { FormEvent, useState } from "react"
import { nanoid } from "@reduxjs/toolkit"
import { createTodo } from "../redux/slices/todoSlice"
import { useDispatch } from 'react-redux'

export const InputTodo = () => {
    const [todo, setTodo] = useState<string>('')
    const dispatch = useDispatch()


    const onSubmit = (e: FormEvent) => {
        e.preventDefault()

        dispatch(createTodo({
            todo,
            id: nanoid(),
            isCompleted: false
        }))

        setTodo('')
    }

    return (
        <form onSubmit={onSubmit} className="flex justify-center">
            <div className="w-[60%] min-w-[300px] flex justify-center items-center p-8 gap-2 relative">
                <input 
                    type="text" 
                    className="w-full rounded-md outline-none p-4 bg-slate-600 text-white"
                    placeholder="Add your todo"
                    value={todo}
                    onChange={e => setTodo(e.target.value)}
                />
                <button 
                    type="submit" 
                    className="text-slate-300 text-4xl absolute right-10 top-[30%] px-1.5"
                    >
                        +
                </button>
            </div>
        </form>
    )
}