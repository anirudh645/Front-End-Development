import React,{Component} from 'react';
import Child from './Child';
class parent extends Component {
    render(){
        return(
            <div>
                <Child flag = "true"/>
            </div>
        )
    }
}
export default parent;