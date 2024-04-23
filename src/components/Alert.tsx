import { ReactNode } from "react";
interface Props {
    children: ReactNode;
}

const Alert = ({ children }: Props) => {
    return (
        <div className=' container my-5'>
            <div className="alert alert-primary w-50 " role="alert">
                {children}
            </div>
        </div>
    )
}

export default Alert

