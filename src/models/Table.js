import { tab } from "@testing-library/user-event/dist/tab"
import union_arrays from "./Union"
import checkSubset from "./Subset"

function dfa_table(root,follow)
{
    var table=follow
    var row=[]
    var rows=[]
    var tables={}
    for (let index = 0; index < table.length; index++) {
        //console.log(root,table[index])
        if ( root.includes(table[index].index.toString())) {
           // console.log(table[index])
            row.push(table[index])
        }
        
    }
    //console.log(row)
    const hellw=Object.groupBy(row,(a)=>a.variable)
    //console.log(hellw)
    for(const key in hellw){
        //console.log()
        var state=''
        //console.log(key.length)
        var keyy=hellw[key]
        var regi={
            source:root,
            variable:key,
            dest:[]
        }
        var fix=[]
        for (let index = 0; index < hellw[key].length; index++) {
           //console.log(keyy[index].follow)
           regi.dest=union_arrays(regi.dest,keyy[index].follow)
           
        }
        rows.push(regi)
    }
    return rows
}

export default dfa_table