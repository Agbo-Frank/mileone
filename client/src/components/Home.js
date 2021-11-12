import burgerking from "../img/Burger King.png"
import bg from "../img/Vector.png"
import burger from "../img/burger1 1.png"
import fastdelivery from "../img/clip-937 1.png"
import delivery from "../img/clip-delivery-in-time-satisfied-customer 1.png"
import order from "../img/clip-order-completed-3 1.png"
import waiting from "../img/clip-waiting-1 1 (1).png"
import userImage from "../img/image 1 (1).png"
import salad from "../img/Green Salad.png"
import hamburger from "../img/Hamburger.png"
import doughnut from "../img/Doughnut.png"
import pizza from "../img/Pizza.png"
import soda from "../img/Soda.png"
import refreshment from "../img/Refreshments.png"
import taco from "../img/Taco.png"
import { FaRegUser } from 'react-icons/fa';
import { Footer } from "./Footer"

function Header(){
    return(
        <header className="flex w-full justify-between items-center">
            <img className="w-24 h-24 object-contain" src={burgerking} alt="burger King"/>
            <ul className="flex justify-around gap-2">
                <li className="px-5 py-1 rounded-full hover:bg-white-300 text-lg"><a href="home" className="block w-full">Home</a></li>
                <li className="px-5 py-1 rounded-full hover:bg-white-300 text-lg"><a href="menu" className="block w-full">Menu</a></li>
                <li className="px-5 py-1 rounded-full hover:bg-white-300 text-lg"><a href="reservation" className="block w-full">Reservation</a></li>
                <li className="px-5 py-1 rounded-full hover:bg-white-300 text-lg"><a href="about" className="block w-full">About</a></li>
                <li className="px-5 py-1 rounded-full hover:bg-white-300 text-lg"><a href="contact" className="block w-full">Contact</a></li>
            </ul>
            <div className="flex gap-4">
                <div className="bg-red w-12 h-12 flex justify-center items-center rounded-2xl"><FaRegUser className="text-black"/></div>
                <div className="bg-blue w-12 h-12 flex justify-center items-center rounded-2xl"><FaRegUser className="text-black"/></div>
                <div className="bg-black-100 w-12 h-12 flex justify-center items-center rounded-2xl"><FaRegUser className="text-white-100"/></div>
            </div>
        </header>
    )
}

function Slide(){
    return(
        <div className="flex justify-between flex-row items-center">
            <div className="relative w-1/2">
                <h1 className="text-8xl font-extrabold capitalize">
                    Be the fastest in delivering your  <span className="text-red"> food </span> 
                </h1>
                <p className="text-2xl my-10">We cook and deliver the tastiest food right away to your designated location</p>
                <a href="start" className="bg-red rounded-full px-14 py-5 text-xl font-bold">Get Started</a>
            </div>
            <div className="relative w-xl h-xl">
                <img src={bg} alt="background" className="z-0 absolute top-0 left-0 w-full h-full object-contain" />
                <img src={burger} alt="burger" className="z-20 relative w-full h-full object-contain"/>
            </div>
        </div>
    )
}

function Features({img, header, text}){
    return(
        <div className="w-80">
            <img src={img} alt={img} className="w-full object-contain"/>
            <div>
                <h1 className="font-extrabold text-4xl text-center capitalize my-3">{header}</h1>
                <p className="text-lg text-center">{text}</p>
            </div>
        </div>
    )
}

function MenuItem({img, item}){
    return(
        <div className="group flex p-3.5 h-16 w-16 overflow-hidden hover:overflow-x-visible bg-blue rounded-full ring ring-blue ring-opacity-30 gap-3 items-center">
            <img src={img} alt="item" className="w-10 h-10 rounded-full flex-shrink-0 bg-white-300 p-1" />
            <p className="text-white-100 font-medium hidden group-hover:block">{item}</p>
        </div>
    )
}
function MenuList(){
    return(
        <div className="flex flex-col space-y-7">
            <MenuItem img={refreshment} item="All Dishes"/>
            <MenuItem img={salad} item="salad"/>
            <MenuItem img={pizza} item="pizza"/>
            <MenuItem img={taco} item="Taco"/>
            <MenuItem img={hamburger} item="Hamburger"/>
            <MenuItem img={doughnut} item="Doughnut"/>
            <MenuItem img={soda} item="Soda"/>
        </div>
    )
}

function Home(){
    return(
        <div className="bg-white-200 bg-origin-border pt-5 px-14">
            <Header />
            <div className="py-12 w-full">
                <Slide/>
            </div>
            <div className="my-6">
                <div className="w-96 mx-auto my-20 text-center">
                    <p className="text-lg text-red">What we serve</p>
                    <h1 className="text-5xl font-extrabold">your favourite food delivery partner</h1>
                </div>
                <div className="grid responsive-grid1 w-full justify-between gap-2 md:gap-5">
                    <Features img={order} header="Easy to order" text="You only need a few steps inordering food"/>
                    <Features img={fastdelivery} header="fastest delivery" text="Delivery that is always ontimeeven faster"/>
                    <Features img={delivery} header="Best quality" text="Not only fast for us quality is also one"/>
                </div>
            </div>
            <div>
                <MenuList/>
            </div>
            <div className="h-screen flex items-center gap-2 md:gap-x-20 justify-between">
                <img src={waiting} alt="waiting" className="h-lg w-xl object-contain"/>
                <div className="h-lg w-2/5">
                    <p className="text-red uppercase">what they say</p>
                    <h1 className="text-5xl font-extrabold capitalize my-10">what our customersay about us</h1>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo adipisci, exercitationem illum tempore officia 
                            sapiente veniam hic quisquam ad nobis ut, ipsam praesentium? Placeat, vero cum.
                        </p>
                        <div className="flex gap-2 my-5">
                            <div className="w-20 h-20 object-contain rounded-full">
                                <img src={userImage} alt="user" />
                            </div>
                            <div className="flex flex-col">
                                <h2 className="text-2xl font-medium">alex Stanton</h2>
                                <p className="text-lg text-black-200">customer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home