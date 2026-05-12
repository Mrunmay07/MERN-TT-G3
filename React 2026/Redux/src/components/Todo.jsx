import { useDispatch, useSelector } from "react-redux"
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import { addTask } from "../store/Store";

function Todo(){

    const [task , setTask] = useState('')

   const todos = useSelector((state) =>  state.task) // Array ['Coding' , Cooking]

   const dispatch = useDispatch() // function 

    function handleSubmit(e){
        e.preventDefault()
        dispatch(addTask(task))
        setTask('')
    }

    function handleChange(e){
        setTask(e.target.value)
    }

    return(
        <div className="container">
            <h1>Todo Application</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={task} onChange={handleChange}/>
                <button>Add</button>
            </form>

            <ul>
                {
                    todos.map((currTask , index) => {
                        return <div key={index}>
                            <p>{index} {currTask}</p>
                            <button>
                                <MdDelete />
                            </button>
                        </div>
                    })
                }
            </ul>
        </div>
    )
}

export default Todo