import React, { useState } from "react";
import images from "../../assets/images/images";
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
            <header className="header" >
                <div className="row header-container">
                    <div className="col-lg-3 col-md-3 col-12 logo" onClick={handleClick}>
                        <span>
                            <i className="fas fa-bars"></i>
                            MileOne Logo
                        </span>
                    </div>
                    <div
                        className={
                            click ? "menu-style slide" : "menu-style"
                        }
                    >
                        {/* <span className="logo" onClick={handleClick}>
                            <i class="fas fa-times"></i>
                        </span> */}
                        <ul className="menu">
                            <li onClick={handleClick} className="flex m-active">
                                <img src={images.restaurant} />
                                <Link to="">Restaurant</Link>
                            </li>
                            <li onClick={handleClick} className="flex">
                                <img src={images.snacks} />
                                <Link to="">Cakes</Link>
                            </li>
                            <li onClick={handleClick} className="flex">
                                <img src={images.icecream} />
                                <Link to="">Ice Cream</Link>
                            </li>
                            <li onClick={handleClick} className="flex">
                                <img src={images.snacks} />
                                <Link to="">Snacks</Link>
                            </li>
                            <li onClick={handleClick} className="flex">
                                <img src={images.dishes} />
                                <Link to="">African Dishes</Link>
                            </li>
                            <li onClick={handleClick} className="flex">
                                <img src={images.dishes} />
                                <Link to="">Local Dishes</Link>
                            </li>
                            <li onClick={handleClick} className="flex">
                                <img src={images.drinks} />
                                <Link to="">Drinks</Link>
                            </li>
                            <li onClick={handleClick} className="flex">
                                <img src={images.intercontinental} />
                                <Link to="">Intercontinental</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-6 col-md-5 col-12">
                        <div className="box">
                            <input className="search-control" type="search" placeholder="Search" aria-label="Search" />
                            <i className="fas fa-search"></i>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-12">
                        <ul className="">
                            <li className="active">Home</li>
                            <li>About Us</li>
                            <button type="button">Sign In <i className="fas fa-user-plus"></i></button>
                        </ul>
                    </div>
                </div>
            </header>

        </>
    );
};

export default Header;