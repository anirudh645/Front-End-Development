import React,{Component} from 'react';
export default class D extends Component{
    render(){
        return(
            <div>
                <h1>Hello</h1>
                <p>{this.props.name}</p>
            </div>
        )
    }
}