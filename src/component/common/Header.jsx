import React from "react";
import { NavLink } from "react-router-dom";

function Header(){
    return(
        <nav className="navbar">
            <div className="navbar-brand">
                <NavLink to="/home">School Mnagement</NavLink>
            </div>
            <ul className="navbar-ul">
                <li><NavLink to="/home" activeclassname="active">Home</NavLink></li>
                <li><NavLink to="/addschool" activeclassname="active">Register School</NavLink></li>
                {/* <li><NavLink to="/find-booking" activeclassname="active">Find my Booking</NavLink></li>

                {isUser && <li><NavLink to="/profile" activeclassname="active">Profile</NavLink></li>}
                {isAdmin && <li><NavLink to="/admin" activeclassname="active">Admin</NavLink></li>}

                {!isAuthenticated &&<li><NavLink to="/login" activeclassname="active">Login</NavLink></li>}
                {!isAuthenticated &&<li><NavLink to="/register" activeclassname="active">Register</NavLink></li>}
                {isAuthenticated && <li onClick={handleLogout}>Logout</li>} */}
            </ul>
        </nav>
    );
}

export default Header;