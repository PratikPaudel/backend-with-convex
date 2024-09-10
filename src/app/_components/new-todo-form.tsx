import {useState} from "react";

type ToDoFormProps = {
    onCreate: (title: string, description: string) => void;
}
export function NewToDoForm({onCreate}: ToDoFormProps) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onCreate(title, description);
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