import React from 'react';
import { childreWithProps } from '../utils/utils';


export default props => 
    <div>
        <h1>{props.name} {props.lastname}</h1>
        <h2>Children</h2>
        {/* this way i'm forcing tather to have this 3 son tag on it, let create a slot to make it dynamic */}
        {/* <ul>
            <Son name="Sergio" lastname={props.lastname} />
            <Son {...props} />
            <Son {...props} name="Carla" />
        </ul> */}
        <ul>
            { childreWithProps(props) }
        </ul>
    </div>