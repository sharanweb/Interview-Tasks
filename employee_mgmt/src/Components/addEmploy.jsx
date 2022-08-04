

import { useState } from "react";
import axios from "axios"

export const AddEmployee = ()=>{
    const [formdata, setFormdata] = useState({
        name:"",
        email:"",
        city:"",
        department:"",
        salary:0
    });

    const handleChange = (e)=>{
        // console.log(e.target);
        const {name, value} = e.target;
        setFormdata({...formdata, [name]:value})
    }
    //console.log(formdata)

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:8080/employees", formdata).catch((err)=>console.log(err));
        setFormdata({
            name:"",
            email:"",
            city:"",
            department:"",
            salary:0
        })

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder="name" value={formdata.name} name="name" onChange={handleChange}></input>
                <input placeholder="email" value={formdata.email} name="email" onChange={handleChange}></input>
                <input placeholder = "city" value={formdata.city} name="city" onChange={handleChange}></input>
                <select value={formdata.department} name="department" onChange={handleChange}>
                    <option value="">Select Department</option>
                    <option value="web">Web developement</option>
                    <option value="data">Data Science</option>
                </select>
                <input placeholder="Salart" value={formdata.salary} name="salary" onChange={handleChange}></input>
                <input type="submit" placeholder="Submit" value="Submit"></input>
            </form>
        </div>
    )
}