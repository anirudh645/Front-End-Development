import React,{Component} from "react";
import ChildComponent from "./ChildComponent";
class ParentComponent extends Component{
    constructor(){
        super();
        this.state = {
            data : null
        }
    }
    render(){
        return(
            <div>
                <ChildComponent parentHandle = {this.handleParent}/>
                <h1>{this.state.data}</h1>
            </div>
        )
    }
    handleParent = (childdata) =>{
        this.setState({data:childdata});
    }
}
export default ParentComponent;