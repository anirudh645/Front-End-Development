import React,{Component} from "react";
import B from "./B";
class A extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <B name="VVIT"/>
            </div>
        );
    }
}
export default A;