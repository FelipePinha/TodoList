import { Header } from './components/header'
import { InputTodo } from './components/InputTodo'
import { Todo } from './components/Todo'
import { TodoList } from './components/TodoList'
import { selectTodo } from './redux/slices/todoSlice'
import { useSelector } from 'react-redux'
import './main.css'


export default function App() {
  const todoList = useSelector(selectTodo)

  return (
    <main>
      <Header />
      <InputTodo />
      <TodoList>
        {
          todoList.map(todo => {
            return (
              <Todo 
                todo={todo.todo} 
                id={todo.id} 
                isCompleted={todo.isCompleted} 
                key={todo.id}
              />
            )
          })
        }
      </TodoList>
    </main>
  )
}
