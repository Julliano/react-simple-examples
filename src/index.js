import React from 'react';
import ReactDOM from 'react-dom';

// diferente type of imports and using
import Salutation from './components/salutation';

ReactDOM.render(
    <div>
        <Salutation type="Good Morning" name="Sergio" />
    </div>
,document.getElementById('root'));