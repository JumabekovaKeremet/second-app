import { useState } from "react";

function Inputength({ value, min, max }) {
    const [number, setNumber] = useState(value ?? 0);
    return (
        <div className="Inputength">
            <input
                type="range"
                min={min}
                max={max}
                value={number}
                onInput={(event) => setNumber(event.target.value)} /> {number}/{max}
        </div>
    );
}
export default Inputength;
