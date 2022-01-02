import React, { useState } from "react";
import images from "../../assets/images/images";
import Menu from "../Menu/Menu";
import { Link, NavLink } from "react-router-dom";
import './Header.css'

const Header = ({user}) => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
            <header className="header" >
                <div className="logo" onClick={handleClick}>
                    <span>
                        <i className="fas fa-bars"></i>
                        <p>MileOne Logo</p>
                    </span>
                </div>
                <div
                    className={
                        click ? "menu-style slide" : "menu-style"
                    }
                >
                    <Menu handleClick={handleClick}/>
                </div>

                <div className="search-control">
                    <input type="search" placeholder="Search" aria-label="Search" />
                    <i className="fas fa-search"></i>
                </div>
                <div className="navLink" >
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About Us</NavLink></li>
                    </ul>
                    {
                        user ?
                        <Link to="/cart"><p>{user.name}</p><i class="fas fa-cart-plus i-icon"></i></Link> :
                        <Link to="/login"><p>Sign In </p><i className="fas fa-user-plus"></i></Link>
                    }
                </div>
            </header>

        </>
    );
};

export default Header;