import { useEffect, useState } from "react";
import footballMan from "/src/assets/footballMan.mp4";
import { FaAngleDown } from "react-icons/fa6";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function ContactUs() {
    const [countries, setCountries] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [phoneNum, setPhoneNum] = useState([]);
    const [selectdCountry, setSelectdCountry] = useState(0);
    const [selectdLanguage, setSelectdLanguage] = useState(0);
    const [selectdRole, setSelectdRole] = useState(0);
    const [selectdNum, setSelectdNum] = useState(0);
    const [showLanguage, setShowLanguage] = useState(false);
    const [showRole, setShowRole] = useState(false);
    const [ShowNum, setShowNum] = useState(false);
    const [showCountry, setShowCountry] = useState(false);
    const [countrySearch, setCountrySearch] = useState("");
    const [languageSearch, setLanguageSearch] = useState("");
    const [numberSearch, setNumberSearch] = useState("");
    const { t } = useTranslation();

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all?fields=name,capital,currencies")
            .then((res) => res.json())
            .then((data) => setCountries(data));
        fetch("https://restcountries.com/v3.1/all?fields=languages")
            .then((res) => res.json())
            .then((data) => setLanguages(data));

        fetch("https://restcountries.com/v3.1/all?fields=name,idd,cca2,flags")
            .then((res) => res.json())
            .then((data) => setPhoneNum(data));

    }, []);

    const uniqueLanguages = [
        ...new Set(
            languages.flatMap((country) => Object.values(country.languages || {})),
        ),
    ];

    function handleCounty(e) {
        setShowCountry(false);
        setSelectdCountry(e);
        setCountrySearch("")

    }
    function handleLanguage(e) {
        setShowLanguage(false);
        setSelectdLanguage(e);
        setLanguageSearch("")
    }
    function handleNum(e) {
        setShowNum(false);
        setSelectdNum(e);
        setNumberSearch("")
    }
    function handleRole(e) {
        setShowRole(false);
        setSelectdRole(e)
    }
    const AllRole = [
        { id: 1, label: t("contactPage.Roles.player") },
        { id: 2, label: t("contactPage.Roles.coach") },
        { id: 3, label: t("contactPage.Roles.analyst") },
        { id: 4, label: t("contactPage.Roles.manager") },
        { id: 5, label: t("contactPage.Roles.scout") },
        { id: 6, label: t("contactPage.Roles.referee") },
        { id: 7, label: t("contactPage.Roles.agent") },
        { id: 8, label: t("contactPage.Roles.other") }
    ]
    const container = {
        hidden: {},
        show: {
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.25,
            },
        },
    };
    const item = {
        hidden: { opacity: 0, y: 50 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    return (
        <section className="bg-[#121212]">
            <div className="w-[98%] lg:w-[90%] mx-auto py-8">
                <motion.h2
                    variants={item}
                    initial="hidden"
                    animate="show"
                    className="italic font-bold leading-[100%] py-8 font-['Platypi'] text-white text-[48px] pl-4"
                >
                    <span className="text-[#D2FF00]">
                        {" "}
                        {t("contactPage.hero.title.highlight")}{" "}
                    </span>
                    {t("contactPage.hero.title.after")}
                </motion.h2>
                <div className="w-full flex  flex-col items-center lg:flex-row  gap-8 justify-between  bg-[#1C1C1C] rounded-[40px] lg:h-fit py-6 px-4 lg:p-10 ">
                    <form className="w-full">
                        <motion.div
                            variants={container}
                            initial="hidden"
                            animate="show"
                            className=" flex flex-col gap-6">
                            <motion.div
                                variants={item}
                                className="flex flex-col lg:flex-row gap-4">
                                <div className="flex flex-col gap-2 w-full lg:w-[50%]">
                                    <label
                                        htmlFor="firstName"
                                        className="text-[#D5D7DA] font-['Platypi'] font-bold text-[26px] italic ">
                                        {t("contactPage.form.firstName")}
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        className="bg-[#2B2B2B] border-[1px] border-[#2B2B2B] focus:border-[#D2FF00] text-white  outline-none rounded-[12px] py-[18px] px-4 "/>
                                </div>
                                <div className="flex flex-col gap-2 w-full lg:w-[50%]">
                                    <label
                                        htmlFor="lastName"
                                        className="text-[#D5D7DA] font-['Platypi'] font-bold text-[26px] italic ">
                                        {t("contactPage.form.lastName")}
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        className="bg-[#2B2B2B] border-[1px] border-[#2B2B2B] focus:border-[#D2FF00] text-white  outline-none rounded-[12px] py-[18px] px-4 "/>
                                </div>
                            </motion.div>

                            <motion.div variants={item} className="flex flex-col gap-2">
                                <label
                                    htmlFor="Email"
                                    className="text-[#D5D7DA] font-['Platypi'] font-bold text-[26px] italic "
                                >
                                    {t("contactPage.form.email")}
                                </label>
                                <input
                                    type="email"
                                    id="Email"
                                    placeholder={t("contactPage.form.emailPlaceholder")}
                                    className="placeholder:text-[#535862] bg-[#2B2B2B] border-[1px] border-[#2B2B2B] focus:border-[#D2FF00] text-white  outline-none rounded-[12px] py-[18px] px-4 "
                                />
                            </motion.div>

                            {/* Country */}
                            <motion.div
                                variants={item}
                                className="relative flex flex-col gap-2">
                                <label className="text-[#D5D7DA] font-['Platypi'] font-bold text-[26px] italic ">
                                    {t("contactPage.form.country")}
                                </label>
                                <div
                                    onClick={() => setShowCountry((prev) => !prev)}
                                    className="flex items-center cursor-pointer justify-between placeholder:text-[#535862] bg-[#2B2B2B] border-[1px] border-[#2B2B2B] focus:border-[#D2FF00] text-white  outline-none rounded-[12px] py-[18px] px-4 ">
                                    {countries
                                        .filter((country, index) => index === selectdCountry)
                                        .map((country, index) => (
                                            <p
                                                key={index}
                                                className="text-[24px] font-['Chakra_Petch'] leading-[100%]"
                                            >
                                                {country.name.common}
                                            </p>
                                        ))}
                                    <FaAngleDown
                                        className={`${showCountry ? "rotate-180" : "rotate-0"} transition-all duration-150 text-[#D5D7DA] text-[25px]`}
                                    />
                                </div>
                                <div className={`${showCountry ? "h-[250px] overflow-y-auto  border-[1px]" : "h-0"} z-50  overflow-hidden transition-all duration-150 absolute top-[110%] w-full flex flex-col placeholder:text-[#535862] bg-[#2B2B2B] border-gray-600 focus:border-[#D2FF00] text-white  outline-none rounded-[12px] `}>
                                    <div className="mx-auto w-[98%] py-3">
                                        <input
                                            type="text"
                                            value={countrySearch}
                                            onChange={(e) => setCountrySearch(e.target.value)}
                                            placeholder={t("contactPage.searchCountry")}
                                            className="rounded-[12px] py-2 px-2 w-full border-[1px] bg-[#1b1b1b] border-gray-300"
                                        />
                                    </div>
                                    {countries
                                        .filter((country) =>
                                            country.name.common
                                                .toLowerCase()
                                                .includes(countrySearch.toLowerCase())
                                        )
                                        .map((country) => {

                                            const realIndex = countries.indexOf(country);

                                            const langCode =
                                                Object.keys(country.name.nativeName || {})[0];

                                            return (
                                                <p
                                                    key={realIndex}
                                                    onClick={() => handleCounty(realIndex)}
                                                    className="text-[24px] text-gray-300 border-t-[1px] hover:bg-white/10 border-gray-600 font-['Chakra_Petch']  cursor-pointer leading-tight p-2"
                                                >
                                                    <span className="px-4 text-[#D2FF00] w-[75px] text-center inline-block font-extralight font-['Platypi']">
                                                        {langCode}
                                                    </span>

                                                    {country.name.common}
                                                </p>
                                            );
                                        })}
                                </div>
                            </motion.div>

                            {/* Language */}
                            <motion.div
                                variants={item}
                                className="relative flex flex-col gap-2">
                                <label className="text-[#D5D7DA] font-['Platypi'] font-bold text-[26px] italic">
                                    {t("contactPage.form.selectLanguage")}
                                </label>

                                <div
                                    onClick={() => setShowLanguage((prev) => !prev)}
                                    className="flex cursor-pointer items-center  justify-between placeholder:text-[#535862] bg-[#2B2B2B] border-[1px] border-[#2B2B2B] focus:border-[#D2FF00] text-white outline-none rounded-[12px] py-[18px] px-4">
                                    {uniqueLanguages.filter((lang, index) => index === selectdLanguage).map((lang, index) => (

                                        <p key={index} className="text-[24px] font-['Chakra_Petch'] leading-[100%]">
                                            {lang || "Select Language"}
                                        </p>
                                    ))}

                                    <FaAngleDown
                                        className={`${showLanguage ? "rotate-180" : "rotate-0"} transition-all duration-150 text-[#D5D7DA] text-[25px]`}
                                    />
                                </div>

                                <div className={`${showLanguage ? "h-[250px] overflow-y-auto  border-[1px]" : "h-0"} z-50  overflow-hidden transition-all duration-150 absolute top-[110%] w-full flex flex-col placeholder:text-[#535862] bg-[#2B2B2B] border-gray-600 focus:border-[#D2FF00] text-white  outline-none rounded-[12px]  `}>
                                    <div className="mx-auto w-[98%] py-3">
                                        <input
                                            type="text"
                                            value={languageSearch}
                                            onChange={(e) => setLanguageSearch(e.target.value)}
                                            placeholder={t("contactPage.searchLanguage")}
                                            className="rounded-[12px] py-2 px-2 w-full border-[1px] bg-[#1b1b1b] border-gray-300"
                                        />
                                    </div>
                                    {uniqueLanguages?.filter((lang) => lang.toLowerCase().includes(languageSearch.toLowerCase())).map((lang, index) => {
                                        const relIndex = uniqueLanguages.indexOf(lang);

                                        return (
                                            <p
                                                key={index}
                                                onClick={() => handleLanguage(relIndex)}
                                                className="text-[24px] text-gray-300 border-t-[1px] hover:bg-white/10 border-gray-600 font-['Chakra_Petch'] leading-[100%] cursor-pointer p-2"
                                            >
                                                {lang}
                                            </p>
                                        )
                                    }
                                    )}
                                </div>
                            </motion.div>

                            {/* Role */}
                            <motion.div variants={item} className="flex flex-col relative gap-2">
                                <label className="text-[#D5D7DA] font-['Platypi'] font-bold text-[26px] italic">
                                    {t("contactPage.form.role")}
                                </label>

                                <div
                                    onClick={() => setShowRole((prev) => !prev)}
                                    className="flex cursor-pointer items-center justify-between placeholder:text-[#535862] bg-[#2B2B2B] border-[1px] border-[#2B2B2B] focus:border-[#D2FF00] text-white  outline-none rounded-[12px] py-[18px] px-4 ">
                                    {AllRole.filter((role, index) => index === selectdRole).map((role) => (

                                        <p key={role.id} className="text-[24px] font-['Chakra_Petch'] leading-[100%] ">
                                            {role.label}
                                        </p>
                                    ))}
                                    <FaAngleDown className="text-[#D5D7DA] text-[25px] " />
                                </div>

                                <div className={`${showRole ? "h-[250px] overflow-y-auto  border-[1px]" : "h-0"} z-50  overflow-hidden transition-all duration-150 absolute top-[110%] w-full flex flex-col placeholder:text-[#535862] bg-[#2B2B2B] border-gray-600 focus:border-[#D2FF00] text-white  outline-none rounded-[12px]  `}>

                                    {AllRole?.map((role, index) => {

                                        return (
                                            <p onClick={() => handleRole(index)}
                                                key={index}
                                                className="text-[24px] text-gray-300 border-t-[1px] hover:bg-white/10 border-gray-600  font-['Chakra_Petch'] leading-[100%] cursor-pointer p-4"
                                            >
                                                {role.label}
                                            </p>
                                        )
                                    }
                                    )}
                                </div>
                            </motion.div>
                            {/* Phone Number */}
                            <motion.div variants={item} className="flex flex-col gap-2">
                                <label className="text-[#D5D7DA] font-['Platypi'] font-bold text-[26px] italic">
                                    {t("contactPage.form.phoneNumber")}
                                </label>
                                <div className="flex flex-col md:flex-row md:items-center gap-4  justify-between placeholder:text-[#535862] bg-[#2B2B2B] border-[1px] border-[#2B2B2B] focus:border-[#D2FF00] text-white  outline-none rounded-[12px] py-4 md:py-[1px] px-1 md:px-4 ">
                                    <div className="relative flex items-center pl-3 md:pl-0 gap-2">
                                        <div onClick={() => setShowNum(prev => !prev)} className="cursor-pointer flex w-fit mr-1 items-center gap-4">

                                            {phoneNum?.filter((num, index) => index === selectdNum).map((num, index) => {
                                                const Num =
                                                    num.idd?.root && num.idd?.suffixes?.[0]
                                                        ? `${num.idd.root}${num.idd.suffixes[0]}`
                                                        : "";
                                                const NumName = num.cca2?.toLowerCase();
                                                return (
                                                    <p key={index}
                                                        className="text-[24px] text-nowrap font-['Chakra_Petch'] leading-[100%] "
                                                    >
                                                        {NumName} {Num}
                                                    </p>
                                                )
                                            }
                                            )}
                                            <FaAngleDown className="text-[#D5D7DA] text-[25px] " />
                                        </div>
                                        <div className={`${ShowNum ? "h-[250px] overflow-y-auto  border-[1px]" : "h-0"} z-50  overflow-hidden transition-all duration-150 absolute top-[130%] md:top-[180%] left-[-15px] w-[200px] flex flex-col placeholder:text-[#535862] bg-[#2B2B2B] border-gray-600 focus:border-[#D2FF00] text-white  outline-none rounded-[12px]  `}>
                                            <div className="mx-auto w-[95%] py-3">
                                                <input
                                                    type="text"
                                                    value={numberSearch}
                                                    onChange={(e) => setNumberSearch(e.target.value)}
                                                    placeholder={t("contactPage.searchNumber")}
                                                    className="rounded-[12px] py-2 px-2 w-full mx-auto border-[1px] bg-[#1b1b1b] border-gray-300"
                                                />
                                            </div>
                                            {phoneNum
                                                ?.filter((num) => {

                                                    const Num =
                                                        num.idd?.root && num.idd?.suffixes?.[0]
                                                            ? `${num.idd.root}${num.idd.suffixes[0]}`
                                                            : "";

                                                    const NumName = num.cca2?.toLowerCase() || "";

                                                    return (
                                                        Num.toLowerCase().includes(numberSearch.toLowerCase()) ||
                                                        NumName.includes(numberSearch.toLowerCase())
                                                    );
                                                })

                                                .map((num, index) => {
                                                    const realNumer = phoneNum.indexOf(num)
                                                    const Num =
                                                        num.idd?.root && num.idd?.suffixes?.[0]
                                                            ? `${num.idd.root}${num.idd.suffixes[0]}`
                                                            : "";

                                                    const NumName = num.cca2?.toLowerCase();

                                                    return (
                                                        <p
                                                            onClick={() => handleNum(realNumer)}
                                                            key={index}
                                                            className="text-[24px] text-gray-300 border-t-[1px] hover:bg-white/10 border-gray-600 font-['Chakra_Petch'] leading-[100%] cursor-pointer p-2"
                                                        >
                                                            {NumName} {Num}
                                                        </p>
                                                    );
                                                })}
                                        </div>
                                    </div>
                                    <input
                                        type="text"
                                        id="number"
                                        placeholder="+1 00000000"
                                        className="w-full text-[20px] placeholder:text-[#535862] bg-[#2B2B2B] border-[1px] border-gray-300 sm:border-[#2B2B2B] focus:border-[#D2FF00] text-white  rounded-[12px] py-[18px] px-4 "
                                    />
                                </div>
                            </motion.div>

                            <motion.div variants={item} className="flex flex-col gap-2">
                                <label
                                    htmlFor="Email"
                                    className="text-[#D5D7DA] font-['Platypi'] font-bold text-[26px] italic "
                                >
                                    {t("contactPage.form.message")}
                                </label>
                                <textarea
                                    name=""
                                    id=""
                                    placeholder={t("contactPage.form.messagePlaceholder")}
                                    className="text-[20px] resize-none placeholder:text-[#535862] bg-[#2B2B2B] border-[1px] border-[#2B2B2B] focus:border-[#D2FF00] text-white  outline-none rounded-[12px] py-[18px] px-4 "
                                ></textarea>
                            </motion.div>

                            <motion.div
                                variants={item}
                                className="rounded-[8px] cursor-pointer bg-[#D2FF00] py-[18px] px-6 flex items-center justify-center shadow-[0_8px_16px_0_#D2FF0029,0_71px_29px_0_#D2FF000A,0_40px_24px_0_#D2FF0021,0_18px_18px_0_#D2FF0036,0_4px_10px_0_#D2FF0040]"
                            >
                                <p className="font-['Geist'] font-bold text-[26px] leading-[100%] ">
                                    {t("contactPage.form.sendMessage")}
                                </p>
                            </motion.div>
                        </motion.div>
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
                <motion.h4
                    variants={item}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.9 }}
                    className="italic font-bold leading-[100%] py-8 font-['Platypi'] text-white text-[32px] pl-4"
                >
                    {t("contactPage.officialChannels.title.before")}{" "}
                    <span className="text-[#D2FF00]">
                        {" "}
                        {t("contactPage.officialChannels.title.highlight")}{" "}
                    </span>{" "}
                </motion.h4>
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.6 }}
                    className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                >
                    <motion.div
                        variants={item}
                        className="bg-[#1C1C1C] w-[95%] md:w-full mx-auto h-[219px] rounded-[18px] p-6 flex flex-col justify-center items-start gap-8"
                    >
                        <MdOutlinePhoneInTalk className="bg-[#D2FF001A] text-[#D2FF00] text-[45px] p-2  rounded-full " />
                        <div className="flex flex-col gap-4">
                            <h5 className="italic font-['Platypi'] text-[26px] leading-[100%] text-white ">
                                {t("contactPage.officialChannels.cards.card1.title")}
                            </h5>
                            <p className="font-['Chakra_Petch'] text-[#D2FF00] text-[24px] leading-[100%] ">
                                {t("contactPage.officialChannels.cards.card1.value")}
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={item}
                        className="bg-[#1C1C1C] mx-auto w-[95%] md:w-full  h-[219px] rounded-[18px] p-6 flex flex-col justify-center items-start gap-8"
                    >
                        <FaWhatsapp className="bg-[#D2FF001A] text-[#D2FF00] text-[45px] p-2  rounded-full " />
                        <div className="flex flex-col gap-4">
                            <h5 className="italic font-['Platypi'] text-[26px] leading-[100%] text-white ">
                                {t("contactPage.officialChannels.cards.card2.title")}
                            </h5>
                            <p className="font-['Chakra_Petch'] text-[#D2FF00] text-[24px] leading-[100%] ">
                                {t("contactPage.officialChannels.cards.card2.value")}
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={item}
                        className="bg-[#1C1C1C] mx-auto w-[95%] md:w-full  h-[219px] rounded-[18px] p-6 flex flex-col justify-center items-start gap-8"
                    >
                        <FaTelegramPlane className="bg-[#D2FF001A] text-[#D2FF00] text-[45px] p-2  rounded-full " />
                        <div className="flex flex-col gap-4">
                            <h5 className="italic font-['Platypi'] text-[26px] leading-[100%] text-white ">
                                {t("contactPage.officialChannels.cards.card3.title")}
                            </h5>
                            <p className="font-['Chakra_Petch'] text-[#D2FF00] text-[24px] leading-[100%] ">
                                {t("contactPage.officialChannels.cards.card3.value")}
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={item}
                        className="bg-[#1C1C1C] mx-auto w-[95%] md:w-full h-[219px] rounded-[18px] p-6 flex flex-col justify-center items-start gap-8"
                    >
                        <HiOutlineMailOpen className="bg-[#D2FF001A] text-[#D2FF00] text-[45px] p-2  rounded-full " />
                        <div className="flex flex-col gap-4">
                            <h5 className="italic font-['Platypi'] text-[26px] leading-[100%] text-white ">
                                {t("contactPage.officialChannels.cards.card4.title")}
                            </h5>
                            <p className="font-['Chakra_Petch'] text-[#D2FF00] text-[24px] leading-[100%] ">
                                {t("contactPage.officialChannels.cards.card4.value")}
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
export default ContactUs;
