
function Header(props) {
    console.log(props);
    return (
        <nav className="main-nav">
            <ul>
                <li>First {props.object}</li>
                <li>Secont {props.object}</li>
                <li>Third {props.object}</li>
                <li>Forth {props.object}</li>
                <li>Fifth {props.object}</li>
            </ul>
        </nav>
    )
}


export default Header;