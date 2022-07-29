
import { useEffect, useState } from 'react';
import './App.css';
import {nanoid} from "nanoid"
import { NotesList } from './Components/noteslist';
import { Search } from './Components/Searchbar';
import { Header } from './Components/header';

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text:"Add Notes",
      date: "15/04/2021"
    }
  ]);

  //searching
  const [search, setSearch] = useState("");
  const [theme, setTheme] = useState(false);

  useEffect(()=>{
    const saved = JSON.parse(localStorage.getItem("sticky-notes"));
    if(saved){
      setNotes(saved);
      console.log(saved)
    }

  },[])

  useEffect(()=>{
    localStorage.setItem("sticky-notes", JSON.stringify(notes));
  },[notes])

  const addNote = (text)=>{
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }

    const finalNote = [...notes, newNote];
    setNotes(finalNote);

  }


  const deleteNote = (id)=>{
    const removed = notes.filter((el)=> el.id!==id);
    setNotes(removed);
  }
  return (
    <div className={`${theme && "dark"}`}>
      <div className="App">
      <Header handleTheme= {setTheme}></Header>
      <Search handleSearch={setSearch}></Search>
      <NotesList
        notes={notes.filter((el)=>el.text.toLowerCase().includes(search))} 
        handleAddClick={addNote} 
        handleDeleteNote = {deleteNote}
      ></NotesList>
      
    </div>
    </div>
    
  );
}

export default App;
