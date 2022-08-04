import { useState, useEffect} from "react";
import axios from "axios";

export const ShowDetail = ()=>{

    const [data, getData] =  useState([]);
    const [filter, setFilter] = useState([]);

    const fetchData = ()=>{
        axios.get("http://localhost:8080/employees").then((res)=>{
            getData(res.data)
            setFilter(res.data)

        }).catch((res)=> console.log(res));
    }
    // console.log(data);
    const handleName = (e)=>{
        let x = e.target.value;
        let newarr = [...data];
        if(x === "asc"){
            newarr.sort(function(a,b){
                return a.name.localeCompare(b.name);
            })
        }else{
            newarr.sort(function(a,b){
                return b.name.localeCompare(a.name);
            })
        }
        setFilter(newarr);
        console.log(newarr);
    }

    const handleSalary=(e)=>{

        var newdata = [...filter];
        if(e.target.value === "asc"){
           newdata.sort((a,b)=>a.salary - b.salary)
        }else if(e.target.value === "dec"){
           newdata.sort((a,b)=>b.salary - a.salary);
        }
    setFilter(newdata)

    }


    useEffect(()=>{
        fetchData();

    },[])


    return (
        <div>
            <div className="sorting">
                <select onChange={handleName}>
                    <option value="">Arrange Alphabetically</option>
                    <option value="asc">Asc</option>
                    <option value="dec">Dec</option>
                </select>
                <select 
                onChange={handleSalary}
                >
                    <option value="">Salary Sort</option>
                    <option value="asc">low to high</option>
                    <option value="dec">high to low</option>
                </select>
            </div>
            <div className="showing">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>City</th>
                            <th>department</th>
                            <th>Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                             filter.map((el)=>(
                                <tr key={el.id}>
                                    <td>{el.name}</td>
                                    <td>{el.email}</td>
                                    <td>{el.city}</td>
                                    <td>{el.department}</td>
                                    <td>{el.salary}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}