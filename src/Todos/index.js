import React, { useState } from 'react';
import './styles.css';
import 'animate.css';
export default function Todos() {
    const [todo, setTodo] = useState('');
    return (
        <div className='container'>
            <h1 className='animate__animated animate__heartBeat'>My Todo App</h1>
            <div className="input-group mb-3 ">
                <input type="text" className="form-control text-add" placeholder="Add Your Todos..." aria-label="Recipient's username" aria-describedby="button-addon2" value={todo} onChange={(e) => setTodo(e.target.value)} />
                <button className="btn btn-outline-secondary text-add button" type="button" id="button-addon2" >Add Todo</button>
            </div>
        </div>
    )
}