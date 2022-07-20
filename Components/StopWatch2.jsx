import React from 'react'
import {useState, useRef} from "react"


const StopWatch2 = () => {

const [counter, setCounter] = useState(0)
const [show, setShow] = useState(true)

const ref= useRef(null)

const handleChange = ()=>{
if(show){

   ref.current= setInterval(()=>{

        setCounter((preValue)=>{
            return preValue + 1 
        })
    }, 1000)

    setShow(false)
}
else{

    clearInterval(ref.current)
    setShow(true)

}
}

function handleReset(){

    clearInterval(ref.current)
    setCounter(0)
}

    return (
    <div>

        <div> Counter: {counter} </div>

<button onClick={handleChange} > {show ? "Start" : "Stop"} </button>

<button onClick={handleReset} > Reset </button>


    </div>
  )
}

export default StopWatch2