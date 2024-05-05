
import first_last from "../models/First_last"
import DFA from "./DFA"
import New from "./New"

function Noder(props)
{
   console.log(props.rooter)
   // <New child={props.node}/>
   
   var node=props.node
  
   
    return (
    <div>
     
      {node!=undefined && <DFA root={props.rooter.first}  follow={props.follow}/>}
      <button onClick={()=>{

      }}>First and follow</button>
    </div>
   ) 
    
}
export default Noder