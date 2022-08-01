


export const Buttons = (props)=>{

    return (
        <div className="bdiv">
            <button onClick={props.start}>Start</button>
            <button onClick={props.stop}>Stop</button>
            <button onClick={props.reset}>Reset</button>

        </div>
    )
}