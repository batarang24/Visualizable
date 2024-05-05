import '../style/circle.css'

function Circle(props)
{
   
   return(
        <div className="circle">
            <p className="text">{props.center}</p>
        </div>
   );
}

export default Circle