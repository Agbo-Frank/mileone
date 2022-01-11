import { NavLink } from 'react-router-dom'
import { Auth } from '../../Apollo/reactiveVar/Auth';
import {useRef} from 'react'
import {BsCart3, BsShopWindow, BsHouseDoor, BsBoxArrowRight} from 'react-icons/bs'
import './navBar.css'

function NavBar(){
    function logout (){
        // client.clearStore();
        Auth({type: 'LOGOUT'})
    }
    const style = {
        fontSize: "20px",
        color: "white",
        fontWeight: "bolder"
    }
    const home = useRef('')
    const store = useRef('')
    const cart = useRef('')
    const user = useRef('')
    return(
        <nav>
            <NavLink ref={home} to="/">
                {/* <i className='fas fa-home'></i> */}
                <BsHouseDoor style={style} />
            </NavLink>
            <NavLink to="/products/all" ref={store}>
                {/* <i className='fas fa-store'></i> */}
                <BsShopWindow style={style}/>
            </NavLink>
            <NavLink to="/cart" ref={cart}>
                {/* <i className='fas fa-cart-arrow-down'></i> */}
                <BsCart3 style={style}/>
            </NavLink>
            <NavLink to="/" ref={user}> 
                {/* <i className="fas fa-sign-out-alt" onClick={ logout }></i> */}
                <BsBoxArrowRight onClick={ logout } style={style}/>
            </NavLink>
        </nav>
    )
}

export default NavBar

// className={`${home.current.getAttribute() !== 'active' ? 'far': 'fas'} fa-home`}