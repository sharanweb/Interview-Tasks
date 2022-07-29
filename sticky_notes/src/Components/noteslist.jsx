import { AddNote } from "./createnote"
import { Note } from "./notecard"

export const NotesList = ({notes, handleAddClick, handleDeleteNote})=>{
    return(
        <div className="notes_list">
            {
                notes.map((el)=><Note
                 id={el.id}
                 text = {el.text}
                 date = {el.date}
                 handleDeleteNote={handleDeleteNote}
                 ></Note>)
            }
            <AddNote handleAddClick={handleAddClick}></AddNote>
            


        </div>
    )
}