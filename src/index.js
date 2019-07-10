import React from 'react';
import ReactDOM from 'react-dom';

// diferente type of imports and using
import Salutation from './components/salutation';
import Father from './components/father';
import Son from './components/son';

ReactDOM.render(
    <div>
        <Salutation type="Good Morning" name="Sergio" />
        <Father name="Julliano" lastname="Murilo">
            <Son name="Sergio" />
            <Son name="Pedro" />
            <Son name="Carla" />
        </Father>
    </div>
,document.getElementById('root'));