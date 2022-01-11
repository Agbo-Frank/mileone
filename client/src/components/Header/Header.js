import React, { useState } from "react";
import Menu from "../Menu/Menu";
import { useReactiveVar, useQuery } from '@apollo/client'
import { GET_USER} from '../../Apollo/operations/Queries'
import { Link, NavLink } from "react-router-dom";
import { Auth } from '../../Apollo/reactiveVar/Auth';
import { UserVar } from '../../Apollo/reactiveVar/Variables';
import { ToggleFunc } from '../../Apollo/reactiveVar/Toggle';
import './Header.css'



const Header = () => {
    const user = useReactiveVar(UserVar)
    console.log(user)
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const token = localStorage.getItem('Token');

    const {loading, error, client } = useQuery(GET_USER, {
        context:{
            headers:{
                authToken:  token
            }
        },
        onCompleted: ({ getUser }) => {
            console.log(getUser)
            UserVar([{
                ...UserVar()[0],
                name: getUser.name,
                email: getUser.email,
                image: getUser.image,
                isLoggedIn: getUser ? true : false
            }])
        },
        onError: (err) => {
            console.log(err)
        }
    })
    function logout (){
        client.clearStore();
        Auth({type: 'LOGOUT'})
    }

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
                    <input 
                    type="search" 
                    placeholder="Search" 
                    aria-label="Search" 
                    onFocus={() => ToggleFunc({type: 'OPEN_SEARCH_PAGE'})}/>
                    <i className="fas fa-search"></i>
                </div>
                <ul className="navLink" >
                    <li><NavLink to="/">Home</NavLink></li>
                    {
                        user[0]?.isLoggedIn ? 
                        <>
                            <li className="active logout" onClick={ logout }><a><p>Logout</p><i className="fas fa-sign-out-alt"></i></a></li>
                            <li className="active"><Link to="/cart"><p>{user[0].name}</p><i className="fas fa-cart-plus i-icon"></i></Link></li>
                        </> :
                        <li className="active"><Link to="/login"><p>Sign In</p><i className="fas fa-user-plus"></i></Link></li>
                    }
                </ul>
            </header>

        </>
    );
};

export default Header;