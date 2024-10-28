import React,{Component} from 'react';
class Child extends Component {
    constructor(props) {
        super(props);
        this.state = {flag: this.props.flag};
    }
    
    render(){
        return(
            <div>
                <h1>Parent-Child</h1>
                <button onClick={()=>this.setState({flag: !(this.state.flag)})}>{this.state.flag ? "true" : "false"}</button>
            </div>
        );
    }
    componentDidUpdate(){
        console.log(this.state.flag);
    }
}
export default Child;