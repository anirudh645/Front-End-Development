import React,{Component} from 'react';
function FCounter(){
    const [count,setCount] = React.useState(0);
    return(
        <div>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <h1>Counter: {count}</h1>
            
        </div>
    );
}
export default FCounter;