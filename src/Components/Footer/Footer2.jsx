import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import logo from '../../assets/WhatsApp Image 2025-05-19 at 04.07.44_a63162ba.jpg'
const Footer2 = () => {
    const product = <>
        <div className="">
            <li><a href="">Ullo Mart Mail</a></li>
            <li><a href="">Ullo Mart Calender</a></li>
        </div>

    </>
    const Company = <>
        <div>
            <li><a href="">About</a></li>
            <li><a href="">Team</a></li>
            <li><a href="">Shop</a></li>
            <li><a href="">Contact Us</a></li>
        </div>


    </>
    const Contact = <>
        <div>
            <li><a href="">Blog</a></li>
            <li><a href="">Help and Support</a></li>
            <li><a href="">Press and Media</a></li>
            <li><a href="">About Us</a></li>
        </div>


    </>
    return (
        <footer className="p-5  bg-purple-50  shadow-sm">
            <div className="container mx-auto grid gap-6 py-6 md:gap-12 md:py-12">
                <div className="flex justify-items-center">
                    <div className=' gap-40 w-3/10'>


                        <div className="mb-5 md:flex md:justify-center ">
                            <img className="rounded-full flex md:h-20 md:w-20 relative left-30 md:left-0" src={logo} alt="" />

                        </div>
                        <ul className="text-4xl flex transform-3d gap-6 md:justify-center ">
                            <li><a target="-blank" href="https://www.facebook.com/profile.php?id=61575997992841"><FaFacebookSquare /></a></li>
                            <li><a target="-blank" href=""><IoLogoInstagram /></a></li>
                            <li><a target="-blank" href=""><FaGithub /></a></li>
                            <li><a target="-blank" href=""><CgWebsite /></a></li>

                        </ul>

                    </div>

                    <div className="grid grid-cols-3 justify-items-center w-7/10">
                        <div className=" mt-5 invisible h-0 md:h-full md:visible">
                            <h1 className=" text-purple-600 font-bold text-2xl">Company</h1>
                            <ul className="grid text-2xl">
                                {Company}
                            </ul>
                        </div>

                        <div className=" mt-5 md:h-full h-0 invisible md:visible ">
                            <h1 className=" text-2xl text-purple-600 font-bold">Product</h1>
                            <ul className="grid text-2xl">
                                {product}
                            </ul>
                        </div>
                        <div className=" mt-5 md:h-full h-0 invisible md:visible ">
                            <h1 className=" text-2xl text-purple-600 font-bold">Contact</h1>
                            <ul className="grid text-2xl">
                                {Contact}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className=" grid gap-5 mt-5 ">
                    <div className="collapse collapse-plus md:hidden ">
                        <input type="checkbox" />
                        <div className="collapse-title text-2xl text-purple-600  font-semibold">Contact</div>
                        <div className="collapse-content text-sm">
                            <ul className="text-xl">
                                {Contact}
                            </ul>
                        </div>
                    </div>

                     <div className="collapse collapse-plus md:hidden ">
                        <input type="checkbox" />
                        <div className="collapse-title text-2xl text-purple-600  font-semibold">Company</div>
                        <div className="collapse-content text-sm">
                            <ul className="text-xl">
                                {Company}
                            </ul>
                        </div>
                    </div>

                      <div className="collapse  collapse-plus md:hidden ">
                        <input type="checkbox" />
                        <div className="collapse-title text-purple-600 text-2xl font-semibold">Product</div>
                        <div className="collapse-content text-sm">
                            <ul className="text-xl">
                                {product}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex-1 border-b  p-2"></div>
                <div className="text-center ">
                    <aside>
                        <small> <p>Copyright © {new Date().getFullYear()} - All right reserved by Ullo Mart</p></small>
                    </aside>
                </div>
            </div>
        </footer>
    );
};

export default Footer2;