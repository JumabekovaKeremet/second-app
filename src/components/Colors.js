import {useState} from "react";
function Colors({value}){

    const [color, setColor] = useState(value ?? "");

    return <div className="example-5">
            <p>{color}</p>
            <input type="color" value= {color} onInput={(event) => setColor(event.target.value)}/>
    </div>   
}
export default Colors;