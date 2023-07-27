import React, { useState } from 'react'
import "./TodoList.css";

function TodoList() {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleAddTodos = () => {
        if (inputValue !== "") {
            const newTodo = {
                id: Date.now(),
                text: inputValue,
                completed: false
            };
            setTodos([...todos, newTodo]);
        }
    };

    const handleToggleChange = (id) => {


        const updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        });
        setTodos(updatedTodos);
    }

    const handleRemoveTodo = (id) => {
        const filteredTodos = todos.filter((todo) => todo.id !== id)
        setTodos(filteredTodos);
        console.log(filteredTodos)
    }
    return (
        <div>
            <div className='todo-container'>
                <h1>TodoList</h1>
                <div className='todo-input'>
                    <input  type="text" value={inputValue}
                        placeholder='Enter a list'
                        onChange={handleInputChange} />
                    <button onClick={handleAddTodos}>Add</button>
                </div>

                <ul className='todo-list'>
                    {todos.map((todo) => (
                        <li 
                        className={`todo-item ${todo.completed === true ? "completed" : ""
                        }` }>
                            <input type="checkbox"
                                onChange={() => handleToggleChange(todo.id)} />
                            <span className='todo-text'>{todo.text}</span>
                            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default TodoList