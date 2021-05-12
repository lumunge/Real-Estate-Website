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
                    <Link to="apartments" spy={true} smooth={true} duration={2000} delay={500}>Apartments</Link>
                </div>
                <div className="nav-link">
                    <Link to="works" spy={true} smooth={true} duration={2000} delay={500}>How It Works</Link>
                </div>
                <div className="nav-link">
                    <Link to="agents" spy={true} smooth={true} duration={2000} delay={500}>Agents</Link>
                </div>
                <div className="nav-link">
                    <Link to="contacts" spy={true} smooth={true} duration={2000} delay={500}>Contact Us</Link>
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
