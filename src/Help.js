import React, { useState } from 'react';
import Draggable from 'react-draggable';
import Xarrow, {useXarrow, Xwrapper} from 'react-xarrows';


const boxStyle = {border: 'grey solid 2px', borderRadius: '10px', padding: '10px',width:'100px',textAlign:'start'};
var node=[];
const DraggableBox = ({id}) => {
    const updateXarrow = useXarrow();
    return (
        
        <Draggable onDrag={updateXarrow} onStop={updateXarrow}>
            <div id={id} style={boxStyle}>
               <p style={{marginTop:'20px'}}> {id}</p>
            </div>
        </Draggable>
    );
};

export function V2Example(props) {
    
    var ro=props.rows
    
    props.rows.length!=0 && node.length!=0 && !node.includes(props.rows[0].source.toString())&& node.push(props.rows[0].source.toString())
    return (
        <div style={{display: 'flex', justifyContent: 'space-evenly', width: '100%'}}>
        {props.rows.length!=0 && <Xwrapper>
            
            {
                node.length!=0&&node.map((val)=><DraggableBox id={`${val}`}/>)
            }
            {node.length!=0 && !node.includes(props.rows[0].source.toString())&&<DraggableBox id={`${props.rows[0].source.toString()}`}/>}
            
            {props.rows.map(element => {
                console.log(node)
              if (!node.includes(element.dest.toString())) {
                //console.log(node.includes(element.dest.toString()))
                //console.log(element.dest.toString());
                node.push(element.dest.toString())
                return(
                    <div>
                    <DraggableBox  id={`${element.dest.toString()}`}/>
                </div>
                )
              }
            })}
           {props.rows.map(element => {
            if (element.source.toString()!=element.dest.toString()) {
                return <Xarrow  start={`${element.source.toString()}`} end={`${element.dest.toString()}`} curveness={1} labels={`${element.variable}`}/>
            }
            else
            {
                return  <Xarrow  start={`${element.source.toString()}`} end={`${element.dest.toString()}`} curveness={1} labels={`${element.variable}`} startAnchor={'top'} endAnchor={'right'} headSize={3} path='smooth' animateDrawing showHead color='red'/>
            }
              
            })}
        </Xwrapper>}    
        </div>
        
    );
}