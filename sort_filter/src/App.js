
import './App.css';
import {useState, useEffect} from "react";
import axios from "axios";

//https://netmedback.herokuapp.com/products
function App() {
  const [data, setData] = useState([]);
  const [filterdata, setFiltereddata] = useState([]);

  const getData = ()=>{
    axios.get("https://netmedback.herokuapp.com/products").then((res)=>{
      setData(res.data.product);
      setFiltereddata(res.data.product);
    })
  }

  const handleFilter =(e)=>{
    console.log(e.target.value)
    let newarr = [...data];
    let filtered = newarr.filter( elem => elem.brand === e.target.value);
    setFiltereddata(filtered);
    console.log(filtered)
  }
  const handleSort=(e)=>{
    console.log(e.target.value)
    var newdata = [...filterdata];
    if(e.target.value === "asc"){
      newdata.sort((a,b)=>a.price - b.price)
    }else if(e.target.value === "des"){
      newdata.sort((a,b)=>b.price - a.price);
    }
    setFiltereddata(newdata)

  }

  useEffect(()=>{
    getData();
  },[])
  console.log(data);
  return (
    <div className="App">
      <div>
        <select className='brandFilter' onChange={handleFilter}>
          <option value="Cipla">Cipla</option>
          <option value="Nestle">Nestle</option>
        </select>
        <select onChange={handleSort}>
          <option value="asc">Asc</option>
          <option value="des">dec</option>
        </select>
      </div>
     
      <div>
        <ul>
          {
            filterdata.map((el, id)=>(
              <li key={el._id}>{el.name}-{el.price}-{el.brand}</li>
            ))
          }
        </ul>
      </div>
      
    </div>
  );
}

export default App;
