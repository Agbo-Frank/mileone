import './menu.css'
import images from "../../assets/images/images";
import { Link, NavLink } from "react-router-dom";

const menuArr = [
    {
        text: "Cakes",
        img: images.snacks
    },
    {
        text: "Ice Cream",
        img:  images.icecream
    },
    {
        text: "Snacks",
        img: images.snacks
    },
    {
        text: "Dishes",
        img: images.dishes
    },
    {
        text: "Local Dishes",
        img: images.dishes
    },
    {
        text: "Drinks",
        img: images.drinks
    },
    {
        text: "Intercontinental",
        img: images.intercontinental
    }
]

function MenuItem({img, text, handleClick}){
    return(
        <li onClick={handleClick}>
            <img src={img} alt={text} />
            <NavLink to={`category/${text}`}>{text}</NavLink>
        </li>
    )
}

function Menu({handleClick}){
    return(
        <ul className="menu">
            {
                menuArr.map(({text, img}) => (
                    <MenuItem img={img} text={text} key={text} handleClick={handleClick}/>
                ))
            }
        </ul>
    )
}

export default Menu