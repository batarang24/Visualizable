import { useEffect, useState } from "react"
import Node from "../models/Node"
import Real from "./Noder";
import regex from "../models/Regex";
import Noder from "./Noder";
import vary from "../models/Variable";
import Tree from "react-d3-tree";

var i=0;

function Trees(props)
{
    const[d,sd]=useState('visible')
    const[initial,sini]=useState(true)
    const[lamp,slamp]=useState([])
    const[follow,sfollow]=useState([])
    const [node,snode]=useState()
    const [butt,sbutt]=useState('Create Syntax Tree')
    const[dump,sdump]=useState('')
    var hells=[];
    useEffect(()=>{
        var reg=regex(props.final)
        var variable=vary(props.final)
        var hell=reg.follow
        //console.log(hell.length)
        for (let i = 1; i < hell.length; i++) {

            console.log('i am from hell')
            
            hells.push(
                {
                    variable:variable[i-1],
                    index:i,
                    follow:hell[i]
                }
               
            )
           
        }
        
       sfollow(hells)
       //console.log(hells)
        slamp(reg.kera)
        console.log(lamp)  
       // console.log(follow)
       
    },[props.final])
    
    
    return(
        <div>
            <button className="button" style={{visibility:`${d}`}} onClick={()=>{
               if (lamp.length>i) {
                snode(lamp[i++])
                
               }  
               else
               {
                sini(false)
                sd('hidden')
                
                
               }    
            }}>{butt}</button>
            
            <Noder node={node} follow={follow} rooter={lamp[lamp.length-1]} initial={initial}/>
            
        </div> 
    )
}
export default Trees