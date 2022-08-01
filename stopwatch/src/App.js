
import './App.css';
import { useState, useRef } from 'react';
import {Display} from "./Components/display.jsx";
import {Buttons} from "./Components/button.jsx"

function App() {
  const [time, setTime] = useState({
    ms:0,
    s:0,
    m:0,
    h:0
  })

  // const [gap, setGap] = useState();
  const [status, setStatus] = useState(false);
  const countRef = useRef(null);


  var updatedMS = time.ms;
  var updatedS = time.s;
  var updatedM = time.m;
  var updatedH = time.h;

  const start = () => {
    // runStop();
    setStatus(true);
    countRef.current = (setInterval(runStop,10));
    
  }

  //

  

  const runStop = ()=>{
    if(updatedM === 60){
      updatedH++;
      updatedM = 0;
    }
    if(updatedS===60){
      updatedM++;
      updatedS=0;
    }
    if(updatedMS===100){
      updatedS++;
      updatedMS = 0;
    }
    updatedMS++;

    return setTime({
      ms:updatedMS,
      s:updatedS,
      m:updatedM,
      h:updatedH
    })
  }

  const stop = ()=>{
    clearInterval(countRef.current);
    setStatus(false);

  }

  const reset = ()=>{
    clearInterval(countRef.current);
    setTime({
      ms:0,
      s:0,
      m:0,
      h:0
    })
    setStatus(false);


  }
  return (
    <div className="App">
      <Display time={time}></Display>
      <Buttons start={start} stop={stop} reset={reset} status={status}></Buttons>
      
    </div>
  );
}

export default App;
