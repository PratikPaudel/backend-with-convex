"use client";
import {NewToDoForm} from "@/app/_components/new-todo-form";
import {useMutation, useQuery} from "convex/react";
import {api} from "../../convex/_generated/api";
import {Id} from "../../convex/_generated/dataModel";

export default function Home() {
    const todos = useQuery(api.functions.listTodos);    
  return (
        <div>
            <h1>Todo List</h1>
            <ul>
                {todos?.map(({ _id, title, description, completed }, index) => (
                <ToDoItem 
                    key={index}
                    id={_id}
                    title={title} 
                    description={description} 
                    completed={completed}
                />
                ))}
                
            </ul>
            <NewToDoForm/>
        </div>
  );
}

function ToDoItem ({id, title, description, completed } : {
    id : Id<"todos">;
    title: string;
    description: string;
    completed: boolean;
}) {
    const updateTodo = useMutation(api.functions.updateTodo);
    const deleteTodo = useMutation(api.functions.deleteTodo);
    return (
        <li>
            <input 
                type="checkbox" 
                checked={completed} 
                onChange={e => updateTodo({id, completed: e.target.checked})}
            />
            <span> {title} </span>
            {description}
            <button type="button" className="text-red-500" onClick={() => deleteTodo({id})}>Remove</button>
        </li>
    )
}
