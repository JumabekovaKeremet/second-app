const { useState} = require("react");
function Length({value}){
    const [length, setLength] = useState(value ?? "");

    return(
        <div className="Length">
             <input type="text"
              onInput={(event) => setLength(event.target.value.trim())}/>{length.Length}
           <span>0</span>
        </div>
    )
}
export default Length;