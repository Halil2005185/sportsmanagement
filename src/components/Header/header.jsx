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
import { useLocation } from "react-router-dom"
import { motion } from "framer-motion"

import { useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import i18n from "../../i18n.js"
function Header() {
    const { t } = useTranslation()
    const [showLanguage, setShowLanguage] = useState(false)
    const [handleLanguage, setHandleLanguage] = useState(2)
    const [openMenu, setOpenMenu] = useState(false)
    const langMenuRef = useRef()
    const { pathname } = useLocation()
    const Navber = [
        { id: 1, label: "header.navbar.home", path: "/" },
        { id: 2, label: "header.navbar.services", path: "/services" },
        { id: 3, label: "header.navbar.partners", path: "/partners" },
        { id: 4, label: "header.navbar.news", path: "/News-and-reviews" },
        { id: 5, label: "header.navbar.pricing", path: "/pricing" },
        { id: 6, label: "header.navbar.about", path: "/about-us" },
        { id: 7, label: "header.navbar.contact", path: "/contact-us" },
    ];
    const Languages = [
        { id: 1, label: "Turkish", image: turkey, code: "tr" },
        { id: 2, label: "English", image: usa, code: "en" },
        { id: 3, label: "Arabic", image: saudiArabia, code: "ar" },
        { id: 4, label: "Spanish", image: spanish, code: "es" },
        { id: 5, label: "French", image: france, code: "fr" },
        { id: 6, label: "Portuguese", image: portuguese, code: "pt" },
        { id: 7, label: "German", image: germany, code: "de" },
        { id: 8, label: "Italian", image: italian, code: "it" },
        { id: 9, label: "Japanese", image: japan, code: "ja" },
        { id: 10, label: "Korean", image: korean, code: "ko" },
        { id: 11, label: "Chinese", image: chinese, code: "zh" },
    ];
    useEffect(() => {
        const handler = (e) => {
            if (langMenuRef.current && !langMenuRef.current.contains(e.target)) {
                setShowLanguage(false)
            }
        }

        document.addEventListener("mousedown", handler)
        return () => document.removeEventListener("mousedown", handler)
    }, [])
    function Handeler(id, code) {
        setHandleLanguage(id)
        setShowLanguage(false)
        i18n.changeLanguage(code)
    }

    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.15
            }
        }
    };
    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0 }
    };
    const menuContainer = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    };
    const navContainer = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.08,
            },
        },
    };
    const Mobileitem = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };
    const LanguageItem = {
        hidden: { opacity: 0, y: -10 },
        show: { opacity: 1, y: 0 }
    };
    const buttonItem = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.5
            }
        }
    };
    const LangItem = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.6
            }
        }
    };


    return <section className=" bg-[#1C1C1C] w-screen h-[83px] flex items-center ">
        {/* Min-width : 1024px */}
        <motion.header className="hidden lg:flex items-center justify-between w-full xl:w-[85%] h-full mx-auto px-4">
            <div className="relative bg-[#D2FF00] w-[56px] h-[60px] rounded-[4px] ">
                <p className="absolute size-4 bg-[#1C1C1C] top-[88%] rotate-[45deg] right-[-8px]"></p>
            </div>
            <motion.nav className="flex items-center gap-5"
                variants={container}
                initial="hidden"
                animate="show">
                {Navber.map((nav) => (
                    <motion.div key={nav.id} variants={item}>
                        <Link
                            to={nav.path}
                            className={`${nav.path == pathname ? "text-[#D2FF00]" : "text-white" 
                                } font-['Chakra_Petch'] text-[14px] xl:text-[15px] 2xl:text-[16px] `}
                        >
                            {t(nav.label)}
                        </Link>
                    </motion.div>
                ))}            </motion.nav>
            <div className="flex items-center gap-3">
                <div ref={langMenuRef} className="relative z-50 flex items-center gap-2">
                    <motion.div
                        onClick={() => setShowLanguage(prev => !prev)}
                        className="flex items-center gap-2 cursor-pointer">

                        <div className="flex items-center gap-2">

                            {Languages.filter((lang) => lang.id == handleLanguage).map((lang) => (
                                <div className="flex items-center gap-2" key={lang.id}>
                                    <img className="w-[20px]" src={lang.image} alt="" />
                                    <p className="text-white font-bold font-['Chakra_Petch']">{lang.label}</p>
                                </div>
                            ))}

                        </div>

                        <FaAngleDown
                            className={`${showLanguage ? "rotate-180" : ""} transition-all duration-150 text-[#D2FF00]`} />
                    </motion.div>
                    {showLanguage && (
                        <motion.div
                            variants={container}
                            initial="hidden"
                            animate="show"
                            className="absolute top-[55px] left-[-5px] bg-[#1C1C1C] w-[160px] flex flex-col gap-2 rounded-[8px] shadow-[2px_3px_25px_0px_#D2FF000D]"
                        >
                            {Languages.map((language) => (
                                <motion.div
                                    key={language.id}
                                    variants={LanguageItem}
                                    onClick={() => Handeler(language.id, language.code)}
                                    className="cursor-pointer flex items-center gap-2 px-4 py-2"
                                >
                                    <img className="w-[21px]" src={language.image} alt="" />
                                    <p className="text-white font-bold font-['Chakra_Petch']">
                                        {language.label}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}

                </div>
                <Link to="/contact-us" className="w-[133px] cursor-pointer h-[48px] bg-[#D2FF00] rounded-[8px] py-[18px] px-6 shadow-[0px_8px_16px_0px_#C3FF1A29] ">
                    <p className=" font-bold leading-[100%] font-['Chakra_Petch']">{t("header.navbar.contact")}</p>
                </Link>
            </div>
        </motion.header>

        <header className="relative flex lg:hidden items-center justify-between w-full xl:w-[85%] h-full mx-auto px-4 border-b-[1px] border-[#D5D7DA]">
            <div className="flex items-center justify-between w-full ">
                <img className=" size-20 sm:w-[100px]" src={Logo} alt="Logo" />
                {
                    openMenu ? <IoClose onClick={() => setOpenMenu(false)} className="text-[#D2FF00] sm:text-5xl cursor-pointer text-[30px]" /> : <IoMenu onClick={() => setOpenMenu(true)} className="text-[#D2FF00] sm:text-5xl text-[30px] cursor-pointer" />
                }
            </div>
            <motion.div
                variants={menuContainer}
                initial="hidden"
                animate={openMenu ? "show" : "hidden"}
                className={`${openMenu ? "h-[525px]" : "h-  0 hidden"} absolute z-50 left-0 top-full w-screen bg-[#1C1C1C] px-4 pb-4 transition-all duration-150`}>
                {/* nav group */}
                <motion.div
                    variants={navContainer}
                    className="flex flex-col gap-9 py-2 "
                >
                    {Navber.map((nav) => (
                        <motion.div key={nav.id} variants={Mobileitem}>
                            <Link
                                to={nav.path}
                                onClick={() => setOpenMenu(false)}
                                className="font-bold text-white font-['Chakra_Petch']"
                            >
                                {t(nav.label)}
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
                {/* language row */}
                <motion.div
                    variants={buttonItem}
                    onClick={() => setShowLanguage(prev => !prev)}
                    className=" flex items-center gap-2 mt-4 justify-between">
                    <p className="font-bold text-white font-['Chakra_Petch']">{t("header.navbar.language")}</p>
                    <div className="flex items-center gap-2">
                        {Languages.filter((lang) => lang.id == handleLanguage).map((lang) => (
                            <div className="flex items-center gap-2" key={lang.id}>
                                <img className="w-[20px]" src={lang.image} alt="use" />
                                <p className="text-white font-bold font-['Chakra_Petch']">
                                    {lang.label}
                                </p>
                            </div>
                        ))}
                        <FaAngleDown
                            className={`${showLanguage ? "rotate-[180deg]" : ""} transition-all duration-150 text-[#D2FF00] cursor-pointer`}
                        />
                    </div>
                </motion.div>
                {/* button */}
                <motion.div
                    variants={LangItem}
                    className="w-full text-center mt-4 h-[48px] bg-[#D2FF00] rounded-[8px] py-[18px] px-6 shadow-[0px_8px_16px_0px_#C3FF1A29]"
                >
                    <p className="cursor-pointer font-bold leading-[100%] font-['Chakra_Petch']">
                        {t("header.navbar.contact")}
                    </p>
                </motion.div>
            </motion.div>

        </header>
    </section >
}
export default Header