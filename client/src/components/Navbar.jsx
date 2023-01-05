import * as React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({user}) =>{
    return(
        <div className="navbar">
            <h1 className="logo">
                <Link to="/" className='link'>James App</Link>
            </h1>{
                user ? (
            <ul className="list">
                <li className="listItem">
                    <img src="https://xsgames.co/randomusers/assets/images/favicon.png" className="avatar" alt="avatar"/>
                </li>
                <li className="listItem">John Doe</li>
                <li className="listItem">Logout</li>
            </ul>
            ): (<Link to="login" className='link'>Login</Link>)
        }
        </div>
    )
}
export default Navbar