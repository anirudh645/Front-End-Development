import React,{Component} from 'react';
export default class D extends Component{
    render(){
        return(
            <div>
                <h1>A-B-C-D</h1>
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}