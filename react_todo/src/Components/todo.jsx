import { useState } from "react";
import { Todoinput } from "./todoinput";
import { Todolist } from "./todolist";
import {nanoid} from "nanoid"

export const Todo = ()=>{
    const [list, setList] = useState([]);

    const handleAdd = (value)=>{
        let data = {
            title: value,
            status: false,
            id: nanoid(5) 
        }

        setList([...list, data]);

    }

    const handleDelete = (id)=>{
        setList(list.filter((e)=> e.id!==id))

    }

    const handleStatus = (id)=>{
        setList(list.map((e)=> e.id=== id ? {...e, status: !e.status}: e))
    }


    return (
        <div>
            <Todoinput handleAdd={handleAdd}></Todoinput>
            <div>
                {
                    list.map((elem)=>{
                        return(
                            <Todolist handleDelete={handleDelete} handleStatus={handleStatus} todoitem = {elem} key={elem.id}></Todolist>
                        )
                    })
                }
            </div>
        </div>
    )
}