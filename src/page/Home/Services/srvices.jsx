import { useState } from "react"
import { BsStars } from "react-icons/bs";
import footballPlayer from "/images/footballPlayer.png"
import FAQ from "../../../components/FAQ/faq";
import GainFrom from "../../../components/GainFrom/gainFrom";
import Studyom from "../../../components/Studyom/studyom";
import WhyOaSports from "../../../components/WhyOaSports/whyOaSport";
import blackman from "/images/blackman.png"
import blueman from "/images/blueman.png"
import grawman from "/images/grawman.png"
import tabletman from "/images/tabletman.png"
import StartingJourney from "../../../components/StartingJourney/startingJourney";
import hack from "/images/hack.png"
import manandgoogle from "/images/manandgoogle.png"
import flash from "/images/flash.png"
import map from "/images/map.png"
import dashbord from "/images/dashbord.png"

function Services() {
    const AllServices = [
        { id: 1, label: "What Do These Services Bring You?" },
        { id: 2, label: "Strategic Advantage" },
        { id: 3, label: "Performance Optimizatio" },
        { id: 4, label: "360° Multidisciplinary Career Support" },
        { id: 5, label: "Professional Partnership" },
        { id: 6, label: "What Do These Services Bring You?" },
        { id: 7, label: "Become the Architect of Your Career" },

    ]
    const [serviceNum, setServiceNum] = useState(1)
    return <section className="py-20 bg-[#121212] ">
        <div className=" w-[90%] mx-auto flex flex-col gap-8">
            <div className="bg-[#1C1C1C] h-fit lg:min-h-[245px] xl:h-[245px] items-center text-[13px] sm:text-[16px] md:p-[24px] p-2 rounded-[24px] flex gap-8 flex-wrap ">
                {AllServices.map((service) => (<p key={service.id} onClick={() => setServiceNum(service.id)} className={`${service.id == serviceNum ? "bg-[#D2FF00] text-black rounded-[100px]" : "text-white"}  md:text-[24px] italic font-bold font-['Platypi'] w-fit cursor-pointer  py-3 px-1`} >{service.label}</p>))}
            </div>
            <div className="flex flex-col lg:flex-row  justify-between items-center gap-4" >
                <div className="lg:w-[50%]">
                    <h2 className="text-[#D2FF00] [text-shadow:0_0_30px_rgba(195,255,26,.7)] w-fit font-['Platypi'] font-bold italic leading-[100%] text-[24px] md:text-[48px] " >{AllServices[serviceNum - 1].label}</h2>
                    <div className="flex flex-col gap-1 ">
                        <div className="flex items-center gap-4 md:w-[750px] py-3 px-1">
                            <BsStars className="text-[#D2FF00] drop-shadow-[0_6px_23px_#D2FF00] text-[100px]" />
                            <p className="text-['Chakra_Petch'] md:text-[24px] leading-[100%] text-white " >To stay at the top of football, talent alone is not enough — you need the right strategy and complete professional support.</p>
                        </div>
                        <div className="flex items-center gap-4 md:w-[750px] py-3 px-1">
                            <BsStars className="text-[#D2FF00] drop-shadow-[0_6px_23px_#D2FF00] text-[100px]" />
                            <p className="text-['Chakra_Petch'] md:text-[24px] leading-[100%] text-white " >To stay at the top of football, talent alone is not enough — you need the right strategy and complete professional support.</p>
                        </div>
                        <div className="flex items-center gap-4 md:w-[750px] py-3 px-1 ">
                            <BsStars className="text-[#D2FF00] drop-shadow-[0_6px_23px_#D2FF00] text-[100px]" />
                            <p className="text-['Chakra_Petch'] md:text-[24px] leading-[100%] text-white " >To stay at the top of football, talent alone is not enough — you need the right strategy and complete professional support.</p>
                        </div>
                        <div className="flex items-center gap-4 md:w-[750px] py-3 px-1 ">
                            <BsStars className="text-[#D2FF00] drop-shadow-[0_6px_23px_#D2FF00] text-[100px]" />
                            <p className="text-['Chakra_Petch'] md:text-[24px] leading-[100%] text-white " >To stay at the top of football, talent alone is not enough — you need the right strategy and complete professional support.</p>
                        </div>
                        <div className="flex items-center gap-4 md:w-[750px] py-3 px-1">
                            <BsStars className="text-[#D2FF00] drop-shadow-[0_6px_23px_#D2FF00] text-[100px]" />
                            <p className="text-['Chakra_Petch'] md:text-[24px] leading-[100%] text-white " >To stay at the top of football, talent alone is not enough — you need the right strategy and complete professional support.</p>
                        </div>
                    </div>
                    <div className="bg-[#D2FF00] cursor-pointer rounded-[8px] py-[18px] px-[24px] shadow-[0_8px_16px_0_#D2FF0029,0_40px_24px_0_#D2FF0021,0_18px_18px_0_#D2FF0036,0_4px_10px_0_#D2FF0040] w-[286px] flex items-center justify-center " >
                        <p className="font-['Chakra_Petch'] font-bold leading-[100%] text-[20px] ">Buy Now</p>
                    </div>
                </div>
                <img src={footballPlayer} alt="footballPlayer" className="lg:w-[50%] lg:pl-52 xl:pl-0" />
            </div>
            <div>
                <FAQ title="01 Strategic Advantage" />
                <FAQ title="02 Performance Optimization" />
                <FAQ title="04 360° Multidisciplinary Professional Support" />
                <FAQ title="03 Professional Partnership" />
            </div>

            <div className="flex flex-col justify-center gap-4 mt-20" >
                <h2 className="text-white font-bold italic text-[48px] font-['Platypi']" >What you <span className="text-[#D2FF00]" >Gain </span> from this service</h2>
                <div className="custom-scroll flex items-center gap-4 md:gap-8 overflow-x-auto  ">
                    <GainFrom />
                    <GainFrom />
                    <GainFrom />
                    <GainFrom />
                    <GainFrom />
                    <GainFrom />
                </div>
            </div>

            <Studyom />

            <div className="flex flex-col gap-4 mt-20">
                <h2 className="text-white italic font-bold text-[48px] font-['Platypi'] leading-[100%]">Why <span className="text-[#D2FF00]" >OA Sports </span></h2>
                <div className="flex items-center gap-4 flex-wrap justify-around ">
                    <WhyOaSports image={blackman} />
                    <WhyOaSports image={blueman} />
                    <WhyOaSports image={grawman} />
                    <WhyOaSports image={tabletman} />
                </div>
            </div>

            <div className=" flex flex-col gap-8 mt-20 ">
                <h2 className="italic font-bold text-[48px] font-['Platypi'] leading-[100%] text-white "> <span className="text-[#D2FF00]">Starting </span> the Journey</h2>
                <div className="flex items-center flex-wrap justify-between w-full gap-5  md:gap-20 lg:gap-8 xl:gap-8">
                    <StartingJourney number={"01"} image={hack} />
                    <StartingJourney number={"02"} image={manandgoogle} />
                    <StartingJourney number={"03"} image={flash} />
                    <StartingJourney number={"04"} image={map} />
                    <StartingJourney number={"05"} image={dashbord} />
                    <div className=" relative w-full md:w-[44%] lg:w-[48%] h-[510px] lg:h-[600px]  rounded-[32px] flex flex-col justify-between gap-4 " >
                        <div className="flex flex-col justify-between h-[70%]">
                            <h2 className="text-[26px] lg:text-[48px] font-bold leading-[100%] font-['Platypi'] text-[#D2FF00] italic ">OA Sports — A step forward starts with a strong team.</h2>
                            <p className="text-white text-[Chakra_Petch] leading-[100%] text-[20px] lg:text-[28px]">Your next step toward mastering your career and reaching your full potential begins with strategy and strong support behind you.</p>
                            <p className="text-white text-[Chakra_Petch] leading-[100%] text-[20px] lg:text-[28px]">Let’s take that step together today.</p>
                        </div>
                        <div className="w-full md:w-[284px] flex items-center justify-center rounded-[8px] py-[18px] px-[24px] cursor-pointer bg-[#D2FF00] shadow-[0_8px_16px_0_#D2FF0029,0_71px_29px_0_#D2FF000A,0_40px_24px_0_#D2FF0021,0_18px_18px_0_#D2FF0036,0_4px_10px_0_#D2FF0040]">
                            <p className="font-['Chakra_Petch'] font-bold text-[20px] leading-[100%] ">Let’s start Now</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    </section >
}
export default Services 