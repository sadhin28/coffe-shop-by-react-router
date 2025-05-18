import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";


const Footer2 = () => {
    const product = <>
        <li><a href="">Ullo Mart Mail</a></li>
        <li><a href="">Ullo Mart Calender</a></li>

    </>
    const Company = <>
        <li><a href="">About</a></li>
        <li><a href="">Features</a></li>
        <li><a href="">Our Team</a></li>
        <li><a href="">Contact Us</a></li>
        <li><a href="">Home</a></li>

    </>
    return (
        <footer className="bg-purple-50 p-5">
            <div className="container grid gap-6 py-6 md:gap-12 md:py-12">
                <div className="">
                    <div className='text-purple-800 gap-40 w-3/5'>

                        <h1 className=' text-4xl md:text-5xl  font-bold '>Ullo Mart</h1>
                        <ul className="mt-5 flex text-4xl  md:text-5xl  flex-wrap gap-10">
                            <li><a target="-blank" href="https://www.facebook.com/profile.php?id=61575997992841"><FaFacebookSquare /></a></li>
                            <li><a target="-blank" href=""><IoLogoInstagram /></a></li>
                            <li><a target="-blank" href=""><FaGithub /></a></li>
                            <li><a target="-blank" href=""><CgWebsite /></a></li>

                        </ul>

                    </div>
                    
                     <div className="text-purple-800 mt-5 ">
                         <h1 className="font-black text-2xl">Product</h1>
                          <ul className="grid text-2xl">
                             {product}
                          </ul>
                     </div>
                    <div className="text-purple-800 mt-5 ">
                        <div className="collapse collapse-plus text-2xl md:hidden ">
                            <input type="radio" name="my-accordion-3" defaultChecked />
                            <div className="collapse-title font-semibold">Product</div>
                            <div className="collapse-content text-sm collapse-minus">
                                <ul className="grid gap-5 text-2xl">
                                    {product}

                                </ul>
                            </div>
                        </div>
                        <div className="collapse collapse-plus md:hidden text-2xl ">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title font-semibold">Company</div>
                            <div className="collapse-content text-sm">
                                <ul className="grid gap-5 text-2xl">
                                    {Company}
                                </ul>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer2;