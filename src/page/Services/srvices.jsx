import { useState } from "react";
import { BsStars } from "react-icons/bs";
// import footballPlayer from "/images/footballPlayer.png";
import FAQ from "../../components/FAQ/faq";
import GainFrom from "../../components/GainFrom/gainFrom";
import Studyom from "../../components/Studyom/studyom";
import WhyOaSports from "../../components/WhyOaSports/whyOaSport";
import blackman from "/images/blackman.png";
import blueman from "/images/blueman.png";
import grawman from "/images/grawman.png";
import tabletman from "/images/tabletman.png";
import StartingJourney from "../../components/StartingJourney/startingJourney";
import hack from "/images/hack.png";
import manandgoogle from "/images/manandgoogle.png";
import flash from "/images/flash.png";
import map from "/images/map.png";
import dashbord from "/images/dashbord.png";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import i18n from "../../i18n";

const currentLang = i18n.language || localStorage.getItem("lang") || "en";

const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
};

function Services() {
    const { t } = useTranslation()
    const AllServices = [
        { id: 1, label: "servicesPage.tabs.tab1" },
        { id: 2, label: "servicesPage.tabs.tab2" },
        { id: 3, label: "servicesPage.tabs.tab3" },
        { id: 4, label: "servicesPage.tabs.tab4" },
        { id: 5, label: "servicesPage.tabs.tab5" },
        { id: 6, label: "servicesPage.tabs.tab6" },
    ];
    const [serviceNum, setServiceNum] = useState(1);
    return (
        <section className="py-20 bg-[#121212] ">
            <div className=" w-[90%] mx-auto flex flex-col gap-8">
                <div className="bg-[#1C1C1C] h-fit lg:min-h-[245px] xl:h-[245px] items-center text-[13px] sm:text-[16px] md:p-[24px] p-2 rounded-[24px] flex gap-8 flex-wrap ">
                    {AllServices.map((service) => (
                        <p
                            key={service.id}
                            onClick={() => setServiceNum(service.id)}
                            className={`${service.id == serviceNum ? "bg-[#D2FF00] text-black rounded-[100px]" : "text-gray-300"}  md:text-[24px] italic font-bold font-['Platypi'] w-fit cursor-pointer  py-3 px-1`}
                        >
                            {t(service.label)}
                        </p>
                    ))}
                </div>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={serviceNum}
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="flex flex-col lg:flex-row justify-between items-center gap-4"
                    >
                        <motion.div variants={item} className="lg:w-[50%]">
                            <motion.h2
                                variants={item}
                                className="text-[#D2FF00] [text-shadow:0_0_30px_rgba(195,255,26,.7)] w-fit font-['Platypi'] font-bold italic leading-[100%] text-[24px] md:text-[40px] "
                            >
                                {t(AllServices[serviceNum - 1].label)}
                            </motion.h2>
                            <motion.div variants={item} className="flex flex-col gap-4 py-6 ">
                                <div className="flex items-center gap-4 border-[1px] border-[#d0ff008e] rounded-[16px]  md:w-[750px] lg:w-[1000px] py-3 px-1">
                                    <BsStars className="text-[#D2FF00] drop-shadow-[0_6px_23px_#D2FF00] text-[100px]" />
                                    <div className="flex flex-col gap-2  ">
                                        <p className="text-[#D2FF00] font-medium text-['Chakra_Petch'] md:text-[24px] leading-[100%] ">{t("servicesPage.advantages.card1.title")}</p>
                                        <p className="text-['Chakra_Petch'] md:text-[24px] leading-tight  text-gray-300 ">
                                            {t("servicesPage.advantages.card1.text")}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 border-[1px] border-[#d0ff008e] rounded-[16px] md:w-[750px] lg:w-[1000px] py-3 px-1">
                                    <BsStars className="text-[#D2FF00] drop-shadow-[0_6px_23px_#D2FF00] text-[100px]" />
                                    <div className="flex flex-col gap-2  ">
                                        <p className="text-[#D2FF00] font-medium text-['Chakra_Petch'] md:text-[24px] leading-[100%] ">{t("servicesPage.advantages.card2.title")}</p>
                                        <p className="text-['Chakra_Petch'] md:text-[24px] leading-tight text-gray-300 ">
                                            {t("servicesPage.advantages.card2.text")}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 border-[1px] border-[#d0ff008e] rounded-[16px] md:w-[750px] lg:w-[1000px] py-3 px-1">
                                    <BsStars className="text-[#D2FF00] drop-shadow-[0_6px_23px_#D2FF00] text-[100px]" />
                                    <div className="flex flex-col gap-2  ">
                                        <p className="text-[#D2FF00] font-medium text-['Chakra_Petch'] md:text-[24px] leading-[100%] ">{t("servicesPage.advantages.card3.title")}</p>
                                        <p className="text-['Chakra_Petch'] md:text-[24px] leading-tight text-gray-300 ">
                                            {t("servicesPage.advantages.card3.text")}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 border-[1px] border-[#d0ff008e] rounded-[16px] md:w-[750px] lg:w-[1000px] py-3 px-1">
                                    <BsStars className="text-[#D2FF00] drop-shadow-[0_6px_23px_#D2FF00] text-[100px]" />
                                    <div className="flex flex-col gap-2  ">
                                        <p className="text-[#D2FF00] font-medium text-['Chakra_Petch'] md:text-[24px] leading-[100%] ">{t("servicesPage.advantages.card4.title")}</p>
                                        <p className="text-['Chakra_Petch'] md:text-[24px] leading-tight text-gray-300 ">
                                            {t("servicesPage.advantages.card4.text")}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 border-[1px] border-[#d0ff008e] rounded-[16px] md:w-[750px] xl:w-[1000px] py-3 px-1">
                                    <BsStars className="text-[#D2FF00] drop-shadow-[0_6px_23px_#D2FF00] text-[100px]" />
                                    <div className="flex flex-col gap-2  ">
                                        <p className="text-[#D2FF00] font-medium text-['Chakra_Petch'] md:text-[24px] leading-[100%] ">{t("servicesPage.advantages.card5.title")}</p>
                                        <p className="text-['Chakra_Petch'] md:text-[24px] leading-tight text-gray-300 ">
                                            {t("servicesPage.advantages.card5.text")}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                            <Link to={`/${currentLang}/pricing`} className="bg-[#D2FF00] cursor-pointer rounded-[8px] py-[18px] px-[24px]  shadow-[0_8px_16px_0_#D2FF0029,0_40px_24px_0_#D2FF0021,0_18px_18px_0_#D2FF0036,0_4px_10px_0_#D2FF0040] w-full md:w-[386px] flex items-center justify-center ">
                                <p className="font-['Chakra_Petch'] font-bold leading-[100%] text-[20px] ">
                                    {t("servicesPage.buttons.buyNow")}
                                </p>
                            </Link>
                        </motion.div>

                    </motion.div>
                </AnimatePresence>
                <div>
                    <FAQ title={t("servicesPage.faq.title1")} />
                    <FAQ title={t("servicesPage.faq.title2")} />
                    <FAQ title={t("servicesPage.faq.title3")} />
                    <FAQ title={t("servicesPage.faq.title4")} />
                </div>

                <div className="flex flex-col justify-center gap-4 md:mt-20">
                    <h2 className="text-white font-bold italic text-[30px] md:text-[48px] font-['Platypi']">
                        {t("servicesPage.gainFrom.title.before")} <span className="text-[#D2FF00]">{t("servicesPage.gainFrom.title.highlight")} </span> {t("servicesPage.gainFrom.title.after")}

                    </h2>
                    <div className="custom-scroll flex items-center gap-4 md:gap-8 overflow-x-auto  ">
                        <GainFrom text={t("gainFromCards.card1")} />
                        <GainFrom text={t("gainFromCards.card2")} />
                        <GainFrom text={t("gainFromCards.card3")} />
                        <GainFrom text={t("gainFromCards.card4")} />
                        <GainFrom text={t("gainFromCards.card5")} />
                        <GainFrom text={t("gainFromCards.card6")} />
                    </div>
                </div>

                <Studyom />

                <div className="flex flex-col gap-4 md:mt-20">
                    <h2 className="text-white italic font-bold text-[48px] font-['Platypi'] leading-[100%]">
                        {t("servicesPage.whyOaSports.title.before")} <span className="text-[#D2FF00]">{t("servicesPage.whyOaSports.title.highlight")}</span>
                    </h2>
                    <div className="flex items-center gap-4 flex-wrap justify-around ">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5 }}
                            className="w-full md:w-[40%] lg:w-[49%]">
                            <WhyOaSports
                                image={blackman}
                                title={t("whyOaSportsCards.card1.title")}
                                text={t("whyOaSportsCards.card1.text")} />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5 }}
                            className="w-full md:w-[40%] lg:w-[49%]">
                            <WhyOaSports image={blueman}
                                title={t("whyOaSportsCards.card2.title")}
                                text={t("whyOaSportsCards.card2.text")} />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5 }}
                            className="w-full md:w-[40%] lg:w-[49%]">
                            <WhyOaSports image={grawman}
                                title={t("whyOaSportsCards.card3.title")}
                                text={t("whyOaSportsCards.card3.text")} />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5 }}
                            className="w-full md:w-[40%] lg:w-[49%]">
                            <WhyOaSports image={tabletman}
                                title={t("whyOaSportsCards.card4.title")}
                                text={t("whyOaSportsCards.card4.text")} />
                        </motion.div>

                    </div>
                </div>

                <div className=" flex flex-col gap-4 md:gap-8 mt-8 md:mt-20 ">
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.5 }}
                        values={item}
                        className="italic font-bold text-[30px] lg:text-[48px] font-['Platypi'] leading-[100%] text-white "
                    >
                        {" "}
                        <span className="text-[#D2FF00]">{t("servicesPage.startingJourney.title.highlight")} </span> {t("servicesPage.startingJourney.title.after")}
                    </motion.h2>
                    <div className="flex items-center flex-wrap justify-between w-full gap-5  md:gap-20 lg:gap-8 xl:gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5 }}
                            className="w-full md:w-[44%] lg:w-[48%] h-[600px] py-3">
                            <StartingJourney number="01" image={hack}
                                title={t("startingJourneyCards.card1.title")}
                                text={t("startingJourneyCards.card1.text")} />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5 }}
                            className="w-full md:w-[44%] lg:w-[48%] h-[600px] py-3">
                            <StartingJourney number="02" image={manandgoogle}
                                title={t("startingJourneyCards.card2.title")}
                                text={t("startingJourneyCards.card2.text")} />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5 }}
                            className="w-full md:w-[44%] lg:w-[48%] h-[600px] py-3">
                            <StartingJourney number="03" image={flash}
                                title={t("startingJourneyCards.card3.title")}
                                text={t("startingJourneyCards.card3.text")} />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5 }}
                            className="w-full md:w-[44%] lg:w-[48%] h-[600px] py-3">
                            <StartingJourney number="04" image={map}
                                title={t("startingJourneyCards.card4.title")}
                                text={t("startingJourneyCards.card4.text")} />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5 }}
                            className="w-full md:w-[44%] lg:w-[48%] h-[600px] py-3">
                            <StartingJourney number="05" image={dashbord}
                                title={t("startingJourneyCards.card5.title")}
                                text={t("startingJourneyCards.card5.text")} />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5 }}
                            className=" relative w-full md:w-[44%] lg:w-[48%] h-[350px] sm:h-[375px]  md:h-[510px] lg:h-[600px]  rounded-[32px] flex flex-col justify-between gap-4 ">
                            <div className="flex flex-col justify-between h-[70%]">
                                <h2 className="text-[26px] lg:text-[48px] font-bold leading-[100%] font-['Platypi'] text-[#D2FF00] italic ">
                                    {t("servicesPage.cta.title")}
                                </h2>
                                <p className="text-white text-[Chakra_Petch] leading-[100%] text-[20px] lg:text-[28px]">
                                    {t("servicesPage.cta.description1")}
                                </p>
                                <p className="text-white text-[Chakra_Petch] leading-[100%] text-[20px] lg:text-[28px]">
                                    {t("servicesPage.cta.description2")}
                                </p>
                            </div>
                            <Link to={`/${currentLang}/pricing`} className="w-full md:w-[284px] flex items-center justify-center rounded-[8px] py-[18px] px-[24px] cursor-pointer bg-[#D2FF00] shadow-[0_8px_16px_0_#D2FF0029,0_71px_29px_0_#D2FF000A,0_40px_24px_0_#D2FF0021,0_18px_18px_0_#D2FF0036,0_4px_10px_0_#D2FF0040]">
                                <p className="font-['Chakra_Petch'] font-bold text-[20px] leading-[100%] ">
                                    {t("servicesPage.cta.button")}
                                </p>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Services;
