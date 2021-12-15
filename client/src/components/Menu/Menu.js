import './menu.css'
import image from "../../assets/images/diamond.png"

function MenuItem({img, text}){
    return(
        <div className="menuItem">
            <div>
                <img scr={img} alt="soda"/>
            </div>
            <p>{text}</p>
        </div>
    )
}

function Menu(){
    return(
        <div className="menu">
            <MenuItem img={image} text="restaurnat"/>
        </div>
    )
}

export default Menu