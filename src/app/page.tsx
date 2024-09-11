"use client";
import {useState} from "react";
import {NewToDoForm} from "@/app/_components/new-todo-form";

type Todo = {
    title: string;
    description: string;
    completed: boolean;
    };
export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([
      {title: "Learn React", description: "Learn how to use React", completed: false},
  ]);
    
  return (
        <div>
            <h1>Todo List</h1>
            <ul>
                {todos.map(({ title, description, completed }, index) => (
                <ToDoItem 
                    key={index}
                    title={title} 
                    description={description} 
                    completed={completed} 
                    onCompleteChanged={(newValue) => {
                        setTodos(prev => {
                            const newTodos = [...prev];
                            newTodos[index].completed = newValue;
                            return newTodos;
                        })
                    }}
                      onRemove={() => {
                          setTodos(prev => {
                              const newTodos = [...prev].filter((_, i) => i !== index);
                              return newTodos;
                          })
                      }}
                />
                ))}
                
            </ul>
            <NewToDoForm onCreate={(title, description) => {
                setTodos(prev => {
                    const newTodos = [...prev];
                    newTodos.push({title, description, completed: false});
                    return newTodos;
                });
            }}            
            />
        </div>
  );
}

function ToDoItem ({title, description, completed, onCompleteChanged, onRemove } : {
    title: string;
    description: string;
    completed: boolean;
    onCompleteChanged: (complete: boolean) => void;
    onRemove: () => void;
}) {
    return (
        <li>
            <input 
                type="checkbox" 
                checked={completed} 
                onChange={e => onCompleteChanged(e.target.checked)}
            />
            <span> {title} </span>
            {description}
            <button type="button" className="text-red-500" onClick={() => onRemove()}>Remove</button>
        </li>
    )
}
