import {useState} from "react";
function Color({value}){
    const [color, setColor] = useState();

    return <div className="example-5">
        <span style={{color: color}}>Example</span>
            <input type="color" 
            value = {color}
            onInput={(event) => setColor(event.target.value)}/>
    </div>   
}
export default Color;