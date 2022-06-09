import React, {useState} from 'react';
function HOOK_USE_STATE() {

    const[count, setCount] = useState(0);

   const handelIncrement = () =>{
    setCount(count + 1)
    }
 
    return ( <div>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>increment</button>
    </div> );
}

export default HOOK_USE_STATE;