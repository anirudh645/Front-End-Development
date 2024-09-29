import React from 'react';

function PropsDemo(Props){
    return  (
        <div>
            <h1>Props Demo</h1>
            <h4>First Name:  {Props.firstName}</h4>
            <h4>Last Name:  {Props.lastName}</h4>
        </div>
    )
}

export default PropsDemo