import FootballCart from "../../components/FootballCart/footballCart";
import OurNumbers from "../../components/OurNumbers/ourNumbers";
import SportCard from "../../components/SportCard/sportCard";
import WhySports from "../../components/WhySports/whySports";
import test from "/images/test.jpg";
import Logo from "/images/mainLogo.svg";
import Sbu from "/images/sbu.png";
import vedioBg from "/src/assets/bg.mp4";
import { useState } from "react";
import Studyom from "../../components/Studyom/studyom";
import LatestNews from "../../components/LatestNews/latestNews";

function Home() {
    const [open, setOpen] = useState(true)
    return (
        <section className=" relative w-screen bg-[#121212]">
            <div className=" relative w-screen  ">
                <video
                    src={vedioBg}
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls={false}
                    disablePictureInPicture
                    controlsList="nodownload nofullscreen noremoteplayback"
                    className="w-full md:object-cover object-cover h-[400px] sm:h-fit "
                ></video>
                <div className="absolute flex-col gap-3 flex z-40 top-1/3 left-1/2 -translate-x-[50%] w-[98%]  md:w-[80%]">
                    <h1 className="text-center text-[#D2FF00] font-bold text-[24px] sm:text-[35px] md:[50px] lg:text-[60px] xl:text-[60px] font-['Platypi'] italic ">
                        The power that shapes the game.
                    </h1>
                    <h3 className="text-white font-bold font-['Platypi'] italic text-[16px] sm:text-[25px] md:[32px] lg:text-[38px] xl:text-[40px] text-center ">
                        Every move matters. Every second counts.
                    </h3>
                    <div className="flex items-center justify-center gap-1  ">
                        <div className="rounded-[8px] bg-[#D2FF00] shadow-[0_8px_16px_0_#C3FF1A29] md:py-[18px] md:px-[24px] p-4">
                            <p className="font-['Geist'] font-bold md:text-[20px] leading-[100%] ">
                                Pricing Plans
                            </p>
                        </div>
                        <div className="rounded-[8px] border-[1px] border-[#D2FF00] md:py-[18px] md:px-[24px] p-4">
                            <p className="text-[#D2FF00] font-['Geist'] font-bold md:text-[20px] leading-[100%] ">
                                Contact us
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" w-[100%]  lg:min-h-[822px] z-50 flex flex-col gap-6  lg:py-[48px] px-4 lg:px-[80px] xl:px-[96px] mt-4 ">
                <h4 className="text-white font-['Platypi'] font-bold italic text-[32px] leading-[100%] w-full mx-auto  ">
                    Who<span className="text-[#D2FF00] px-2 leading-[100%]">We</span>Are
                </h4>
                <div className=" flex lg:grid lg:grid-cols-3 overflow-x-auto lg:overflow-visible gap-6 w-full ">
                    <FootballCart text="OA Sports is a multidisciplinary sports consulting and management firm that brings together diverse expertise under one roof." />
                    <FootballCart text="Our mission is to accompany professionals at all levels of sport, players, coaches, referees, clubs, and federations in building sustainable success through effective, long-term strategies." />
                    <FootballCart text="Every service we offer is meticulously designed to add value to your career and help you reach the top." />
                </div>
            </div>


            <div className=" w-screen z-50 flex flex-col gap-6 lg:py-[48px] lg:px-[96px] px-4 py-8">
                <h4 className="text-white font-['Platypi'] font-bold italic text-[26px] lg:text-[32px] leading-[100%] w-[100%] mx-auto  ">
                    Our<span className="text-[#D2FF00] px-2 leading-[100%]">Numbers</span>
                    Talks
                </h4>
                <div className=" overflow-x-auto flex items-center justify-between gap-4 lg:gap-10 ">
                    <OurNumbers />
                    <OurNumbers />
                    <OurNumbers />
                </div>
            </div>



            <div className=" w-screen  z-50 flex flex-col gap-6 py-[48px] lg:px-[96px] px-4 ">
                <h4 className="text-white font-['Platypi'] font-bold italic text-[24px] sm:text-[32px] leading-[100%] w-full mx-auto  ">
                    What
                    <span className="text-[#D2FF00] px-2 leading-[100%]">OA Sports</span>
                    do
                </h4>
                <div className="custom-scroll flex flex-col md:flex-row md:items-center gap-4 overflow-x-auto w-[98%] md:w-full mx-auto">
                    <SportCard open={open} setOpen={setOpen} />
                    <SportCard />
                    <SportCard />
                    <SportCard />
                    <SportCard />
                </div>
            </div>



            <div className="z-50 flex flex-col gap-6 py-[48px] px-4 lg:px-[96px]">
                <h4 className="text-white font-['Platypi'] font-bold italic text-[26px] lg:text-[32px] leading-[100%] w-full mx-auto  ">
                    What
                    <span className="text-[#D2FF00] px-2 leading-[100%]">OA Sports</span>
                    do
                </h4>
                <div className="flex flex-wrap items-center gap-6 justify-evenly md:justify-between 2xl:justify-evenly w-full mx-auto">
                    <WhySports
                        title="A 360° perspective"
                        text="OA Sports is a multifaceted sports consulting and management company that brings together multidisciplinary expertise under one roof."
                    />
                    <WhySports
                        title="Real Experience"
                        text="OA Sports is a multifaceted sports consulting and management company that brings together multidisciplinary expertise under one roof."
                    />
                    <WhySports
                        title="Reports"
                        text="OA Sports is a multifaceted sports consulting and management company that brings together multidisciplinary expertise under one roof."
                    />
                    <WhySports
                        title="Real Partnership"
                        text="OA Sports is a multifaceted sports consulting and management company that brings together multidisciplinary expertise under one roof."
                    />
                    <WhySports
                        title="Interactive"
                        text="OA Sports is a multifaceted sports consulting and management company that brings together multidisciplinary expertise under one roof."
                    />
                    <WhySports
                        title="A 360° perspective"
                        text="OA Sports is a multifaceted sports consulting and management company that brings together multidisciplinary expertise under one roof."
                    />
                </div>
            </div>


            <Studyom />




            <div className="relative hidden lg:block ">
                <div className="absolute z-0 left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] xl:w-[1071px] h-[50%] rounded-full bg-[#d0ff002a] blur-[400px]"></div>
                <div className="relative z-20 flex flex-col gap-6 py-[48px] px-[96px]">
                    <div className="flex items-center justify-between w-[90%] mx-auto">
                        <h4 className="text-white font-['Platypi'] font-bold italic text-[32px] leading-[100%]">
                            What<span className="text-[#D2FF00] px-2">OA Sports</span>do
                        </h4>

                        <h5 className="text-white font-['Platypi'] font-bold italic text-[26px] leading-[100%]">
                            Show All
                        </h5>
                    </div>

                    <div className="flex gap-6 justify-evenly w-[90%] mx-auto">
                        <div className="flex flex-col gap-4">
                            <div className="w-[100%] min-h-[313px] rounded-[32px] bg-[#1C1C1C] p-3 flex flex-col  xl:flex-row gap-2">
                                <div>
                                    <h5 className="font-bold font-['Platypi'] italic text-[26px] text-[#D2FF00]  ">
                                        test
                                    </h5>

                                    <p className="font-['Chakra_Petch'] text-white text-[24px] leading-[100%] w-[90%]">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                        Libero debitis dicta consectetur sit eos impedit aperiam
                                        error maxime placeat quas!{" "}
                                    </p>
                                </div>

                                <img
                                    className="w-full xl:w-[90%] mx-auto h-[289px] object-cover rounded-[20px]"
                                    src={test}
                                    alt="test"
                                />
                            </div>

                            <div className="w-full h-[836px] xl:min-h-[836px] rounded-[32px] p-3 bg-[#1C1C1C] flex flex-col gap-4 justify-between">
                                <div>
                                    <h5 className="font-bold font-['Platypi'] italic text-[26px] text-[#D2FF00]">
                                        test
                                    </h5>

                                    <p className="font-['Chakra_Petch'] text-white text-[24px] leading-[100%] w-[90%]">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                        Quam laborum officia placeat beatae. Minima voluptatibus
                                        ipsa vero ab sed esse.{" "}
                                    </p>
                                </div>

                                <img
                                    className="w-full h-[80%] object-cover rounded-[20px]"
                                    src={test}
                                    alt="test"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-6">
                            <div className="w-full h-[672px] xl:min-h-[672px] rounded-[32px] bg-[#1C1C1C] p-3 flex flex-col justify-between gap-3">
                                <div >
                                    <h5 className="font-bold font-['Platypi'] italic text-[26px] text-[#D2FF00]">
                                        test
                                    </h5>

                                    <p className="font-['Chakra_Petch'] text-white text-[24px] leading-[100%] w-[90%]">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Nemo alias veniam, vel quas sapiente magni facere esse. Eos,
                                        est unde?{" "}
                                    </p>
                                </div>

                                <img
                                    className="w-full h-[74%] object-cover rounded-[20px]"
                                    src={test}
                                    alt="test"
                                />
                            </div>

                            <div className="bg-[#1C1C1C] p-3 w-full h-[439px] xl:min-h-[539px] rounded-[32px] flex flex-col gap-2 justify-between">
                                <div>
                                    <h5 className="font-bold font-['Platypi'] italic text-[26px] text-[#D2FF00]">
                                        test
                                    </h5>

                                    <p className="font-['Chakra_Petch'] text-white text-[24px] leading-[100%] w-[90%]">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                        Pariatur, totam libero velit fuga mollitia sint obcaecati!
                                        At molestiae alias sint!
                                    </p>
                                </div>

                                <img
                                    className="ull h-[60%] xl:h-[70%] object-cover rounded-[20px]"
                                    src={test}
                                    alt="test"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-10 flex lg:hidden flex-wrap gap-4 ">
                <LatestNews />
                <LatestNews />
                <LatestNews />
                <LatestNews />
                <LatestNews />
                <LatestNews />
            </div>

            <div className="w-[80%] h-[50%] lg:min-h-[500px] pb-20 md:pb-52 mx-auto gap-8 flex flex-col md:gap-0 ">
                <h2 className="font-bold font-['Platypi'] text-[30px] md:text-[46px] leading-[100%] italic text-white ">Our <span className=" text-[#D2FF00] " >Partnership</span></h2>
                <div className="flex flex-col gap-10 md:gap-8" >
                    <div className="flex items-center justify-center gap-2 ">
                        <img className="w-[121px]  md:w-[150px]" src={Logo} alt="logo" />
                        <img className="w-[121px] md:w-[150px]" src={Sbu} alt="sbu" />
                    </div>
                    <div className="w-full h-[20%] lg:min-h-[500px] xl:h-[490px] gap-8 flex flex-col-reverse lg:flex-row justify-between items-center rounded-[32px] md:p-[28px] md:bg-[#1C1C1C] ">
                        <div className="flex flex-col gap-8 justify-evenly h-full " >
                            <h2 className=" text-[26px] md:text-[48px] leading-[100%] font-['Platypi'] text-white italic font-bold ">Partners with <span className="text-[#D2FF00]" >SBU university !</span></h2>
                            <div className="flex flex-col gap-8 " >
                                <p className="text-white md:text-[24px] font-['Chakra_Petch'] leading-[100%]">OA Sports is a multifaceted sports consulting and management company
                                    that brings together multidisciplinary expertise under one roof, OA Sports
                                    is a multifaceted sports consulting and management company that brings
                                    together multidisciplinary expertise under one roof.</p>
                                <p className="text-white md:text-[24px] font-['Chakra_Petch'] leading-[100%]" >OA Sports is a multifaceted sports consulting and management company
                                    that brings together multidisciplinary expertise under one roof.</p>
                            </div>
                            <div className="cursor-pointer py-[18px] px-6 rounded-[8px] bg-[#D2FF00] flex items-center w-[280px] justify-center shadow-[0_8px_16px_0_#D2FF0029,0_40px_24px_0_#D2FF0021,0_18px_18px_0_#D2FF0036,0_4px_10px_0_#D2FF0040] ">
                                <p className="font-bold text-[20px] font-['Chakra_Petch'] leading-[100%]  ">Pricing Plans</p>
                            </div>
                        </div>
                        <img className="h-[80%] md:h-[450px] lg:w-full xl:h-full rounded-[24px] object-cover" src={test} alt="test" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
