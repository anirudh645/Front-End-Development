import React,{useRef,useState,useEffect} from 'react';
function UseRefHook1(){
    const [count, setCount] = useState(0);
    const PrevCount = useRef(0);
    useEffect(()=>{PrevCount.current = count;},[count]);
    return(
        <div>
            <h1>Counter: {count}</h1>
            <h2>Previous Counter: {PrevCount.current}</h2>
            <button onClick={()=>setCount(count+1)}>Increment</button>
        </div>
    );
}
export default UseRefHook1;