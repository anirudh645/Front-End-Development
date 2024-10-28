import React,{useReducer} from 'react';
const initialState =0;
const reduce = (state, action) =>{
    switch(action){
        case "INCREMENT":
            return state+1;
        case "DECREMENT":
            return state-1;
        case "RESET":
            return 0;
    }
}
function UseReduceHook(){
    const[count, dispatch] = useReducer(reduce,initialState)
    return(
        <div>
            <h1>Count - {count}</h1><br/><br/>
            <button onClick={()=>{dispatch("INCREMENT")}}>Add</button>
            <button onClick={()=>{dispatch("DECREMENT")}}>Subtract</button>
            <button onClick={()=>{dispatch("RESET")}}>RESET</button>
        </div>
    );
}
export default UseReduceHook;