import React from "react";
import {UserContext} from "./Component/UserContext";
import {UserConsumer} from "./Component/UserContext";
class ConsumerContext extends Component{
    render(){
        return(
            <UserConsumer>
                {
                    (props)=>{
                        return(
                        <div>
                            <h1>{props}</h1>
                        </div>
                        );
                    }
                }
            </UserConsumer>
        )
    }
}
export default ConsumerContext;