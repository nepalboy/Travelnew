import { Link } from 'react-router-dom';

import { Mountain } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <Mountain className="navbar-icon" />
                    <span>Traversing With Time</span>
                </Link>
                <div className="navbar-links">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/blog" className="nav-link">Blog</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
