
import first_last from "../models/First_last"
import DFA from "./DFA"
import New from "./New"

function Noder(props)
{
   console.log(props.follow)
   // <New child={props.node}/> {node!=undefined && <DFA root={props.rooter.first}  follow={props.follow}/>}
   
   var node=props.node   
    return (
    <div>
      {props.initial && <New child={props.node} />}
     
      {!props.initial&&props.node!=undefined && <DFA root={props.rooter.first}  follow={props.follow}/>}
    </div>
   ) 
    
}
export default Noder