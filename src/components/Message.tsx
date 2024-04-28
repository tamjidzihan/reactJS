import React from 'react'



let count2 = 0;

function Message() {
    let count = 0;
    count++;
    count2++;
    return (
        <div>
            Message {count} {count2}
        </div>
    )
}

export default Message
