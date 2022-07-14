import {useState} from "react";
import './App.css';
import {nanoid} from "nanoid";

function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  const getData = ()=>{
    let data = {
      id: nanoid(5),
      value:text,
      status: false
    }
    setList([...list, data])
  }

  const Toggle = (id)=>{
    let newarr = list.map((el)=>el.id === id ? {...el, status: !el.status}: el);
    setList(newarr);

  }

  const handleDelete = (id)=>{
    let newarr = list.filter((el)=> el.id!== id);
    setList(newarr);

  }
  return (
    <div className="App">
      <div>
        <input placeholder="Enter Todo" onChange={(e)=>setText(e.target.value)}></input>
        <button onClick={getData}>Add Todo</button>
      </div>
      <div>
        {
          list.map((el, id)=>(
            <div key={el.id}>
              <p>{el.value}</p>
              <button onClick={()=>Toggle(el.id)}>{el.status===false ? "Complete" : "Not Complete"}</button>
              <button onClick={()=>handleDelete(el.id)}>Delete Todo</button>
            </div>
          ))
        }

      </div>
      
    </div>
  );
}

export default App;
