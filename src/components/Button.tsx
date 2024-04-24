import React, { ReactNode, useState } from 'react'

interface Props {
    alart: ReactNode
    children: string;
    style?: 'primary' | 'secondary' | 'danger' | 'info';
    onClick: () => void;
}



const Button = ({ alart, children, style = "secondary", onClick }: Props) => {

    return (

        <div className=' container-fluid text-center my-5 '>
            {alart}
            <button
                className={"btn btn-" + style}
                onClick={onClick}
            >{children}</button>
        </div>

    )
}

export default Button
