import { useState } from "react"



export const AddNote = ({handleAddClick})=>{
    const [text, setText] = useState("");

    const charlimit = 200;

    const handleChange = (e)=>{
        if(charlimit-e.target.value.length>=0){ //check length
            setText(e.target.value);
        }
        


    }

    const handleClick = ()=>{
        if(text.trim().length > 0){
            handleAddClick(text);
            setText("");
        }
        

    }

    return(
        <div className="note new">
            <textarea
                rows="8"
                cols ="10"
                placeholder="Create A New Note"
                onChange={handleChange}
            ></textarea>
            <div className="footer1">
                <small>{charlimit-text.length} Remaining</small>
                <button className="savenote" onClick={handleClick}>Save</button>
            </div>
        </div>
    )
}