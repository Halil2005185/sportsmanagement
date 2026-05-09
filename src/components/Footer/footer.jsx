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
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

function Footer() {
    const currentLang = i18n.language || localStorage.getItem("lang") || "en"
    const Navber = [
        { id: 1, label: "footer.navbar.home", path: `/${currentLang}` },
        { id: 2, label: "footer.navbar.services", path: `/${currentLang}/services` },
        { id: 4, label: "footer.navbar.news", path: `/${currentLang}/News-and-reviews` },
        { id: 6, label: "footer.navbar.article", path: `/${currentLang}/pricing` },
        { id: 7, label: "footer.navbar.contact", path: `/${currentLang}/contact-us` },
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
    const data = new Date()
    const { t } = useTranslation();

    return <section className="bg-[#1C1C1C] w-screen z-50">
        <footer className=" hidden lg:flex flex-col gap-4 px-[96px] py-[64px] " >
            <div className="flex justify-around items-center gap-2 " >
                <div className="w-[20%] flex flex-col gap-3" >
                    <img className="w-[105px]" src={Logo} alt="logo" />
                    <p className="font-['Chakra_Petch'] leading-[100%] text-[20px] text-white" >{t("footer.description")}</p>
                </div>
                <div className="flex justify-between w-[50%] items-center">
                    <div className="flex flex-col gap-3">
                        <p className=" text-[#D2FF00] text-[20px] leading-[100%] font-bold  ">{t("footer.fastLinks")}</p>
                        <div className="flex flex-col gap-2" >
                            {Navber.map((nav) => (
                                <Link key={nav.id} to={nav.path} className="text-white font-['Chakra_Petch'] text-[20px] leading-[100%] " >{t(nav.label)}</Link>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 mb-3">
                        <p className=" text-[#D2FF00] text-[20px] leading-[100%] font-bold  ">{t("footer.contactUs")}</p>
                        <div className="flex flex-col gap-3" >
                            {Contacts.map((contact) => (
                                <div key={contact.id} className="flex gap-2 items-centers">
                                    <p className="text-white text-[20px] ">{contact.icon}</p>
                                    <p className="text-white text-[20px] font-['Chakra_Petch'] leading-[100%] ">{contact.number}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 self-start mt-1 ">
                        <p className=" text-[#D2FF00] text-[20px] leading-[100%] font-bold  ">{t("footer.contactUs")}</p>
                        <div className="flex gap-2 w-[120px] flex-wrap ">
                            {Icons.map((icon, index) => (
                                <p key={index} className="text-white text-[21px] " >{icon.icon}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[85%] border-[#D2FF00] border-t-[1px] py-4     px-1 mx-auto flex items-center justify-between">
                <p className="text-white font-['Chakra_Petch'] text-[20px] leading-[100%] " >{t("footer.rights") + data.getFullYear()}</p>
                <div className="text-white flex items-center gap-2 font-['Chakra_Petch'] text-[20px] leading-[100%] ">
                    <p>{t("footer.privacyPolicy")}</p>
                    <p>{t("footer.terms")}</p>
                </div>
            </div>
        </footer>
        <footer className="lg:hidden flex flex-col gap-8 px-4 sm:px-[96px]  py-[64px] " >
            <div className="flex flex-col gap-3" >
                <img className="w-[105px]" src={Logo} alt="logo" />
                <p className="font-['Chakra_Petch'] leading-[100%] text-[20px] text-white" >{t("footer.description")}</p>
            </div>
            <div className="flex items-center justify-between ">
                <div className="flex flex-col gap-3">
                    <p className=" text-[#D2FF00] text-[20px] leading-[100%] font-bold  ">{t("footer.fastLinks")}</p>
                    <div className="flex flex-col gap-2" >
                        {Navber.map((nav) => (
                            <Link key={nav.id} to={nav.path} className="text-white font-['Chakra_Petch']  leading-[100%] " >{t(nav.label)}</Link>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-4 mb-3">
                    <p className=" text-[#D2FF00] text-[20px] leading-[100%] font-bold  ">{t("footer.contactUs")}</p>
                    <div className="flex flex-col gap-3" >
                        {Contacts.map((contact) => (
                            <div key={contact.id} className="flex gap-2 items-centers">
                                <p className="text-white ">{contact.icon}</p>
                                <p className="text-white font-['Chakra_Petch'] leading-[100%]  ">{contact.number}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-4 self-start mt-1 ">
                <p className=" text-[#D2FF00] text-[20px] leading-[100%] font-bold  ">{t("footer.contactUs")}</p>
                <div className="flex gap-2 flex-wrap ">
                    {Icons.map((icon, index) => (
                        <p key={index} className="text-white text-[21px] " >{icon.icon}</p>
                    ))}
                </div>
            </div>
            <div className="w-full border-[#D2FF00] border-t-[1px] py-4  px-1 mx-auto flex items-center justify-between">
                <p className="text-white font-['Chakra_Petch'] text-[12px] sm:text-[20px] leading-[100%] " >{t("footer.rights") + " " + data.getFullYear()}</p>
                <div className="text-white flex items-center gap-2 font-['Chakra_Petch'] text-[12px] sm:text-[20px] leading-[100%] ">
                    <p>{t("footer.privacyPolicy")}</p>
                    <p>{t("footer.terms")}</p>
                </div>
            </div>
        </footer>

    </section>
}
export default Footer