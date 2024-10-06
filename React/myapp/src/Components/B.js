import React,{Component} from 'react';
import C from './C';
class B extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <p>hell{this.props.name}</p>
            </div>
        )
    }
}
export default B;