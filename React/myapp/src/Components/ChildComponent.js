import React,{Component} from "react";
class ChildComponent extends Component{
    render(){
        return(
            <div>
                <h1>Parent-Child Components</h1>
                <button onClick={this.handleChild}>Send</button>
            </div>
        )
    }
    handleChild = (e) =>{
        this.props.parentHandle("Data from Child");
        e.preventDefault();
    }
}
export default ChildComponent;