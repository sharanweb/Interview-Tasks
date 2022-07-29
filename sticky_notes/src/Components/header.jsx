


export const Header = ({handleTheme})=>{

    return (
        <div className="header">
            <h1>Sticky Notes</h1>
            <botton className="savenote" onClick={()=>handleTheme((prevMode)=> !prevMode)}>Theme</botton>

        </div>
    )
}