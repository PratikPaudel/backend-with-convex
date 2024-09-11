import {useState} from "react";
import {api} from "../../../convex/_generated/api";
import {useMutation} from "convex/react";

export function NewToDoForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const createTodo = useMutation(api.functions.createTodo);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await createTodo({title, description});
        setTitle("");
        setDescription("");
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={e => setDescription(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
}