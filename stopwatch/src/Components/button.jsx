


export const Buttons = (props)=>{

    return (
        <div className="bdiv">
            {props.status===0? <button onClick={props.start}>Start</button>: "" }
            {props.status === 1?
            <div>
               <button onClick={props.stop}>Stop</button>
               <button onClick={props.reset}>Reset</button>
            </div>: ""
            }
            {
                props.status===2? <div>
                
                <button onClick={props.start}>Resume</button>
                <button onClick={props.reset}>Reset</button>
             </div>: ""
            }
            

        </div>
    )
}