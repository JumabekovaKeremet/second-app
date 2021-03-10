import {useState} from "react";
function Dollar({value}){

    const [number, setNumber] = useState(value ?? 0);

    return <div className="example-5">
            <p>= {number} som</p>
            <input type="color" 
            placeholder="Enter text"
            onInput={(event) => setNumber(event.target.value)}/>
            <span>= {number * 85} som</span>
    </div>   
}
export default Dollar;