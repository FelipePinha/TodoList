import React from "react"
 
interface TodoListProps {
    children: React.ReactNode
}

export const TodoList = (props: TodoListProps) => {
    return (
        <section className="flex items-center gap-y-5 flex-col mt-5">
            {props.children}
        </section>
    )
}