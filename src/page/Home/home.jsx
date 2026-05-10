import FootballCart from "../../components/FootballCart/footballCart";
import OurNumbers from "../../components/OurNumbers/ourNumbers";
import SportCard from "../../components/SportCard/sportCard";
import WhySports from "../../components/WhySports/whySports";
import test from "/images/test.jpg";
import Logo from "/images/mainLogo.svg";
import Sbu from "/images/sbu.png";
import image1 from "/images/image1.jpg";
import image2 from "/images/image2.png";
import image3 from "/images/image3.jpg";
import image4 from "/images/image4.png";
import image5 from "/images/image5.png";
import vedioBg from "/src/assets/bg.mp4";
import { useState } from "react";
import Studyom from "../../components/Studyom/studyom";
import LatestNews from "../../components/LatestNews/latestNews";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import i18n from "../../i18n";
const MotionLink = motion.create(Link);
const container = {
    hidden: {},
    show: {
        transition: {
            delayChildren: 0.1,
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
            duration: 0.9,
            ease: "easeOut",
        },
    },
};
const latestNewsCards = [
    "card1",
    "card2",
    "card3",
    "card4",
];
const viewport = { once: true, amount: 0.1, margin: "0px 0px -150px 0px" };
const currentLang = i18n.language || localStorage.getItem("lang") || "en";

