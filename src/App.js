import { useState } from "react";
import regex from "./models/Regex";
import Trees from "./components/Tree";
import New from "./components/New";

var i=0;
function App()
{
  const [final,sfinal]=useState("") 
  return(
    <div>
      <button onClick={()=>{
        sfinal('(a|b)*.a.b.b.x')
      }}>Hello world</button>
      <Trees final={final}/>
    </div>
    
  );
}
export default App