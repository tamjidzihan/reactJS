import React from 'react';

function Promo(props) {
    return (
        <div>
            <h1> <i>From Components Parent:</i> {props.heading}</h1>
            <h2><i>From Components Parent:</i> {props.callToAction}</h2>
        </div>
    );
}

export default Promo;