function Home() {
    const { t } = useTranslation();
    const [open, setOpen] = useState(true);
    return (
        <section className=" relative w-screen bg-[#121212]">
            {/* Hero Section */}
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="relative w-screen"
            >
                <video
                    src={vedioBg}
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls={false}
                    disablePictureInPicture
                    controlsList="nodownload nofullscreen noremoteplayback"
                    className="w-full md:object-cover object-cover h-[400px] sm:h-fit"
                />
                <motion.div
                    variants={container}
                    className="absolute flex-col gap-3 flex z-30 top-1/3 left-1/2 -translate-x-[50%] w-[98%] md:w-[80%]"
                >
                    <motion.h1
                        variants={item}
                        className="text-center text-[#D2FF00] font-bold text-[24px] sm:text-[35px] md:text-[50px] lg:text-[60px] xl:text-[60px] font-['Platypi'] italic"
                    >
                        {t("homePage.hero.title")}
                    </motion.h1>

                    <motion.h3
                        variants={item}
                        className="text-white font-bold font-['Platypi'] italic text-[16px] sm:text-[25px] md:text-[32px] lg:text-[38px] xl:text-[40px] text-center"
                    >
                        {t("homePage.hero.subtitle")}
                    </motion.h3>

                    <motion.div
                        variants={item}
                        className="flex items-center justify-center gap-1"
                    >
                        <MotionLink to={`/${currentLang}/contact-us`} variants={item} className="rounded-[8px] bg-[#D2FF00] shadow-[0_8px_16px_0_#C3FF1A29] md:py-[18px] md:px-[24px] p-4" >
                            <div>
                                <p className="font-['Geist'] font-bold md:text-[20px] leading-[100%]">
                                    {t("homePage.hero.buttons.services")}
                                </p>
                            </div>
                        </MotionLink>
                        <MotionLink to={`/${currentLang}/services`} variants={item} className="rounded-[8px] border-[1px] border-[#D2FF00] md:py-[18px] md:px-[24px] p-4">
                            <div>
                                <p className="text-[#D2FF00] font-['Geist'] font-bold md:text-[20px] leading-[100%]">
                                    {t("homePage.hero.buttons.contact")}
                                </p>
                            </div>
                        </MotionLink>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Who We Are Section */}
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
                className="w-[100%] lg:h-[822px] z-30 flex flex-col gap-6 lg:py-[48px] px-4 lg:px-[80px] xl:px-[96px] mt-4"
            >
                <motion.h4
                    variants={item}
                    className="text-white font-['Platypi'] font-bold italic text-[32px] leading-[100%] w-full mx-auto"
                >
                    {t("homePage.whoWeAre.title.before")}
                    <span className="text-[#D2FF00] px-2 leading-[100%]">
                        {t("homePage.whoWeAre.title.highlight")}
                    </span>
                    {t("homePage.whoWeAre.title.after")}
                </motion.h4>

                <motion.div
                    variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.9 }}
                    className="flex lg:grid lg:grid-cols-3 overflow-x-auto lg:overflow-visible gap-6 w-full"
                >
                    <motion.div variants={item}>
                        <FootballCart text={t("homePage.whoWeAre.cards.card1")} />
                    </motion.div>

                    <motion.div variants={item}>
                        <FootballCart text={t("homePage.whoWeAre.cards.card2")} />
                    </motion.div>

                    <motion.div variants={item}>
                        <FootballCart text={t("homePage.whoWeAre.cards.card3")} />
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Our Numbers Section */}
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
                className="w-screen z-30 flex flex-col gap-6 lg:py-[48px] lg:px-[96px] px-4 py-8"
            >
                <motion.h4
                    variants={item}
                    className="text-white font-['Platypi'] font-bold italic text-[26px] lg:text-[32px] leading-[100%] w-[100%] mx-auto"
                >
                    {t("homePage.ourNumbers.title.before")}
                    <span className="text-[#D2FF00] px-2 leading-[100%]">
                        {t("homePage.ourNumbers.title.highlight")}
                    </span>
                    {t("homePage.ourNumbers.title.after")}
                </motion.h4>
                <motion.div
                    variants={container}
                    className="overflow-x-auto flex items-center justify-between gap-4 lg:gap-10"
                >
                    <motion.div variants={item}>
                        <OurNumbers
                            number={t("homePage.ourNumbers.cards.card1.number")}
                            title={t("homePage.ourNumbers.cards.card1.title")}
                            text={t("homePage.ourNumbers.cards.card1.text")}
                        />
                    </motion.div>
                    <motion.div variants={item}>
                        <OurNumbers
                            number={t("homePage.ourNumbers.cards.card2.number")}
                            title={t("homePage.ourNumbers.cards.card2.title")}
                            text={t("homePage.ourNumbers.cards.card2.text")}
                        />
                    </motion.div>
                    <motion.div variants={item}>
                        <OurNumbers
                            number={t("homePage.ourNumbers.cards.card3.number")}
                            title={t("homePage.ourNumbers.cards.card3.title")}
                            text={t("homePage.ourNumbers.cards.card3.text")}
                        />
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* What OA Sports Do - SportCard Section */}
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
                className="w-screen z-30 flex flex-col gap-6 py-[48px] lg:px-[96px] px-4"
            >
                <motion.h4
                    variants={item}
                    className="text-white font-['Platypi'] font-bold italic text-[24px] sm:text-[32px] leading-[100%] w-full mx-auto"
                >
                    {t("homePage.whatOASportsDo.title.before")}
                    <span className="text-[#D2FF00] px-2 leading-[100%]">
                        {t("homePage.whatOASportsDo.title.highlight")}
                    </span>
                    {t("homePage.whatOASportsDo.title.after")}
                </motion.h4>
                <motion.div
                    variants={container}
                    className="custom-scroll flex flex-col md:flex-row md:items-center gap-4 overflow-x-auto w-[98%] md:w-full mx-auto"
                >
                    <motion.div variants={item}>
                        <SportCard
                            open={open}
                            setOpen={setOpen}
                            image={image1}
                            title={t("homePage.whatOASportsDo.cards.card1.title")}
                            text={t("homePage.whatOASportsDo.cards.card1.text")}
                        />
                    </motion.div>
                    <motion.div variants={item}>
                        <SportCard
                            image={image2}
                            title={t("homePage.whatOASportsDo.cards.card2.title")}
                            text={t("homePage.whatOASportsDo.cards.card2.text")}
                        />
                    </motion.div>
                    <motion.div variants={item}>
                        <SportCard
                            image={image3}
                            title={t("homePage.whatOASportsDo.cards.card3.title")}
                            text={t("homePage.whatOASportsDo.cards.card3.text")}
                        />
                    </motion.div>
                    <motion.div variants={item}>
                        <SportCard
                            image={image4}
                            title={t("homePage.whatOASportsDo.cards.card4.title")}
                            text={t("homePage.whatOASportsDo.cards.card4.text")}
                        />
                    </motion.div>
                    <motion.div variants={item}>
                        <SportCard
                            image={image5}
                            title={t("homePage.whatOASportsDo.cards.card5.title")}
                            text={t("homePage.whatOASportsDo.cards.card5.text")}
                        />
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Why Sports Section */}
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
                className="z-30 flex flex-col gap-6 py-[48px] px-4 lg:px-[96px]"
            >
                <motion.h4
                    variants={item}
                    className="text-white font-['Platypi'] font-bold italic text-[26px] lg:text-[38px] leading-[100%] w-full mx-auto"
                >
                    {t("homePage.whySports.title.before")}

                    <span className="text-[#D2FF00] px-2 leading-[100%]">{t("homePage.whySports.title.highlight")}</span>{t("homePage.whySports.title.after")}
                </motion.h4>
                <motion.div
                    variants={container}
                    className="flex flex-wrap items-center gap-6 justify-evenly md:justify-between 2xl:justify-evenly w-full mx-auto">
                    <motion.div
                        variants={item}
                        className="sm:w-[48%] lg:w-[45%] xl:w-[32%]">
                        <WhySports
                            title={t("homePage.whySports.cards.card1.title")}
                            text={t("homePage.whySports.cards.card1.text")}
                        />
                    </motion.div>
                    <motion.div
                        variants={item}
                        className="sm:w-[48%] lg:w-[45%] xl:w-[32%]"
                    >
                        <WhySports
                            title={t("homePage.whySports.cards.card2.title")}
                            text={t("homePage.whySports.cards.card2.text")}
                        />
                    </motion.div>
                    <motion.div
                        variants={item}
                        className="sm:w-[48%] lg:w-[45%] xl:w-[32%]"
                    >
                        <WhySports
                            title={t("homePage.whySports.cards.card3.title")}
                            text={t("homePage.whySports.cards.card3.text")}
                        />
                    </motion.div>
                    <motion.div
                        variants={item}
                        className="sm:w-[48%] lg:w-[45%] xl:w-[32%]"
                    >
                        <WhySports
                            title={t("homePage.whySports.cards.card4.title")}
                            text={t("homePage.whySports.cards.card4.text")}
                        />
                    </motion.div>
                    <motion.div
                        variants={item}
                        className="sm:w-[48%] lg:w-[45%] xl:w-[32%]"
                    >
                        <WhySports
                            title={t("homePage.whySports.cards.card5.title")}
                            text={t("homePage.whySports.cards.card5.text")}
                        />
                    </motion.div>
                    <motion.div
                        variants={item}
                        className="sm:w-[48%] lg:w-[45%] xl:w-[32%]"
                    >
                        <WhySports
                            title={t("homePage.whySports.cards.card6.title")}
                            text={t("homePage.whySports.cards.card6.text")}
                        />
                    </motion.div>
                </motion.div>
            </motion.div>
            <div className="lg:w-[90%] mx-auto">
                <Studyom />
            </div>

            {/* Latest News Desktop */}
            <div className="relative hidden lg:block ">
                <div className="absolute z-0 left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] xl:w-[1071px] h-fit rounded-full bg-[#d0ff002a] blur-[400px]"></div>
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={viewport}
                    className="relative z-20 flex flex-col gap-6 py-[48px] px-[96px]"
                >
                    <motion.div
                        variants={container}
                        className="flex items-center justify-between w-[90%] mx-auto"
                    >
                        <motion.h4
                            variants={item}
                            className="text-white font-['Platypi'] font-bold italic text-[32px] leading-[100%]"
                        >
                            {t("homePage.latestNews.title.before")}
                            <span className="text-[#D2FF00] px-2">{t("homePage.latestNews.title.highlight")}</span>{t("homePage.latestNews.title.after")}
                        </motion.h4>

                        <motion.h5
                            variants={item}
                            className="text-white font-['Platypi'] font-bold italic text-[26px] leading-[100%]"
                        >
                            {t("homePage.latestNews.showAll")}
                        </motion.h5>
                    </motion.div>

                    <div className="flex gap-6 justify-evenly w-[90%] mx-auto">
                        <motion.div variants={container} className="flex flex-col gap-4">
                            <motion.div
                                variants={item}
                                className="w-[100%] min-h-[313px] rounded-[32px] bg-[#1C1C1C] p-3 flex flex-col xl:flex-row gap-2"
                            >
                                <div>
                                    <h5 className="font-bold font-['Platypi'] italic text-[26px] text-[#D2FF00]">
                                        {t("homePage.latestNews.cards.card1.title")}
                                    </h5>
                                    <p className="font-['Chakra_Petch'] text-white text-[24px] leading-[100%] w-[90%]">
                                        {t("homePage.latestNews.cards.card1.text")}
                                    </p>
                                </div>
                                <img
                                    className="w-full xl:w-[90%] mx-auto h-[289px] object-cover rounded-[20px]"
                                    src={test}
                                    alt="test"
                                />
                            </motion.div>

                            <motion.div
                                variants={item}
                                className="w-full h-[836px] xl:min-h-[836px] rounded-[32px] p-3 bg-[#1C1C1C] flex flex-col gap-4 justify-between"
                            >
                                <div>
                                    <h5 className="font-bold font-['Platypi'] italic text-[26px] text-[#D2FF00]">
                                        {t("homePage.latestNews.cards.card2.title")}
                                    </h5>
                                    <p className="font-['Chakra_Petch'] text-white text-[24px] leading-[100%] w-[90%]">
                                        {t("homePage.latestNews.cards.card2.text")}
                                    </p>
                                </div>
                                <img
                                    className="w-full h-[80%] object-cover rounded-[20px]"
                                    src={test}
                                    alt="test"
                                />
                            </motion.div>
                        </motion.div>

                        <motion.div variants={container} className="flex flex-col gap-6">
                            <motion.div
                                variants={item}
                                className="w-full h-[672px] xl:min-h-[672px] rounded-[32px] bg-[#1C1C1C] p-3 flex flex-col justify-between gap-3"
                            >
                                <div>
                                    <h5 className="font-bold font-['Platypi'] italic text-[26px] text-[#D2FF00]">
                                        {t("homePage.latestNews.cards.card3.title")}
                                    </h5>
                                    <p className="font-['Chakra_Petch'] text-white text-[24px] leading-[100%] w-[90%]">
                                        {t("homePage.latestNews.cards.card3.text")}
                                    </p>
                                </div>
                                <img
                                    className="w-full h-[74%] object-cover rounded-[20px]"
                                    src={test}
                                    alt="test"
                                />
                            </motion.div>

                            <motion.div
                                variants={item}
                                className="bg-[#1C1C1C] p-3 w-full h-[439px] xl:min-h-[539px] rounded-[32px] flex flex-col gap-2 justify-between"
                            >
                                <div>
                                    <h5 className="font-bold font-['Platypi'] italic text-[26px] text-[#D2FF00]">
                                        {t("homePage.latestNews.cards.card4.title")}
                                    </h5>
                                    <p className="font-['Chakra_Petch'] text-white text-[24px] leading-[100%] w-[90%]">
                                        {t("homePage.latestNews.cards.card4.text")}

                                    </p>
                                </div>
                                <img
                                    className="ull h-[60%] xl:h-[70%] object-cover rounded-[20px]"
                                    src={test}
                                    alt="test"
                                />
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
            {/* Latest News Mobile */}
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
                className="py-20 flex lg:hidden flex-wrap gap-4 mx-auto w-[90%]"
            >
                {latestNewsCards.map((card, index) => (
                    <motion.div
                        key={index}
                        variants={item}
                        className="w-[98%] mx-auto md:w-[331px] min-h-[303px] py-2"
                    >
                        <LatestNews
                            title={t(`homePage.latestNews.cards.${card}.title`)}
                            text={t(`homePage.latestNews.cards.${card}.text`)}
                        />
                    </motion.div>
                ))}
            </motion.div>

            {/* Partnership Section */}
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
                className="w-[80%] h-[50%] lg:min-h-[500px] pb-20 md:pb-52 mx-auto gap-8 flex flex-col md:gap-0"
            >
                <motion.h2
                    variants={item}
                    className="font-bold font-['Platypi'] text-[30px] md:text-[46px] leading-[100%] italic text-white"
                >
                    {t("homePage.partnership.title.before")} {" "}
                    <span className=" text-[#D2FF00] ">{t("homePage.partnership.title.highlight")}</span>
                </motion.h2>
                <div className="flex flex-col gap-10 md:gap-8">
                    <motion.div
                        variants={item}
                        className="flex items-center justify-center gap-2"
                    >
                        <img className="w-[121px] md:w-[150px]" src={Logo} alt="logo" />
                        <img className="w-[121px] md:w-[150px]" src={Sbu} alt="sbu" />
                    </motion.div>
                    <motion.div
                        variants={item}
                        className="w-full h-[20%] lg:min-h-[500px] xl:h-[490px] gap-8 flex flex-col-reverse lg:flex-row justify-between items-center rounded-[32px] md:p-[28px] md:bg-[#1C1C1C]"
                    >
                        <div className="flex flex-col gap-8 justify-evenly h-full ">
                            <h2 className=" text-[26px] md:text-[48px] leading-[100%] font-['Platypi'] text-white italic font-bold ">
                                {t("homePage.partnership.section.title.before")}
                                <span className="text-[#D2FF00]"> {t("homePage.partnership.section.title.highlight")}</span>
                            </h2>
                            <div className="flex flex-col gap-8 ">
                                <p className="text-white md:text-[24px] font-['Chakra_Petch'] leading-[100%]">
                                    {t("homePage.partnership.section.description1")}
                                </p>
                                <p className="text-white md:text-[24px] font-['Chakra_Petch'] leading-[100%]">
                                    {t("homePage.partnership.section.description2")}
                                </p>
                            </div>
                            <Link to={`/${currentLang}/partners`}>
                                <div className="cursor-pointer py-[18px] px-6 rounded-[8px] bg-[#D2FF00] flex items-center w-[280px] justify-center shadow-[0_8px_16px_0_#D2FF0029,0_40px_24px_0_#D2FF0021,0_18px_18px_0_#D2FF0036,0_4px_10px_0_#D2FF0040] ">
                                    <p className="font-bold text-[20px] font-['Chakra_Petch'] leading-[100%]">
                                        {t("homePage.partnership.section.button")}{" "}
                                    </p>
                                </div>
                            </Link>
                        </div>
                        <img
                            className="h-[80%] md:h-[450px] lg:w-full xl:h-full rounded-[24px] object-cover"
                            src={test}
                            alt="test"
                        />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}

export default Home;
