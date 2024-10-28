import React,{Component} from 'react';
import C from './C';
class B extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <C/>
            </div>
        )
    }
}
export default B;