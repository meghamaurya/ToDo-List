import React, { useEffect } from 'react';
import './styles.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo } from '../Redux/actions';
import { MdDeleteOutline } from 'react-icons/md';
import { v4 as uuidv4 } from 'uuid';
export default function Todos() {
    const [todo, setTodo] = useState('');
    const [isCompleted, setIsCompleted] = useState(false);
    const [err, setErr] = useState(false);
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);

    useEffect(() => {
        localStorage.setItem("todo", JSON.stringify(todos));
    }, [todos])

    const handleAddTodo = () => {
        if (todo.length === 0) {
            setErr(true);
        } else {
            setErr(false)
            dispatch(addTodo(uuidv4(), todo, isCompleted));
            setTodo('');
            setIsCompleted(false);
        }
    }
    const handleDeleteTodo = (id) => {
        const dltItem = todos.filter((data) => data.id !== id);
        dispatch(deleteTodo(dltItem));
    }

    // console.log(todos);
    // const markedCompleted = (e, id) => {
    //     if (e.target.value === true) {
    //         const index = todos.map((item) => {
    //             if (item.id === id) {
    //                 return { ...item, isCompleted: item.isCompleted }
    //             }
    //             return item;
    //         })

    //         todos[index].isCompleted = true;
    //         dispatch(markedCompleted(todos));
    //         setIsCompleted(false);
    //     }
    // }
    return (
        <div className='container'>
            <h2>Todo App</h2>
            <form className="input-group mb-3 ">
                <input type="text" className="form-control text-add" placeholder="What needs to get done?..." aria-label="Recipient's username" aria-describedby="button-addon2" required value={todo} onChange={(e) => setTodo(e.target.value)} />
                <button className="btn btn-outline-secondary text-add button " type="button" id="button-addon2" onClick={handleAddTodo}>Add Todo</button>
            </form>
            {err ? <div className='error'>** enter todo</div> : ''}
            <div className='listItem'>
                {todos.length > 0 ? todos.map((item) => (
                    <div className="input-group mb-3 todo-list" key={item.id}>
                        <div className="form-control text-add" aria-describedby="button-addon2" >{item.text}</div>
                        {/* <input type="checkbox" value={item.isCompleted} onClick={(e) => markedCompleted(e, item.id)} /> */}
                        <button className="btn btn-outline-secondary text-add todoList button deleteBtn" type="button" onClick={() => handleDeleteTodo(item.id)}><MdDeleteOutline></MdDeleteOutline></button>
                    </div>
                ))
                    : null}
            </div >
        </div >
    )
}