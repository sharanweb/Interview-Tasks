import {useState} from "react";

export const Todoinput = ({handleAdd})=>{
    const [text, setText] = useState("");

    return (
        <div>
            <input onChange={(e)=>setText(e.target.value)} placeholder="Add Todo"></input>
            <button onClick={()=>handleAdd(text)}>Add Todo</button>
        </div>
    )
}