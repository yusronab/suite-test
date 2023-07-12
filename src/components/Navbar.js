import { useState } from "react";

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <nav>
            <div className="logo">
                <h4>Company</h4>
            </div>
            <ul className={`nav-links ${isNavOpen ? 'slide' : ''}`}>
                <li>
                    <a href="#about" className="nav-item">ABOUT</a>
                    <ul className="dropdown-menu">
                        <li className="dropdown-item">
                            <a href="#history">HISTORY</a>
                        </li>
                        <li className="dropdown-item">
                            <a href="#vision">VISION MISSION</a>
                        </li>
                    </ul>
                </li>
                <li><a href="#work" className="nav-item">OUR WORK</a></li>
                <li><a href="#team" className="nav-item">OUR TEAM</a></li>
                <li><a href="#contact" className="nav-item">CONTACT</a></li>
            </ul>
            <div className="menu-toggle">
                <input type="checkbox" onChange={toggleNav} />
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
}

export default Navbar;