import React, {useState} from 'react';
import {Link} from 'react-scroll';

export default function Navbar() {

    const [menu, setMenu] = useState(true);

    const showMenu = () => {
        setMenu(!menu);
    }



    return (
        <nav>
            <div className="logo">
                <a href="#!">realstate</a>
            </div>
            <div className={menu ? "nav-links" : "nav-links show"}>
                <div className="nav-link">
                    <a href="#!">Home</a>
                </div>
                <div className="nav-link">
                    <Link to="about" spy={true} smooth={true} duration={2000} delay={500}>About</Link>
                </div>
                <div className="nav-link">
                    <a href="#!">Apartments</a>
                </div>
                <div className="nav-link">
                    <a href="#!">How It Works</a>
                </div>
                <div className="nav-link">
                    <a href="#!">Agents</a>
                </div>
                <div className="nav-link">
                    <a href="#!">Contact Us</a>
                </div>
            </div>
            <div className={menu ? "action-links" : "action-links action"}>
                <a href="#!">Join Us</a>
                <button>Get Started</button>
            </div>
            <div className={menu ? "toggler" : "toggler close"} onClick={showMenu}>
                <div className="btn-line"></div>
                <div className="btn-line"></div>
                <div className="btn-line"></div>
            </div>
        </nav>
    )
}
