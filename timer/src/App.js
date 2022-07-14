import{useState, useRef} from "react";
import './App.css';

function App() {
  const [timer, setTimer] = useState(0);
  const [status, setStatus] = useState(false);
  const countref = useRef(0);

  const handleStart = ()=>{
    if(status){
      return;
    }
    countref.current = setInterval(() => {
      setTimer(prev => prev + 1)
    }, 1000);
    setStatus(true);

  }

  const handleStop = ()=>{
    setStatus(false);
    return clearInterval(countref.current)
  }

  const handleReset = ()=>{
    setStatus(false);
    clearInterval(countref.current);
    setTimer(0);
  }
  return (
    <div className="App">
      <h1>{timer}</h1>
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      
    </div>
  );
}

export default App;
