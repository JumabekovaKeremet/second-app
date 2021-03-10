import {useState} from "react";
function Size({value}){

    const [size, setSize] = useState(16);

    return <div className="example-5">
        <span style={{fontSize: size + "px"}}>Example</span>
            <input type="number" 
            value = {size}
            onInput={(event) => setSize(event.target.value)}/>
    </div>   
}
export default Size;