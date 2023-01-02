const Navbar = () =>{
    return(
        <div className="navbar">
            <span className="logo">James App</span>
            <ul className="list">
                <li className="listItem">
                    <img src="https://xsgames.co/randomusers/assets/images/favicon.png" className="avatar" />
                </li>
                <li className="listItem">John Doe</li>
                <li className="listItem">Logout</li>
            </ul>
        </div>
    )
}
export default Navbar