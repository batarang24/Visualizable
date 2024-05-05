function findCommonCharacters(str1, str2) { 
    const arr1 = Array.from(new Set(str1)); 
    const arr2 = Array.from(new Set(str2)); 
   
    return arr1.filter(char => arr2.includes(char)); 
  } 

function DFA(props)
{
    console.log(props.root)
    console.log(props.follow)
    var table=props.follow
    var row=[]
    for (let index = 0; index < table.length; index++) {
        if (props.root.includes(table[index].index.toString()) ) {
            row.push(table[index])
        }
        
    }
    const hellw=Object.groupBy(row,(a)=>a.variable)
    console.log(hellw)
    for(const key in hellw){
        console.log()
        var state=''
        console.log(key.length)
        var keyy=hellw[key]
        var regi={
            source:props.root,
            variable:key,
            dest:''
        }
        for (let index = 0; index < hellw[key].length; index++) {
           // console.log(keyy[index].follow)
           if (regi.dest.includes()) {
            
           }
            regi.dest+=keyy[index].follow
        }
        console.log(regi)
    }
   

    return(
        <div></div>
    )
}
export default DFA