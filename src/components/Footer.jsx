import { FaFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";




function Footer() {
    return (
        <div className="bg-pink-950 px-[30px] py-[3%] mt-10 flex justify-between text-white items-center pl-[10px] gap-4">
            <div>
                <p className="text-[24px] text-white font-bold">VECTO</p>
            </div>
            <div className="">
                <h3 className="mb-[10px]  mt-[15px] text-sm">Useful Links</h3>
                <ul className="text-sm hover:underline">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/contact-us">Contact Us</a>
                    </li>
                    <li>
                        <a href="/about-us">About Us</a>
                    </li>
                    <li>
                        <a href="/privacy-policy">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="/terms-and-conditions">Terms and Conditions</a>
                    </li>
                </ul>
            </div>
            <div>
                <h3 className="mb-[10px] text-sm mr-4">Follow us on our socials</h3>
                <ul className="flex gap-[15px] text-xl justify-center">
                    <li><FaFacebook /></li>
                    <li><AiFillInstagram /></li>
                    <li><FaTiktok /></li>
                    <li><FaSquareXTwitter /></li>

                </ul>
            </div>
        </div>
    );
}

export default Footer;