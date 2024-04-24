import React, { ReactNode, useState } from 'react'

interface Props {
    onClick: () => void;
}

function AlertButton({ onClick }: Props) {
    const [selectButtonStyle, SetselectButtonStyle] = useState("danger")
    const [selectButtonText, setSelectButtonText] = useState('Click the Button')




    return (
        <div >


            <button className={'btn btn-' + selectButtonStyle}
                onClick={() => {
                    SetselectButtonStyle('success')
                    setSelectButtonText('Clicked')
                    onClick()
                }}
            >{selectButtonText}</button>

        </div>
    )
}

export default AlertButton
