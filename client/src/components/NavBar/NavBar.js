import { NavLink } from 'react-router-dom'
import {useRef} from 'react'
import './navBar.css'

function NavBar(){
    const home = useRef('')
    const store = useRef('')
    const cart = useRef('')
    const user = useRef('')
    return(
        <nav>
            <NavLink ref={home} to="/">
                <i className='fas fa-home'></i>
            </NavLink>
            <NavLink to="/store" ref={store}>
                <i className='fas fa-store'></i>
            </NavLink>
            <NavLink to="/cart" ref={cart}>
                <i className='fas fa-cart-arrow-down'></i>
            </NavLink>
            <NavLink to="/user" ref={user}> 
                <i className='fas fa-user-shield'></i>
            </NavLink>
        </nav>
    )
}

export default NavBar

// className={`${home.current.getAttribute() !== 'active' ? 'far': 'fas'} fa-home`}