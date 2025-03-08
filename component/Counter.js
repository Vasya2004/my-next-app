"use client";

import { useState } from "react";

function Counter(props) {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(prevCount => prevCount + 1);
    };

    return (
        <div className="flex flex-col items-center gap-4 p-6 rounder-lg">
            <h2 className="text-gxl font-semibold">{props.title}</h2>

            <div className="flex items-center gap-4">
                <button
                onClick={() => setCount((prev)=> prev - 1)}
                >
                    -    
                </button>
            </div>

            <span className="text-2xl font-mono min-w-[3ch] text-center">
                {count}
            </span>
           
           <button
           onClick={() => setCount((prev)=> prev + 1)}
           className="btn btn-square forced-colors:border-e-emerald-50"
           >  
           +
           </button>

        </div>
    );
}

export default Counter;