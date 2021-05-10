import React, {useState} from 'react';

export default function Navbar() {

    const [menu, setMenu] = useState(false);

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
                    <a href="#!">About</a>
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
            <div className="action-links">
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
