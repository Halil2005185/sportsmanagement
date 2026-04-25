import { Link } from "react-router-dom";
import Logo from "/images/mainLogo.svg";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { FaViber } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaVk } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


function Footer() {
    const Navber = [
        { id: 1, label: "Home", path: "/" },
        { id: 2, label: "Services", path: "/services" },
        { id: 4, label: "News and reviews", path: "/News-and-reviews" },
        { id: 6, label: "Article", path: "/article" },
        { id: 7, label: "Contact us", path: "/contact-us" },
    ]
    const Contacts = [
        { id: 1, icon: <FaWhatsapp />, number: "055 991 3254" },
        { id: 2, icon: <FaViber />, number: "055 991 3254" },
        { id: 3, icon: <FaPhone />, number: "055 991 3254" },
        { id: 4, icon: <CiMail />, number: "055 991 3254" },
    ]

    const Icons = [
        { id: 1, icon: <FaLinkedin /> },
        { id: 2, icon: <FaSquareThreads /> },
        { id: 3, icon: <FaFacebook /> },
        { id: 4, icon: <FaVk /> },
        { id: 4, icon: <FaTiktok /> },
        { id: 4, icon: <FaInstagram /> },
        { id: 4, icon: <FaSnapchatGhost /> },
        { id: 4, icon: <FaXTwitter /> },
    ]


    return <section className="bg-[#1C1C1C] w-screen">
        <footer className=" flex flex-col gap-4 px-[96px] py-[64px] " >
            <div className="flex justify-around items-center gap-2 " >
                <div className="w-[20%] flex flex-col gap-3" >
                    <img className="w-[105px]" src={Logo} alt="logo" />
                    <p className="font-['Chakra_Petch'] leading-[100%] text-[20px] text-white" >OA Sports is a multifaceted sports consulting and management company
                        together multidisciplinary expertise under one roof.</p>
                </div>
                <div className="flex justify-between w-[50%] items-center">
                    <div className="flex flex-col gap-3">
                        <p className=" text-[#D2FF00] text-[20px] leading-[100%] font-bold  ">Fast Links</p>
                        <div className="flex flex-col gap-2" >
                            {Navber.map((nav) => (
                                <Link key={nav.id} to={nav.path} className="text-white font-['Chakra_Petch'] text-[20px] leading-[100%] " >{nav.label}</Link>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 mb-3">
                        <p className=" text-[#D2FF00] text-[20px] leading-[100%] font-bold  ">Contact Us</p>
                        <div className="flex flex-col gap-3" >
                            {Contacts.map((contact) => (
                                <div className="flex gap-2 items-centers">
                                    <p className="text-white text-[20px] ">{contact.icon}</p>
                                    <p className="text-white text-[20px] font-['Chakra_Petch'] leading-[100%]  ">{contact.number}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 self-start mt-1 ">
                        <p className=" text-[#D2FF00] text-[20px] leading-[100%] font-bold  ">Contact Us</p>
                        <div className="flex gap-2 w-[120px] flex-wrap ">
                            {Icons.map((icon) => (
                                <p className="text-white text-[21px] " >{icon.icon}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[85%] border-[#D2FF00] border-t-[1px] py-4 px-1 mx-auto flex items-center justify-between">
                <p className="text-white font-['Chakra_Petch'] text-[20px] leading-[100%] " >AO Sports OAll Rights Reserved 2025</p>
                <div className="text-white flex items-center gap-2 font-['Chakra_Petch'] text-[20px] leading-[100%] ">
                    <p>Privacy Policy</p>
                    <p>Terms</p>
                </div>
            </div>
        </footer>
    </section>
}
export default Footer