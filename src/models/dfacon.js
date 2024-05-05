import checkSubset from "./Subset"
import dfa_table from "./Table"




function dfaloop(root,follow,blank,dfa)
{
    var blank=blank
    var dfa=dfa
    blank.push(root.toString())
    var chap=dfa_table(root,follow)
    dfa.push(chap)
   
    //console.log(blank)
    chap.forEach((val)=>{
        //console.log(blank)
        if (!blank.includes(val.dest.toString())) {
            blank.push(val.dest.toString())
           dfaloop(val.dest,follow,blank,dfa)
           
        }
    })
    return dfa
}

export default dfaloop