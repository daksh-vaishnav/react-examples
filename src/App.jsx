import { useState } from "react";
import "./App.css";
import AddTodo from "./dredux/components/addTodo";
import Todos from "./dredux/components/todos";

function App() {
    //! redux example state Start
    const [isEditTodo,setEditTodo] = useState(false)
    const [editTodoDetail,setEditTodoDetail] = useState(false)
    //? redux example state end



	return (
        //! redux example start
		// <>
        // {/* {`${isEditTodo} from app` } */}
		// 	<AddTodo isEditTodo={isEditTodo} setEditTodo={setEditTodo} editTodoDetail={editTodoDetail}/>
		// 	<Todos setEditTodo={setEditTodo} setEditTodoDetail={setEditTodoDetail}/>
		// </>
        //? redux example end



        //! composition example start
        <>

        </>
	);
}

export default App;
