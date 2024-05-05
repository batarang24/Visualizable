import union_arrays from "./Union";


function first_last(node,dumper,follow)
{
    //console.log(node,dumper,follow)
    if (node!=undefined) {
        if ('children' in node) {
            if (node.name=='|' ) {
                return{
                    first:union_arrays(node.children[0].first ,node.children[1].first),
                    last:union_arrays(node.children[0].last,node.children[1].last),
                    nullable:node.children[0].nullable||node.children[1].nullable,
                    dumper:dumper,
                    follow:follow
                }
            }
            else if (node.name=='.') {
                var first;
                var last;
               if (node.children[0].nullable) {
                    first=union_arrays(node.children[0].first,node.children[1].first)
               }
               else
               {
                    first=node.children[0].first
               }
               if (node.children[1].nullable) {
                    last= union_arrays(node.children[0].last,node.children[1].last)
               }   
               else
               {
                    last=node.children[1].last
               }
               node.children[0].last.forEach(element => {
                    if (follow[element]) {
                        follow[element]=union_arrays(follow[element],node.children[1].first )
                    }
                    else
                    {
                        follow[element]=node.children[1].first
                    }
               });
               console.log('hellllll')
              /* for (let index = 0; index <node.children[0].last.length ; index++) {
                    let lnode=node.children[0].last
                    if (follow[parseInt(lnode[index])]) {
                        follow[parseInt(lnode[index])]+=node.children[1].first 
                    }
                    else
                    {
                        follow[parseInt(lnode[index])]=node.children[1].first 
                    }
                   
                
               }*/
               return {
                first:first,
                last:last,
                nullable:false,
                dumper:dumper,
                follow:follow
               }
                   
            }
            else if (node.name=='*') {
                ////console.log(node.children[0])
               console.log('******************')
                var first=node.children[0].first
                var last=node.children[0].last
                last.forEach(element => {
                   
                    if (follow[element]) {
                      
                        follow[element]=union_arrays(follow[element],first)
                    }
                    else
                    {
                        follow[element]=first
                    }
                   // follow[element]=union_arrays(follow[element],first)
                });
               /* for (let index = 0; index < last.length; index++) {
                    
                   if (follow[parseInt(last[index])]) {
                        //console.log(parseInt(last[index]))
                        follow[parseInt(last[index])]+=first
                    }
                    else
                    {
                        follow[parseInt(last[index])]=first
                    }
                    
                   //console.log(follow)
                   //console.log(parseInt(last[index]))
                }*/
                console.log('*********')
                return {
                    first:first,
                    last:last,
                    nullable:true,
                    dumper:dumper,
                    follow:follow
                    
                }
            }
        }
        else
        {
            if (node.name=='€') {
                var nu=nullables(node.name)
                return {
                    first:'Φ',
                    last:'Φ',
                    nullable:nu,
                    dumper:dumper,
                    follow:follow
                }
            }
            else
            {
                ////console.log(node.name)
                var nu=nullables(node.name)
                var du=parseInt(dumper)+1
                
                return {
                   
                    first:[dumper],
                    last:[dumper],
                    nullable:nu,
                    dumper:du.toString(),
                    follow:follow
                }
            }
            
        }
    }
    
}
function nullables(name)
{
    if (name=='*' || name=='€') {
        return true
    }
    return false
}
export default first_last