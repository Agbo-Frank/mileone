import burgerking from "../img/Burger King.png"
import { FaFacebook, FaInstagramSquare, FaTwitter, FaRegPaperPlane } from 'react-icons/fa';
import facebook from "../img/Facebook.png"
import instagram from "../img/Instagram.png"
import twitter from "../img/Twitter Circled.png"

function Footer(){
    return(
        <footer>
            <div>
                <img src={burgerking} alt="logo" />
                <p className="my-7">
                    We cook and deliver the tastiest food right away to your designated location
                </p>
                <ul className="flex gap-3">
                    <li><a href="instagram" className="hover:scale-105"><FaInstagramSquare className="text-5xl text-black"/></a></li>
                    <li><a href="facebook" className="hover:scale-105"><FaFacebook className="text-5xl text-black"/></a></li>
                    <li><a href="twitter" className="hover:scale-105"><FaTwitter className="text-5xl text-black"/></a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <h1>About</h1>
                    <li><a href="instagram">About Us</a></li>
                    <li><a href="instagram">Features</a></li>
                    <li><a href="instagram">News</a></li>
                    <li><a href="instagram">Menu</a></li>
                </ul>
                <ul>
                    <h1>Company</h1>
                    <li><a href="instagram">Why burger King</a></li>
                    <li><a href="instagram">partner with us</a></li>
                    <li><a href="instagram">FAQ</a></li>
                    <li><a href="instagram">blog</a></li>
                </ul>
                <ul>
                    <h1 >Support</h1>
                    <li><a href="instagram">Account</a></li>
                    <li><a href="instagram">support center</a></li>
                    <li><a href="instagram">feedback</a></li>
                    <li><a href="instagram">contact us</a></li>
                </ul>
                <ul>
                    <h1>Support</h1>
                    <li><a href="instagram">question or feedback?</a></li>
                    <li><a href="instagram">we’d love to hear from you</a></li>
                    <div className="flex justify-between items-center border border-black-200 rounded-full w-full px-10 py-4">
                        <input type="email" placeholder="email address" className="bg-white-200 w-full"/>
                        <FaRegPaperPlane className="text-red"  />
                    </div>
                </ul>
            </div>
        </footer>
    )
}

function Footer2(){
    return(
        <footer className="bg-black-300 flex flex-col gap-4 text-white-100">
            <div className="grid grid-cols-4">
                <img src={burgerking} alt="logo" />
                <div className="col-span-2">
                    <h1 className="text-lg leading-relaxed">New to Mileone? </h1>
                    <p>Subscribe to our newsletter to get updates on our latest offers!</p>
                    <input type="email" className="w-80 rounded-full px-8 py-2 border-none outline-none border-t"/>
                </div>
                <div>
                    <div className="flex">
                        <img src={burgerking} alt="logo" />
                        <div>
                            <h1 className="text-lg leading-relaxed">Download the free MIleone App</h1>
                            <p>Get access to exclusive offers!</p>
                        </div>
                    </div>
                    <div className="flex justify-between w-full gap-2">
                        <a href="apple" className="bg-white-300 text-black-100 px-10 py-1 rounded-full">Apple</a>
                        <a href="google" className="bg-white-300 text-black-100 px-10 py-1 rounded-full">Google</a>
                    </div>
                </div>
            </div>
            <div className="flex justify-start gap-3 w-full">
                <ul>
                    <h1 className="text-yellow text-lg mb-9">Become a Friend</h1>
                    <li><a href="help">Help Center</a></li>
                    <li><a href="help">Help Center</a></li>
                    <li><a href="help">Help Center</a></li>
                </ul>
                <ul>
                    <h1 className="text-yellow text-lg mb-9">About Mileone</h1>
                    <li><a href="help">About Us</a></li>
                    <li><a href="help">About Us</a></li>
                    <li><a href="help">About Us</a></li>
                </ul>
                <ul>
                    <h1 className="text-yellow text-lg mb-9">Make Money With Mileone</h1>
                    <li><a href="help">Sell on Mileone</a></li>
                    <li><a href="help">Become a Logistics Service Partner</a></li>
                    <li><a href="help">Help Center</a></li>
                </ul>
            </div>
            <div className="flex gap-4 my-5">
                <a href="facebook"><img src={facebook} alt="facebook" className="w-9 h-9 object-contain" /></a>
                <a href="instagram"><img src={instagram} alt="facebook" className="w-9 h-9 object-contain" /></a>
                <a href="facebook"><img src={twitter} alt="facebook" className="w-9 h-9 object-contain"/></a>
            </div>
        </footer>
    )
}

export { Footer, Footer2 }