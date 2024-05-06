import { V2Example } from "../Help";
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