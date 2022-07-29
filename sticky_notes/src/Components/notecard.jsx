import {MdDeleteForever} from "react-icons/md"

export const Note = ({id, text, date, handleDeleteNote}) =>{
    return (
        <div className="note">
            <span>{text}</span>
            <div className="footer1">
                <small>{date}</small>
                <MdDeleteForever 
                    className="delete" 
                    size="1.3em" 
                    onClick={()=>handleDeleteNote(id)}
                ></MdDeleteForever>
            </div>
        </div>
    )
}