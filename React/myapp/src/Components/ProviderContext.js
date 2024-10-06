import React from 'react';
import {UserContext} from "./Component/UserContext";
import { UserProvided } from './UserContext';
class ProviderContext extends Component {
    render(){
        return(
            <Userprovider name = "VVIT">
                <ConsumerContext/>
            </Userprovider>
        );
    }
}
export default ProviderContext;