import { useState } from "react";
import AddTodo from "./components/addTodo";
import Todos from "./components/todos";

function ReduxDemo() {
	//! redux toolkit example state Start
	const [isEditTodo, setEditTodo] = useState(false);
	const [editTodoDetail, setEditTodoDetail] = useState(false);
	//? redux toolkit example state end

	return (
		<>
			{/* {`${isEditTodo} from app` } */}
			<AddTodo
				isEditTodo={isEditTodo}
				setEditTodo={setEditTodo}
				editTodoDetail={editTodoDetail}
			/>
			<Todos setEditTodo={setEditTodo} setEditTodoDetail={setEditTodoDetail} />
		</>
		//? redux toolkit example end
	);
}

export default ReduxDemo;
