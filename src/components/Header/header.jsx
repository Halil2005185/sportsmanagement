import { Link } from "react-router-dom"
import usa from "/images/usa.webp"
import chinese from "/images/chinese.webp"
import france from "/images/france.webp"
import germany from "/images/germany.webp"
import italian from "/images/italian.webp"
import korean from "/images/korean.webp"
import portuguese from "/images/portuguese.webp"
import saudiArabia from "/images/saudi-arabia.webp"
import spanish from "/images/spanish.webp"
import turkey from "/images/turkey.webp"
import japan from "/images/japan.webp"
import Logo from "/images/logoIcon.png"
import { FaAngleDown } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";


import { useEffect, useRef, useState } from "react"
function Header() {
    const [showLanguage, setShowLanguage] = useState(false)
    const [handleLanguage, setHandleLanguage] = useState(2)
    const [openMenu, setOpenMenu] = useState(false)
    const langMenuRef = useRef()

    const Navber = [
        { id: 1, label: "Home", path: "/" },
        { id: 2, label: "Services", path: "/services" },
        { id: 3, label: "Partners", path: "/partners" },
        { id: 4, label: "News and reviews", path: "/News-and-reviews" },
        { id: 5, label: "Pricing", path: "/pricing" },
        { id: 6, label: "About us", path: "/about-us" },
        { id: 7, label: "Contact us", path: "/contact-us" },
    ]
    const Languages = [
        { id: 1, label: "Turkish", image: turkey },
        { id: 2, label: "English", image: usa },
        { id: 3, label: "Arabic", image: saudiArabia },
        { id: 4, label: "Spanish", image: spanish },
        { id: 5, label: "France", image: france },
        { id: 6, label: "Portuguese", image: portuguese },
        { id: 7, label: "Germany", image: germany },
        { id: 8, label: "Italian", image: italian },
        { id: 9, label: "Japanece", image: japan },
        { id: 10, label: "Korean", image: korean },
        { id: 11, label: "Chinese", image: chinese },
    ]

    useEffect(() => {
        const handler = (e) => {
            if (langMenuRef.current && !langMenuRef.current.contains(e.target)) {
                setShowLanguage(false)
            }
        }

        document.addEventListener("mousedown", handler)
        return () => document.removeEventListener("mousedown", handler)
    }, [])
    function Handeler(id) {
        setHandleLanguage(id)
        setShowLanguage(false)
    }

    return <section className=" bg-[#1C1C1C] w-screen h-[83px] flex items-center ">
        {/* Min-width : 1024px */}
        <header className="hidden lg:flex items-center justify-between w-full xl:w-[85%] h-full mx-auto px-4">
            <div className="relative bg-[#D2FF00] w-[56px] h-[60px] rounded-[4px] ">
                <p className="absolute size-4 bg-[#1C1C1C] top-[88%] rotate-[45deg] right-[-8px]"></p>
            </div>
            <nav className="flex items-center gap-5">
                {Navber.map((nav) => (<Link key={nav.id} to={nav.path} className="text-white font-['Chakra_Petch']">{nav.label}</Link>))}
            </nav>
            <div className="flex items-center gap-3">
                <div ref={langMenuRef} className="relative  flex items-center gap-2">
                    <div onClick={() => setShowLanguage(prev => !prev)} className="flex items-center gap-2">
                        <div className=" cursor-pointer flex items-center gap-2">
                            {Languages.filter((lang) => lang.id == handleLanguage).map((lang) => (
                                <div className="flex items-center gap-2" key={lang.id}>
                                    <img className="w-[20px]" src={lang.image} alt="use" />
                                    <p className="text-white font-bold font-['Chakra_Petch'] ">{lang.label}</p>
                                </div>
                            ))}
                        </div>
                        <FaAngleDown className={`${showLanguage ? "rotate-[180deg]" : ""} transition-all duration-150 text-[#D2FF00] cursor-pointer `} />
                    </div>
                    <div className={`${showLanguage ? "block" : "hidden"} absolute top-[55px] left-[-5px] bg-[#1C1C1C] w-[160px] flex flex-col gap-2 rounded-[8px] shadow-[2px_3px_25px_0px_#D2FF000D]`}>
                        {Languages.map((language) => (
                            <div key={language.id} onClick={() => Handeler(language.id)} className="cursor-pointer flex items-center gap-2 px-4 py-2 ">
                                <img className="w-[21px]" src={language.image} alt="use" />
                                <p className="text-white font-bold font-['Chakra_Petch'] ">{language.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-[133px] h-[48px] bg-[#D2FF00] rounded-[8px] py-[18px] px-6 shadow-[0px_8px_16px_0px_#C3FF1A29] ">
                    <p className="cursor-pointer font-bold leading-[100%] font-['Chakra_Petch']">Contact Us</p>
                </div>
            </div>

        </header>

        <header className="relative flex lg:hidden items-center justify-between w-full xl:w-[85%] h-full mx-auto px-4 border-b-[1px] border-[#D5D7DA]">
            <div className="flex items-center justify-between w-full ">
                <img className=" size-20 sm:w-[100px]" src={Logo} alt="Logo" />
                {
                    openMenu ? <IoClose onClick={() => setOpenMenu(false)} className="text-[#D2FF00] sm:text-5xl cursor-pointer text-[30px]" /> : <IoMenu onClick={() => setOpenMenu(true)} className="text-[#D2FF00] sm:text-5xl text-[30px] cursor-pointer" />
                }
            </div>
            <div className="absolute left-0 top-full w-screen bg-[#1C1C1C] px-4 pb-4 transition-all duration-150" style={{
                clipPath: openMenu
                    ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
                    : "polygon(0 0, 100% 0, 100% 0, 0 0)"
            }}>
                <div className="flex flex-col gap-9 py-2 ">
                    {Navber.map((nav) => (<Link to={nav.path} key={nav.id} onClick={() => setOpenMenu(false)} className="font-bold text-white font-['Chakra_Petch'] " >{nav.label}</Link>))}
                </div>
                <div onClick={() => setShowLanguage(prev => !prev)} className="flex items-center gap-2 mt-4 justify-between">
                    <p className="font-bold text-white font-['Chakra_Petch']  ">Language</p>

                    <div className="flex items-center gap-2">
                        <div className=" cursor-pointer flex items-center gap-2">
                            {Languages.filter((lang) => lang.id == handleLanguage).map((lang) => (
                                <div className="flex items-center gap-2" key={lang.id}>
                                    <img className="w-[20px]" src={lang.image} alt="use" />
                                    <p className="text-white font-bold font-['Chakra_Petch'] ">{lang.label}</p>
                                </div>
                            ))}
                        </div>
                        <FaAngleDown className={`${showLanguage ? "rotate-[180deg]" : ""} transition-all duration-150 text-[#D2FF00] cursor-pointer `} />
                    </div>
                </div>
                <div className="w-full text-center mt-4 h-[48px] bg-[#D2FF00] rounded-[8px] py-[18px] px-6 shadow-[0px_8px_16px_0px_#C3FF1A29] ">
                    <p className="cursor-pointer font-bold leading-[100%] font-['Chakra_Petch']">Contact Us</p>
                </div>
            </div>

        </header>
    </section >
}
export default Header