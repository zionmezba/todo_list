import { useState } from "react";

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const handleSubmit = () => {
        setTodos((todos) => {
            return todos.concat({
                text: input,
                id: Math.floor(Math.random() * 10)
            });
        });
        setInput('');
    }

    const removeTodo = (id) => {
        setTodos((todos) => todos.filter((todo) => todo.id !== id));
    }

    return (
        <div className="container">
            <input type="text"
                placeholder="New Todo"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>

            <ul className="todo-list">
                {todos.map((todo) => (
                    <li className="todo" key={todo.id}>
                        <span>
                            {todo.text}
                        </span>
                        <button
                            className="close"
                            onClick={() => { removeTodo(todo.id) }}>
                            X
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Todo;