import React, { useState } from "react";
import images from "../../assets/images/images";
import { Link } from "react-router-dom";
import './Header2.css'

const Header2 = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
            <header className="header2" >
                <div className="row header-container">
                    <div className="col-6 logo" onClick={handleClick}>
                        <span>
                            MileOne Logo
                        </span>
                    </div>
                    <div className="col-6 text-end">
                        <ul className="links">
                            <li><Link to="/" className="active">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <Link to="/login"><i className="fas fa-user-plus"></i></Link>
                        </ul>
                    </div>
                </div>
            </header>

        </>
    );
};

export default Header2;