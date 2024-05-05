import { V2Example } from "../Help";
import Circle from "./Circle";
var real=[]
function State(props)
{
    console.log('I am from State',props.row)
    real=[...real,...props.row]
    return(
        <V2Example rows={real}/>
    )

}
export default State