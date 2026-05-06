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

    const viewport = { once: true, amount: 0.1, margin: "0px 0px -150px 0px" };

    function Home() {
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
                            The power that shapes the game.
                        </motion.h1>

                        <motion.h3
                            variants={item}
                            className="text-white font-bold font-['Platypi'] italic text-[16px] sm:text-[25px] md:text-[32px] lg:text-[38px] xl:text-[40px] text-center"
                        >
                            Every move matters. Every second counts.
                        </motion.h3>

                        <motion.div
                            variants={item}
                            className="flex items-center justify-center gap-1"
                        >
                            <motion.div
                                variants={item}
                                className="rounded-[8px] bg-[#D2FF00] shadow-[0_8px_16px_0_#C3FF1A29] md:py-[18px] md:px-[24px] p-4"
                            >
                                <p className="font-['Geist'] font-bold md:text-[20px] leading-[100%]">
                                    Services
                                </p>
                            </motion.div>

                            <motion.div
                                variants={item}
                                className="rounded-[8px] border-[1px] border-[#D2FF00] md:py-[18px] md:px-[24px] p-4"
                            >
                                <p className="text-[#D2FF00] font-['Geist'] font-bold md:text-[20px] leading-[100%]">
                                    Contact us
                                </p>
                            </motion.div>
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
                        Who<span className="text-[#D2FF00] px-2 leading-[100%]">We</span>Are
                    </motion.h4>

                    <motion.div
                        variants={container}
                        className="flex lg:grid lg:grid-cols-3 overflow-x-auto lg:overflow-visible gap-6 w-full"
                    >
                        <motion.div variants={item}>
                            <FootballCart text="OA Sports is a multidisciplinary sports consulting and management firm that brings together diverse expertise under one roof." />
                        </motion.div>

                        <motion.div variants={item}>
                            <FootballCart text="Our mission is to accompany professionals at all levels of sport, players, coaches, referees, clubs, and federations in building sustainable success through effective, long-term strategies." />
                        </motion.div>

                        <motion.div variants={item}>
                            <FootballCart text="Every service we offer is meticulously designed to add value to your career and help you reach the top." />
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
                        Our<span className="text-[#D2FF00] px-2 leading-[100%]">Numbers</span>
                        Talks
                    </motion.h4>
                    <motion.div
                        variants={container}
                        className="overflow-x-auto flex items-center justify-between gap-4 lg:gap-10"
                    >
                        <motion.div variants={item}>
                            <OurNumbers
                                number="15+"
                                title="Years of Industry Experience"
                                text="In-depth experience gained in the global dynamics of football, focusing on strategy, 360° performance analysis, and career management."
                            />
                        </motion.div>
                        <motion.div variants={item}>
                            <OurNumbers
                                number="6+"
                                title="Partner"
                                text="Core team specializing in performance analysis, sports science, scouting, data analytics, and mental support, providing 360° service."
                            />
                        </motion.div>
                        <motion.div variants={item}>
                            <OurNumbers
                                number="42+"
                                title="Global Connection Point"
                                text="More than 42 strong and active international relationships established across different continents for elite-level career management, squad planning, and strategic collaborations."
                            />{" "}
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
                        What
                        <span className="text-[#D2FF00] px-2 leading-[100%]">OA Sports</span>
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
                                title="For Players"
                                text="We provide comprehensive career consulting, performance development, and representation support to help transform your potential into performance—and your performance into a lasting career."
                            />
                        </motion.div>
                        <motion.div variants={item}>
                            <SportCard
                                image={image2}
                                title="For Coaches"
                                text="We partner in your career planning and professional growth, delivering technical development and guidance."
                            />
                        </motion.div>
                        <motion.div variants={item}>
                            <SportCard
                                image={image3}
                                title="For Referees"
                                text="We offer all the professional support needed for an elite-level career through development‑focused advisory services."
                            />
                        </motion.div>
                        <motion.div variants={item}>
                            <SportCard
                                image={image4}
                                title="For Teams and Professionals"
                                text="We add vision to ambition‑driven clubs with squad planning, scouting, and recruitment services."
                            />
                        </motion.div>
                        <motion.div variants={item}>
                            <SportCard
                                image={image5}
                                title="For Federations"
                                text="We support fair and high‑quality competition with referee consultancy and training solutions."
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
                        What
                        <span className="text-[#D2FF00] px-2 leading-[100%]">OA Sports</span>
                    </motion.h4>
                    <motion.div
                        variants={container}
                        className="flex flex-wrap items-center gap-6 justify-evenly md:justify-between 2xl:justify-evenly w-full mx-auto"
                    >
                        <motion.div
                            variants={item}
                            className="sm:w-[48%] lg:w-[45%] xl:w-[32%]"
                        >
                            <WhySports
                                title="Interdisciplinary Expert Team"
                                text="The strength of OA Sports comes from its interdisciplinary team that approaches sports from every angle. With our expert staff built on four main pillars, we secure your future."
                            />
                        </motion.div>
                        <motion.div
                            variants={item}
                            className="sm:w-[48%] lg:w-[45%] xl:w-[32%]"
                        >
                            <WhySports
                                title="Management & Strategy Team"
                                text="We shape your long-term career roadmap and define your vision. With strategic guidance in representation, negotiation processes, and contract management, we open the path ahead of you."
                            />
                        </motion.div>
                        <motion.div
                            variants={item}
                            className="sm:w-[48%] lg:w-[45%] xl:w-[32%]"
                        >
                            <WhySports
                                title="Technical & Tactical Team"
                                text="We provide specialized analyses, on-field development plans, and technical guidance to enhance your performance."
                            />
                        </motion.div>
                        <motion.div
                            variants={item}
                            className="sm:w-[48%] lg:w-[45%] xl:w-[32%]"
                        >
                            <WhySports
                                title="Scouting, Analysis & Recruitment Team"
                                text="We match talent with the right opportunities using data-driven systems."
                            />
                        </motion.div>
                        <motion.div
                            variants={item}
                            className="sm:w-[48%] lg:w-[45%] xl:w-[32%]"
                        >
                            <WhySports
                                title="Medical, Health & Sports Science Team"
                                text="We reduce injury risk, improve performance, and provide personalized preparation support."
                            />
                        </motion.div>
                        <motion.div
                            variants={item}
                            className="sm:w-[48%] lg:w-[45%] xl:w-[32%]"
                        >
                            <WhySports
                                title="A 360° perspective"
                                text="This holistic approach helps you find a strategic partner dedicated to your career and delivers the most accurate and reliable solutions to your needs."
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
                                What<span className="text-[#D2FF00] px-2">OA Sports</span>do
                            </motion.h4>

                            <motion.h5
                                variants={item}
                                className="text-white font-['Platypi'] font-bold italic text-[26px] leading-[100%]"
                            >
                                Show All
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
                                            Match Analysis
                                        </h5>
                                        <p className="font-['Chakra_Petch'] text-white text-[24px] leading-[100%] w-[90%]">
                                            Detailed reports to help players and teams understand
                                            performance, improve decisions, and build better strategies.
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
                                            Career Strategy
                                        </h5>
                                        <p className="font-['Chakra_Petch'] text-white text-[24px] leading-[100%] w-[90%]">
                                            We guide athletes step by step with professional planning,
                                            long-term goals, and clear development paths.
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
                                            Performance Support
                                        </h5>
                                        <p className="font-['Chakra_Petch'] text-white text-[24px] leading-[100%] w-[90%]">
                                            Improve your physical, technical, and mental performance
                                            with expert support designed for modern football.
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
                                            Club Consulting
                                        </h5>
                                        <p className="font-['Chakra_Petch'] text-white text-[24px] leading-[100%] w-[90%]">
                                            Smart consulting solutions for clubs, academies, and
                                            federations to grow stronger and work more professionally.
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
                    <motion.div
                        variants={item}
                        className="w-[98%] mx-auto md:w-[331px] min-h-[303px] py-2"
                    >
                        <LatestNews />
                    </motion.div>
                    <motion.div
                        variants={item}
                        className="w-[98%] mx-auto md:w-[331px] min-h-[303px] py-2"
                    >
                        <LatestNews />
                    </motion.div>
                    <motion.div
                        variants={item}
                        className="w-[98%] mx-auto md:w-[331px] min-h-[303px] py-2"
                    >
                        <LatestNews />
                    </motion.div>
                    <motion.div
                        variants={item}
                        className="w-[98%] mx-auto md:w-[331px] min-h-[303px] py-2"
                    >
                        <LatestNews />
                    </motion.div>
                    <motion.div
                        variants={item}
                        className="w-[98%] mx-auto md:w-[331px] min-h-[303px] py-2"
                    >
                        <LatestNews />
                    </motion.div>
                    <motion.div
                        variants={item}
                        className="w-[98%] mx-auto md:w-[331px] min-h-[303px] py-2"
                    >
                        <LatestNews />
                    </motion.div>
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
                        Our <span className=" text-[#D2FF00] ">Partnership</span>
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
                                    Official Partnership with 
                                    <span className="text-[#D2FF00]"> SBU university !</span>
                                </h2>
                                <div className="flex flex-col gap-8 ">
                                    <p className="text-white md:text-[24px] font-['Chakra_Petch'] leading-[100%]">
                                        OA Sports proudly collaborates with SBU University to create
                                        new opportunities for athletes, students, and sports
                                        professionals through innovation, education, and strategic
                                        development.
                                    </p>
                                    <p className="text-white md:text-[24px] font-['Chakra_Petch'] leading-[100%]">
                                        This partnership combines academic excellence with real-world
                                        sports expertise to support the next generation of talent and
                                        build a stronger future for modern sports.
                                    </p>
                                </div>
                                <div className="cursor-pointer py-[18px] px-6 rounded-[8px] bg-[#D2FF00] flex items-center w-[280px] justify-center shadow-[0_8px_16px_0_#D2FF0029,0_40px_24px_0_#D2FF0021,0_18px_18px_0_#D2FF0036,0_4px_10px_0_#D2FF0040] ">
                                    <p className="font-bold text-[20px] font-['Chakra_Petch'] leading-[100%]">
                                        Explore Partnership{" "}
                                    </p>
                                </div>
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
