import {useState} from "react";
function Temp({value}){

    const [number, setNumber] = useState(value ?? 0);

    return <div className="example-5">
            <p>= {number} f</p>
            <input type="temp" 
            placeholder="Enter text"
            onInput={(event) => setNumber(event.target.value)}/>
            <span>= {number * 1.8 + 32} f</span>
    </div>   
}
export default Temp;