import '../style/circle.css'

function Circle(props)
{
    console.log("I am circle margin",props.count)
   return(
        <div className="circle" style={{marginLeft:`${props.count}px`}}>
            <p className="text">{props.center}</p>
        </div>
   );
}

export default Circle