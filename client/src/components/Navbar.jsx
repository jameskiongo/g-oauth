import { Link } from "react-router-dom"

const Navbar = () =>{
    return(
        <div className="navbar">
            <span className="logo">
                <Link to="/">James App</Link>
            </span>
            <ul className="list">
                <li className="listItem">
                    <img src="https://xsgames.co/randomusers/assets/images/favicon.png" className="avatar" alt="avatar"/>
                </li>
                <li className="listItem">John Doe</li>
                <li className="listItem">Logout</li>
            </ul>
        </div>
    )
}
export default Navbar