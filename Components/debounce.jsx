import React from 'react'

const Debounce = () => {
  
const getData = () =>{
    console.log("API CALL")
}







const debouncee= (fn, d) =>{
    let timer;
        return function (){
    
            let context = this,
            args = arguments
            clearTimeout(timer);
    
           timer= setTimeout(()=>{
                fn.apply(context, args)
            }, d)
        }
    }


    const betterfunction = debouncee(getData, 500)

  
    return (
    <div>

<input type="text" onKeyUp={()=> betterfunction()} />

    </div>
  )
}

export default Debounce