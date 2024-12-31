"use client"

type TodoItemProps = {
    id: string;
    title: string;
    complete: boolean;  
    toggleTodo: (id: string, complete: boolean) => void;
}

export const TodoItem = ({id, title, complete, toggleTodo}: TodoItemProps) => {
    return (
        <li className={"flex gap-1 text-2xl items-center my-2"}>
            <input id={id} type="checkbox" defaultChecked={complete} className={"peer h-5 w-5 cursor-pointer"} onChange={e => toggleTodo(id, e.target.checked)}/>
            <label htmlFor={id} className={"peer-checked:line-through cursor-pointer"}>{title}</label>
        </li>
    )
}