import React, { useState } from 'react';
import './styles.css';
import 'animate.css';
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "../Redux/actions";
import { v4 as uuidv4 } from "uuid";
export default function Todos() {
    const [todo, setTodo] = useState('');
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);
    const handleAddTodo = () => {
        dispatch(addTodo(uuidv4(), todo));
        setTodo('');
        // localStorage.setItem("todo",todos)
    };
    console.log(todos);
    return (
        <div className='container'>
            <h1 className='animate__animated animate__heartBeat'>My Todo App</h1>
            <div className="input-group mb-3 ">
                <input type="text" className="form-control text-add" placeholder="Add Your Todos..." aria-label="Recipient's username" aria-describedby="button-addon2" value={todo} onChange={(e) => setTodo(e.target.value)} />
                <button className="btn btn-outline-secondary text-add button" type="button" id="button-addon2" onClick={handleAddTodo}>Add Todo</button>
            </div>
            <div>
                {todos.map((item) => {
                    return (
                        <>
                            <div key={item.id}>
                                {item.text}
                                {console.log(item.text)}
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}