import React from 'react';
import Tree from 'react-d3-tree';


function New(props)
{
  
    var data=[
        
    ]
    data.push(props.child)
   
    return(
        <div style={{width:'80vw',height:'80vh'}}>
          {
            props.child!=undefined && <Tree data={data} orientation='vertical'/>
            
          }
        </div>
    )
}

export default New