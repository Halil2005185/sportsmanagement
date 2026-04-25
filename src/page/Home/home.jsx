import FootballCart from "../../components/FootballCart/footballCart";
import OurNumbers from "../../components/OurNumbers/ourNumbers";
import SportCard from "../../components/SportCard/sportCard";
import WhySports from "../../components/WhySports/whySports";
import Stadyum from "/images/stadyum.jpg";
import test from "/images/test.jpg";
import Logo from "/images/mainLogo.svg";
import Sbu from "/images/sbu.png";
import vedioBg from "/src/assets/bg.mp4";

function Home() {
    return (
        <section className=" relative w-screen bg-[#121212]">
            <div className=" w-screen  ">
                <video
                    src={vedioBg}
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls={false}
                    disablePictureInPicture
                    controlsList="nodownload nofullscreen noremoteplayback"
                    className="w-full  object-cover"
                ></video>
                <div className="absolute flex-col gap-3 flex z-40 top-1/3 left-1/2 -translate-x-[50%] w-[80%]">
                    <h1 className="text-center text-[#D2FF00] font-bold text-[64px] font-['Platypi'] italic ">
                        The power that shapes the game.
                    </h1>
                    <h3 className="text-white font-bold font-['Platypi'] italic text-[40px] text-center ">
                        Every move matters. Every second counts.
                    </h3>
                    <div className="flex items-center justify-center gap-4">
                        <div className="rounded-[8px] bg-[#D2FF00] shadow-[0_8px_16px_0_#C3FF1A29] py-[18px] px-[24px]">
                            <p className="font-['Geist'] font-bold text-[20px] leading-[100%] ">
                                Pricing Plans
                            </p>
                        </div>
                        <div className="rounded-[8px] border-[1px] border-[#D2FF00] py-[18px] px-[24px]">
                            <p className="text-[#D2FF00] font-['Geist'] font-bold text-[20px] leading-[100%] ">
                                Contact us
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" w-screen h-[822px] z-50 flex flex-col gap-6 py-[48px] px-[96px]">
                <h4 className="text-white font-['Platypi'] font-bold italic text-[32px] leading-[100%] w-[90%] pl-10 mx-auto  ">
                    Who<span className="text-[#D2FF00] px-2 leading-[100%]">We</span>Are
                </h4>
                <div className="flex items-center justify-evenly  ">
                    <FootballCart text="OA Sports is a multidisciplinary sports consulting and management firm that brings together diverse expertise under one roof." />
                    <FootballCart text="Our mission is to accompany professionals at all levels of sport, players, coaches, referees, clubs, and federations in building sustainable success through effective, long-term strategies." />
                    <FootballCart text="Every service we offer is meticulously designed to add value to your career and help you reach the top." />
                </div>
            </div>
            <div className=" w-screen  z-50 flex flex-col gap-6 py-[48px] px-[96px]">
                <h4 className="text-white font-['Platypi'] font-bold italic text-[32px] leading-[100%] w-[90%] pl-10 mx-auto  ">
                    Our<span className="text-[#D2FF00] px-2 leading-[100%]">Numbers</span>
                    Talks
                </h4>
                <div className="flex items-center justify-evenly  ">
                    <OurNumbers />
                    <OurNumbers />
                    <OurNumbers />
                </div>
            </div>

            <div className=" w-screen  z-50 flex flex-col gap-6 py-[48px] px-[96px]">
                <h4 className="text-white font-['Platypi'] font-bold italic text-[32px] leading-[100%] w-[90%] pl-10 mx-auto  ">
                    What
                    <span className="text-[#D2FF00] px-2 leading-[100%]">OA Sports</span>
                    do
                </h4>
                <div className="custom-scroll flex items-center gap-4 overflow-x-auto w-[85%] mx-auto">
                    <SportCard />
                    <SportCard />
                    <SportCard />
                    <SportCard />
                    <SportCard />
                </div>
            </div>

            <div className="z-50 flex flex-col gap-6 py-[48px] px-[96px]">
                <h4 className="text-white font-['Platypi'] font-bold italic text-[32px] leading-[100%] w-[90%] pl-10 mx-auto  ">
                    What
                    <span className="text-[#D2FF00] px-2 leading-[100%]">OA Sports</span>
                    do
                </h4>
                <div className="flex flex-wrap gap-6 justify-evenly w-[90%] mx-auto">
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

            <div className="z-50 relative w-[80%] h-[395px] mx-auto rounded-[48px] overflow-hidden">
                <img
                    src={Stadyum}
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <img
                    src={Stadyum}
                    className="
      absolute w-full h-full object-cover blur-xl left-[-255px]
      [mask-image:linear-gradient(to_right,black_0%,black_35%,transparent_75%)]
      [-webkit-mask-image:linear-gradient(to_right,black_0%,black_35%,transparent_75%)]
    "
                />
                <div className="absolute left-16 top-1/2 -translate-y-1/2 z-20">
                    <h2 className="text-[#D2FF00] text-[64px] italic font-bold font-['Platypi']">
                        Interested?
                    </h2>

                    <h3 className="text-white text-[48px] italic font-bold mb-8 font-['Platypi']">
                        That’s just the start.
                    </h3>

                    <div className="bg-[#D2FF00] px-[24px] py-[18px] rounded-[8px] w-[280px] shadow-[0_8px_16px_0_#D2FF0029,0_71px_29px_0_#D2FF000A,0_40px_24px_0_#D2FF0021,0_18px_18px_0_#D2FF0036,0_4px_10px_0_#D2FF0040] flex justify-center items-center ">
                        <p className="font-['Chakra_Petch'] font-bold text-[20px] leading-[100%]  ">
                            View prices
                        </p>
                    </div>
                </div>
            </div>
            <div className="relative ">
                <div className="absolute z-0 left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] w-[1071px] h-[50%] rounded-full bg-[#d0ff002a] blur-[400px]"></div>
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
                            <div className="w-[720px] h-[313px] rounded-[32px] bg-[#1C1C1C] p-3 flex">
                                <div>
                                    <h5 className="font-bold font-['Platypi'] italic text-[26px] text-[#D2FF00]">
                                        test
                                    </h5>

                                    <p className="font-['Chakra_Petch'] text-white text-[24px] leading-[100%] w-[90%]">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                        Libero debitis dicta consectetur sit eos impedit aperiam
                                        error maxime placeat quas!{" "}
                                    </p>
                                </div>

                                <img
                                    className="min-w-[307px] h-[289px] object-cover rounded-[20px]"
                                    src={test}
                                    alt="test"
                                />
                            </div>

                            <div className="w-[713px] h-[836px] rounded-[32px] p-3 bg-[#1C1C1C] flex flex-col justify-between">
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
                                    className="min-w-full h-[80%] object-cover rounded-[20px]"
                                    src={test}
                                    alt="test"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-6">
                            <div className="w-[506px] h-[672px] rounded-[32px] bg-[#1C1C1C] p-3 flex flex-col justify-between gap-3">
                                <div>
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
                                    className="min-w-full h-[74%] object-cover rounded-[20px]"
                                    src={test}
                                    alt="test"
                                />
                            </div>

                            <div className="bg-[#1C1C1C] p-3 w-[506px] h-[439px] rounded-[32px] flex flex-col gap-2 justify-between">
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
                                    className="min-w-full h-[60%] object-cover rounded-[20px]"
                                    src={test}
                                    alt="test"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[80%] min-h-[500px] pb-52 mx-auto">
                <h2 className="font-bold font-['Platypi'] text-[46px] leading-[100%] italic text-white ">Our <span className=" text-[#D2FF00] " >Partnership</span></h2>
                <div className="flex flex-col gap-8" >
                    <div className="flex items-center justify-center gap-2 ">
                        <img className="w-[150px]" src={Logo} alt="logo" />
                        <img className="w-[150px]" src={Sbu} alt="sbu" />
                    </div>
                    <div className="w-full h-[490px] flex justify-between items-center rounded-[32px] p-[28px] bg-[#1C1C1C] ">
                        <div className="flex flex-col gap-8 justify-evenly h-full " >
                            <h2 className=" text-[48px] leading-[100%] font-['Platypi'] text-white italic font-bold ">Partners with <span className="text-[#D2FF00]" >SBU university !</span></h2>
                            <div className="flex flex-col gap-8 " >
                                <p className="text-white text-[24px] font-['Chakra_Petch'] leading-[100%]">OA Sports is a multifaceted sports consulting and management company
                                    that brings together multidisciplinary expertise under one roof, OA Sports
                                    is a multifaceted sports consulting and management company that brings
                                    together multidisciplinary expertise under one roof.</p>
                                <p className="text-white text-[24px] font-['Chakra_Petch'] leading-[100%]" >OA Sports is a multifaceted sports consulting and management company
                                    that brings together multidisciplinary expertise under one roof.</p>
                            </div>
                            <div className="cursor-pointer py-[18px] px-6 rounded-[8px] bg-[#D2FF00] flex items-center w-[280px] justify-center shadow-[0_8px_16px_0_#D2FF0029,0_40px_24px_0_#D2FF0021,0_18px_18px_0_#D2FF0036,0_4px_10px_0_#D2FF0040] ">
                                <p className="font-bold text-[20px] font-['Chakra_Petch'] leading-[100%]  ">Pricing Plans</p>
                            </div>
                        </div>
                        <img className="h-full rounded-[24px]" src={test} alt="test" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
