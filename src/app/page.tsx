"use client";
import {useState} from "react";

type Todo = {
    title: string;
    description: string;
    completed: boolean;
    };
export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([
      {title: "Learn React", description: "Learn how to use React", completed: false},
  ]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
      setTodos(prev => {
          const newTodos = [...prev];
          newTodos.push({title, description, completed: false});
          return newTodos;
      });
      setTitle("");
      setDescription("");
  };
  
  return (
        <div>
            <h1>Todo List</h1>
            <ul>
            {todos.map(({title, description, completed }, index) => (
                <li key={index}>
                    <input type="checkbox" 
                           checked={completed} 
                           onChange={e => setTodos(prev => {
                               const newTodos = [...prev];
                                 newTodos[index].completed = e.target.checked;
                                    return newTodos;
                           })}
                    />
                    <span>{title} </span>{description} 
                </li>
            ))}
            </ul>
        </div>
  );
}
