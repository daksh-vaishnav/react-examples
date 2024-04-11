import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

export default function Todos({setEditTodo,setEditTodoDetail}) {
	const todos = useSelector((state) => state.todos);
	const dispatch = useDispatch();

	return (
		<>
        <br></br>
			{todos.map((todo) =>
				<li key={todo.id}>
					{todo.id} | {todo.text} |
					<button
						onClick={() => {
							dispatch(removeTodo({ id: todo.id }));
                            todos.length <= 0 ? setEditTodo(false):''
						}}>
						x
					</button> |
                    <button
						onClick={() => {
							setEditTodo(true)
                            setEditTodoDetail(todo)
						}}>
						edit
					</button>
				</li>
			)}
		</>
	);
}
