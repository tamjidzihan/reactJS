// import React from 'react'

// function Button() {
//     const clickHandler =
//         () => console.log('Code here');
//     return (
//         <div>
//             <button onClick={clickHandler}>
//                 React Buttonasd
//             </button>
//         </div>
//     );
// }

// export default Button;

// import React from 'react'

// function Button() {
//     const clickHandler =
//         () => console.log('Code here');
//     return (
//         <div>
//             <button onClick={clickHandler}>
//                 React Buttonasd
//             </button>
//         </div>
//     );
// }

// export default Button;

import React from 'react'

function Button() {
    let darkModeOn = true;
    const darkMode = <h1>Dark Mode is On</h1>
    const lightMode = <h1>Light Mode is On</h1>


    const clickHandler = () => {
        darkModeOn = !darkModeOn;
        if (darkModeOn === true) {
            return console.log('Dark mode is on')
        } else return console.log('Light mode is on')
    };
    return (
        <div>
            {darkModeOn ? darkMode : lightMode}
            <button onClick={clickHandler}>
                Dark Mode Toggler
            </button>
        </div>
    );
}

export default Button;
