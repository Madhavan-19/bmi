import { useState } from 'react'
import './App.css'

function App() {
  const [height,setHeight]=useState("");
  const [weight,setWeight]=useState("");
  const [bmi,setBmi]=useState(null);
  const [bmiStatus,setBmiStatus]=useState("");
  const[errormsg,setErrormsg]=useState("")

  const calculateBmi=()=>{
    const isValidHeight=/^\d+$/.test(height);
    const isValidWeight=/^\d+$/.test(weight);
    if(isValidHeight&&isValidWeight){ 
      const heightInmetters=height/100;
      const bmiValue=weight/(heightInmetters+heightInmetters);
      setBmi(bmiValue.toFixed(2));
      if(bmiValue<18.5){
        setBmiStatus("underWeight")
      }
      else if(bmiValue>=18.5 && bmiValue<24.9){
        setBmiStatus("Normal weight");
      }
      else if(bmiValue>=25 && bmiValue<29.9){
        setBmiStatus("Overwight")
      }
      else{
        setBmiStatus("obese")
      }
      setErrormsg("")
    }else{
      setBmi(null)
      setBmiStatus("")
      setErrormsg("please enter valid for numeric values for height and weight")
    }
  }
const clearAll = ()=>{
 setHeight("")
 setWeight("")
 setBmi(null)
 setBmiStatus("")
}
  return (
  <>
      <div className="bmi-calculter">
        <div className="box"></div>
        <div className="data">
          <h1>BMI calculater</h1>
           {errormsg && <p className='error'>{errormsg}</p>}
          <div className="input-container">
            <label htmlFor="height">Height(cm):</label>
            <input type="text" value={height} id="height" onChange={(e)=>setHeight(e.target.value)}/>
          </div>
          <div className="input-container">
            <label htmlFor="weight">Weight(kg):</label>
            <input type="text"value={weight} id="Weight"onChange={(e)=>setWeight(e.target.value)}/>
          </div>
          <button onClick={calculateBmi}>Calculate BMI</button>
          <button onClick={clearAll}>Clear</button>
          {bmi!==null&&(<div className="result">
            <p>Your Bmi Is: {bmi}</p>
            <p>Status: {bmiStatus}</p>
          </div>)}
        </div>
      </div>
</>
    
  );
}

export default App
