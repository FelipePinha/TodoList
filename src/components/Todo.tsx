import { useState } from 'react'
import { BsTrashFill } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { deleteTodo, setCompletedTodo } from '../redux/slices/todoSlice'
import { TodoListTypes } from '../types/TodoListTypes'

export const Todo = ({todo, id, isCompleted}: TodoListTypes) => {
    const [completed, setCompleted] = useState(isCompleted)
    const dispatch = useDispatch()

    const handleDeleteTodo = () => {
        dispatch(deleteTodo(id))
    }

    const handleCompleteTodo = () => {
        setCompleted(!completed)

        dispatch(setCompletedTodo(id))
    }

    return (
        <div className={`flex justify-between items-center w-[55%] min-w-[230px] p-4 ${completed ? 'bg-green-600' : 'bg-slate-600'} rounded-md`}>
            <div className='flex items-center gap-2'>
                <input 
                    type="checkbox" 
                    name="complete" 
                    className='w-5 h-5 cursor-pointer'
                    checked={completed}
                    onChange={handleCompleteTodo}
                />
                <strong className='text-slate-100 cursor-default font-bold'>{todo}</strong>
            </div>
            <button onClick={handleDeleteTodo}>
                <BsTrashFill className='text-2xl text-red-500'/>
            </button>
        </div>
    )
}