import FootballCart from "../../components/FootballCart/footballCart";
import OurNumbers from "../../components/OurNumbers/ourNumbers";
import SportCard from "../../components/SportCard/sportCard";
import vedioBg from "/src/assets/bg.mp4"
function Home() {
    return (
        <section className=" w-full bg-[#121212]">
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
                <div className="absolute flex-col gap-3 flex z-50 top-1/3 left-1/2 -translate-x-[50%] w-[80%]">
                    <h1 className="text-center text-[#D2FF00] font-bold text-[64px] font-['Platypi'] italic ">The power that shapes the game.</h1>
                    <h3 className="text-white font-bold font-['Platypi'] italic text-[40px] text-center ">Every move matters. Every second counts.</h3>
                    <div className="flex items-center justify-center gap-4">
                        <div className="rounded-[8px] bg-[#D2FF00] shadow-[0_8px_16px_0_#C3FF1A29] py-[18px] px-[24px]">
                            <p className="font-['Geist'] font-bold text-[20px] leading-[100%] ">Pricing Plans</p>
                        </div>
                        <div className="rounded-[8px] border-[1px] border-[#D2FF00] py-[18px] px-[24px]">
                            <p className="text-[#D2FF00] font-['Geist'] font-bold text-[20px] leading-[100%] ">Contact us</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" w-screen h-[822px] z-50 flex flex-col gap-6 py-[48px] px-[96px]">
                <h4 className="text-white font-['Platypi'] font-bold italic text-[32px] leading-[100%] w-[90%] pl-10 mx-auto  ">Who<span className="text-[#D2FF00] px-2 leading-[100%]">We</span>Are</h4>
                <div className="flex items-center justify-evenly  ">
                    <FootballCart text="OA Sports is a multidisciplinary sports consulting and management firm that brings together diverse expertise under one roof." />
                    <FootballCart text="Our mission is to accompany professionals at all levels of sport, players, coaches, referees, clubs, and federations in building sustainable success through effective, long-term strategies." />
                    <FootballCart text="Every service we offer is meticulously designed to add value to your career and help you reach the top." />
                </div>
            </div>
            <div className=" w-screen  z-50 flex flex-col gap-6 py-[48px] px-[96px]">
                <h4 className="text-white font-['Platypi'] font-bold italic text-[32px] leading-[100%] w-[90%] pl-10 mx-auto  ">Our<span className="text-[#D2FF00] px-2 leading-[100%]">Numbers</span>Talks</h4>
                <div className="flex items-center justify-evenly  ">
                    <OurNumbers />
                    <OurNumbers />
                    <OurNumbers />
                </div>
            </div>

            <div className=" w-screen  z-50 flex flex-col gap-6 py-[48px] px-[96px]">
                <h4 className="text-white font-['Platypi'] font-bold italic text-[32px] leading-[100%] w-[90%] pl-10 mx-auto  ">What<span className="text-[#D2FF00] px-2 leading-[100%]">OA Sports</span>do</h4>
                <div className="custom-scroll flex items-center gap-4 overflow-x-auto w-[100%]">
                    <SportCard  />
                    <SportCard />
                    <SportCard />
                    <SportCard />
                    <SportCard />
                </div>
            </div>
        </section>

    );
}

export default Home;