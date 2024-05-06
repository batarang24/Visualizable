import { useRef, useState } from "react";
import regex from "./models/Regex";
import Trees from "./components/Tree";
import New from "./components/New";
import '../src/style/App.css'

var i=0;
function App()
{
  const inr=useRef()
  
  const [final,sfinal]=useState("") 
  return(
    <div style={{display:'flex',justifyContent:"space-around",height:'100vh'}}>
      <div style={{backgroundColor:'pink', width:'20%',textAlign:'center'}}>
        <input style={{margin:'20px 10px',border:'1px solid black', width:'80%',height:'30px'}} placeholder="Regex"  ref={inr}/><br/>
        <input type="button" name="Submit" value="Submit" className="button" onClick={()=>{
          console.log(final)
          sfinal(inr.current.value)
        }} ></input>
      </div>
      <div style={{backgroundColor:'white',width:'60%'}}>
        <Trees final={final}/>
      </div>
      <div style={{backgroundColor:'grey',width:'20%'}}>hoo</div>
    </div>
    /*(a|b)*.a.b.b.x
    <button onClick={()=>{
        sfinal('(a|b)*.a.b.b.x')
      }}>Hello world</button>
      <Trees final={final}/>*/
  );
}
export default App