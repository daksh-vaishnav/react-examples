import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {addTodo,updateTodo} from "../features/todo/todoSlice"


export default function AddTodo({isEditTodo,setEditTodo,editTodoDetail}) {
	const [input, setInput] = useState("");
	const dispatch = useDispatch();
	const todos = useSelector(state=>state.todos);
	const handleFormSubmit = (e) => {
		e.preventDefault();
        if(isEditTodo && input.length > 0){
            dispatch(updateTodo({id:editTodoDetail.id,text:input}))
            setEditTodo(false)
        }else {
            input.length > 0 ? dispatch(addTodo({text:input})) : null
        }
        setInput('')
	};

    useEffect(()=>{
        if(todos.length <= 0){
            setEditTodoDetail(false)
        }
        let val = isEditTodo ? editTodoDetail.text: ''
        setInput(val)
    },[isEditTodo])

	return (
		<div>
			<form onSubmit={handleFormSubmit}>
				<input
					type="text"
					placeholder="add todo"
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
				<button type="submit">{isEditTodo ? 'update todo' : 'add todo'}</button>
			</form>
                    {/* <h1>{`${isEditTodo}`}</h1> */}
		</div>
	);
}
