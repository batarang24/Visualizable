import { useEffect, useState } from "react";
import checkSubset from "../models/Subset";
import dfa_table from "../models/Table";
import union_arrays from "../models/Union";
import dfaloop from "../models/dfacon";
import State from "./State";
var i=0;
function DFA(props)
{
    const [dfa,sdfa]=useState([])
    const [va,sva]=useState([])
    useEffect(()=>{
        sdfa(dfaloop(props.root,props.follow,[],[]))
        console.log(dfa)
    },[props])
    console.log(dfa)
    //console.log(lem)

    return(
        <div>
            Hello
           
            <State row={va}/>
           
            <button onClick={()=>{
                console.log('clicker')
                if (dfa.length>i) {
                    sva(dfa[i++])
                }    
            }}>DFA</button>
        </div>
    )
    
}
export default DFA