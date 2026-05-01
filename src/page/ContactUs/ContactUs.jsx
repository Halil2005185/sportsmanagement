
import { useEffect, useState } from "react";
import footballMan from "/src/assets/footballMan.mp4";
import { FaAngleDown } from "react-icons/fa6";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";



function ContactUs() {

    const [countries, setCountries] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [selectdCountry, setSelectdCountry] = useState(0);
    const [selectdLanguage, setSelectdLanguage] = useState(0);
    const [showLanguage, setShowLanguage] = useState(false);
    const [showCountry, setShowCountry] = useState(false);
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all?fields=name,capital,currencies").then((res) => res.json()).then((data) => setCountries(data))
    }, [])
    console.log(languages);
    function handleCounty(e) {
        setShowCountry(false)
        setSelectdCountry(e)
    }
    function handleLanguage(e) {
        setShowLanguage(false)
        setSelectdLanguage(e)
    }
    console.log(languages);


    return <section className="bg-[#121212]">
        <div className="w-[98%] lg:w-[90%] mx-auto py-8">
            <h2 className="italic font-bold leading-[100%] py-8 font-['Platypi'] text-white text-[48px] pl-4"><span className="text-[#D2FF00]"> Contact  </span>us</h2>
            <div className="w-full flex flex-col items-center lg:flex-row  gap-8 justify-between  bg-[#1C1C1C] rounded-[40px] lg:h-fit py-2 px-4 lg:p-12 ">
                <form className="w-full">
                    <div className=" flex flex-col gap-6">
                        <div className="flex flex-col lg:flex-row gap-4">
                            <div className="flex flex-col gap-2 w-full lg:w-[50%]">
                                <label htmlFor="firstName" className="text-[#D5D7DA] font-['Platypi'] font-bold text-[26px] italic " >First Name</label>
                                <input type="text" id="firstName" className="bg-[#2B2B2B] border-[1px] border-[#2B2B2B] focus:border-[#D2FF00] text-white  outline-none rounded-[12px] py-[18px] px-4 " />
                            </div>
                            <div className="flex flex-col gap-2 w-full lg:w-[50%]">
                                <label htmlFor="lastName" className="text-[#D5D7DA] font-['Platypi'] font-bold text-[26px] italic " >Last Name</label>
                                <input type="text" id="lastName" className="bg-[#2B2B2B] border-[1px] border-[#2B2B2B] focus:border-[#D2FF00] text-white  outline-none rounded-[12px] py-[18px] px-4 " />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="Email" className="text-[#D5D7DA] font-['Platypi'] font-bold text-[26px] italic " >Email</label>
                            <input type="email" id="Email" placeholder="Ahmed@email.com" className="placeholder:text-[#535862] bg-[#2B2B2B] border-[1px] border-[#2B2B2B] focus:border-[#D2FF00] text-white  outline-none rounded-[12px] py-[18px] px-4 " />
                        </div>

                        <div className="relative flex flex-col gap-2">
                            <label className="text-[#D5D7DA] font-['Platypi'] font-bold text-[26px] italic " >Country</label>
                            {/* @TODO:Adding search part for Countries */}
                            <div onClick={() => setShowCountry(prev => !prev)} className="flex items-center justify-between placeholder:text-[#535862] bg-[#2B2B2B] border-[1px] border-[#2B2B2B] focus:border-[#D2FF00] text-white  outline-none rounded-[12px] py-[18px] px-4 " >
                                {
                                    countries.filter((country, index) => index === selectdCountry).map((country) => (
                                        <p key={country.cca3} className="text-[24px] font-['Chakra_Petch'] leading-[100%]">
                                            {country.name.common}
                                        </p>
                                    ))}
                                <FaAngleDown className={`${showCountry ? "rotate-180" : "rotate-0"} transition-all duration-150 text-[#D5D7DA] text-[25px]`} />
                            </div>
                            <div className={`${showCountry ? "h-[250px] overflow-y-auto py-[18px] border-[1px]" : "h-0"} z-50 overflow-hidden transition-all duration-150 absolute top-[110%] w-full flex flex-col gap-4 placeholder:text-[#535862] bg-[#2B2B2B] border-[#2B2B2B] focus:border-[#D2FF00] text-white  outline-none rounded-[12px] px-4 `} >
                                {countries.map((country, inedex) => (
                                    <p key={inedex} onClick={() => handleCounty(inedex)} className="text-[24px] font-['Chakra_Petch'] leading-[100%] cursor-pointer ">{country.name.common}</p>
                                ))}
                            </div>
                        </div>
                        {/* @TODO:Adding search part for Language and Adding API */}

                        <div className="relative flex flex-col gap-2">
                            <label className="text-[#D5D7DA] font-['Platypi'] font-bold text-[26px] italic">
                                Language
                            </label>

                            <div
                                onClick={() => setShowLanguage(prev => !prev)}
                                className="flex items-center justify-between placeholder:text-[#535862] bg-[#2B2B2B] border-[1px] border-[#2B2B2B] focus:border-[#D2FF00] text-white outline-none rounded-[12px] py-[18px] px-4"
                            >
                                <p className="text-[24px] font-['Chakra_Petch'] leading-[100%]">
                                    {languages?.[selectdLanguage]?.name?.common || "Select Language"}
                                </p>

                                <FaAngleDown
                                    className={`${showLanguage ? "rotate-180" : "rotate-0"} transition-all duration-150 text-[#D5D7DA] text-[25px]`}
                                />
                            </div>

                            <div
                                className={`${showLanguage ? "h-[250px] overflow-y-auto py-[18px] border-[1px]" : "h-0"} overflow-hidden transition-all duration-150 absolute top-[110%] w-full flex flex-col gap-4 placeholder:text-[#535862] bg-[#2B2B2B] border-[#2B2B2B] focus:border-[#D2FF00] text-white outline-none rounded-[12px] px-4 z-50`}
                            >
                                {languages?.map((country, index) => (
                                    <p
                                        key={index}
                                        onClick={() => handleLanguage(index)}
                                        className="text-[24px] font-['Chakra_Petch'] leading-[100%] cursor-pointer"
                                    >
                                        {Object.values(country.languages)[0]}
                                    </p>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-[#D5D7DA] font-['Platypi'] font-bold text-[26px] italic">Role</label>
                            <div className="flex items-center justify-between placeholder:text-[#535862] bg-[#2B2B2B] border-[1px] border-[#2B2B2B] focus:border-[#D2FF00] text-white  outline-none rounded-[12px] py-[18px] px-4 " >
                                <p className="text-[24px] font-['Chakra_Petch'] leading-[100%] ">Player</p>
                                <FaAngleDown className="text-[#D5D7DA] text-[25px] " />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-[#D5D7DA] font-['Platypi'] font-bold text-[26px] italic">Phone number</label>
                            <div className="flex items-center justify-between placeholder:text-[#535862] bg-[#2B2B2B] border-[1px] border-[#2B2B2B] focus:border-[#D2FF00] text-white  outline-none rounded-[12px] py-[1px] px-4 " >
                                <div className="flex items-center gap-2">
                                    <p className="text-[24px] font-['Chakra_Petch'] leading-[100%] ">TUR</p>
                                    <FaAngleDown className="text-[#D5D7DA] text-[25px] " />
                                </div>
                                <input type="text" id="number" placeholder="+1 00000000" className="w-full text-[20px] placeholder:text-[#535862] bg-[#2B2B2B] border-[1px] border-[#2B2B2B] focus:border-[#D2FF00] text-white  outline-none rounded-[12px] py-[18px] px-4 " />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="Email" className="text-[#D5D7DA] font-['Platypi'] font-bold text-[26px] italic " >Message</label>
                            <textarea name="" id="" placeholder="Enter your message" className="text-[20px] resize-none placeholder:text-[#535862] bg-[#2B2B2B] border-[1px] border-[#2B2B2B] focus:border-[#D2FF00] text-white  outline-none rounded-[12px] py-[18px] px-4 "  ></textarea>
                        </div>

                        <div className="rounded-[8px] cursor-pointer bg-[#D2FF00] py-[18px] px-6 flex items-center justify-center shadow-[0_8px_16px_0_#D2FF0029,0_71px_29px_0_#D2FF000A,0_40px_24px_0_#D2FF0021,0_18px_18px_0_#D2FF0036,0_4px_10px_0_#D2FF0040]">
                            <p className="font-['Geist'] font-bold text-[26px] leading-[100%] ">Send Message</p>
                        </div>

                    </div>
                </form>
                <video
                    src={footballMan}
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls={false}
                    disablePictureInPicture
                    controlsList="nodownload nofullscreen noremoteplayback"
                    className="w-full sm:w-[90%] sm:h-[750px] lg:w-[35%] lg:h-fit rounded-[20px] lg:rounded-[20px]   "
                ></video>
            </div>
            <h4 className="italic font-bold leading-[100%] py-8 font-['Platypi'] text-white text-[32px] pl-4">Contact us throw our <span className="text-[#D2FF00]"> official channels </span> </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <div className="bg-[#1C1C1C] w-[95%] md:w-full  h-[219px] rounded-[18px] p-6 flex flex-col justify-center items-start gap-8">
                    <MdOutlinePhoneInTalk className="bg-[#D2FF001A] text-[#D2FF00] text-[45px] p-2  rounded-full " />
                    <div className="flex flex-col gap-4">
                        <h5 className="italic font-['Platypi'] text-[26px] leading-[100%] text-white ">Call us</h5>
                        <p className="font-['Chakra_Petch'] text-[#D2FF00] text-[24px] leading-[100%] ">+1 (555) 000-0000</p>
                    </div>
                </div>
                <div className="bg-[#1C1C1C] w-[95%] md:w-full  h-[219px] rounded-[18px] p-6 flex flex-col justify-center items-start gap-8">
                    <FaWhatsapp className="bg-[#D2FF001A] text-[#D2FF00] text-[45px] p-2  rounded-full " />
                    <div className="flex flex-col gap-4">
                        <h5 className="italic font-['Platypi'] text-[26px] leading-[100%] text-white ">Call us</h5>
                        <p className="font-['Chakra_Petch'] text-[#D2FF00] text-[24px] leading-[100%] ">+1 (555) 000-0000</p>
                    </div>
                </div>

                <div className="bg-[#1C1C1C] w-[95%] md:w-full  h-[219px] rounded-[18px] p-6 flex flex-col justify-center items-start gap-8">
                    <FaTelegramPlane className="bg-[#D2FF001A] text-[#D2FF00] text-[45px] p-2  rounded-full " />
                    <div className="flex flex-col gap-4">
                        <h5 className="italic font-['Platypi'] text-[26px] leading-[100%] text-white ">Call us</h5>
                        <p className="font-['Chakra_Petch'] text-[#D2FF00] text-[24px] leading-[100%] ">+1 (555) 000-0000</p>
                    </div>
                </div>

                <div className="bg-[#1C1C1C] w-[95%] md:w-full h-[219px] rounded-[18px] p-6 flex flex-col justify-center items-start gap-8">
                    <HiOutlineMailOpen className="bg-[#D2FF001A] text-[#D2FF00] text-[45px] p-2  rounded-full " />
                    <div className="flex flex-col gap-4">
                        <h5 className="italic font-['Platypi'] text-[26px] leading-[100%] text-white ">Call us</h5>
                        <p className="font-['Chakra_Petch'] text-[#D2FF00] text-[24px] leading-[100%] ">+1 (555) 000-0000</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
}
export default ContactUs