import React from 'react';

// Diferents aways of rendering code in JFX
// 1 mode
export default props => [
    <h1 key='h1'>Good Morning { props.name }!!</h1>,
    <h2 key='h2'>See you soon.</h2>
]

// 2 mode - with a div outside everything
// export default props => 
//     <div>
//         <h1>Good Morning { props.name }!!</h1>
//         <h2>See you soon.</h2>
//     </div>

// 3 mode - the <React.Fragment> wont generate any code in the DOM area
// export default props => 
//     <React.Fragment>
//         <h1>Good Morning { props.name }!!</h1>
//         <h2>See you soon.</h2>
//     </React.Fragment>