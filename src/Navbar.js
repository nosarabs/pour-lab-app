import React from 'react';
import { Link } from 'react-router-dom';
import { FaCog } from 'react-icons/fa'; // Using Font Awesome for config icon

const Navbar = () => {
    return (
        // <h1>Pourly</h1>
        <nav className="navbar navbar-expand-lg text-bg-warning">
            <div className="container-fluid">
                {/* Left Side: App Title */}
                <Link to="/pourly" className="navbar-brand mb-0 h1">
                    Pourly
                </Link>

                {/* Right Side: Config Icon */}
                <div className="d-flex">
                    <Link to="/config" className="nav-link">
                        <FaCog size={22}/>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
