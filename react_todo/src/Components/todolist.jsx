
import "./todo.css"
export const Todolist = ({todoitem, handleStatus,handleDelete })=>{

    return(
        <div className="listing">
            <p>{todoitem.title}</p>
            <button onClick={()=>handleStatus(todoitem.id)}>{todoitem.status === false ? "Complete" : "Not Yet Complete"}</button>
            <button onClick={()=>handleDelete(todoitem.id)}>Delete</button>
        </div>
    )
}