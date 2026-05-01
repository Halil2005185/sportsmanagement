import AboutUsCard from "../../components/AboutUsCard/aboutUsCard";
import goodMan from "/images/goodMan.png"
import { PiStarFourFill } from "react-icons/pi";
import { AiFillGitlab } from "react-icons/ai";
import Studyom from "../../components/Studyom/studyom";

function AboutUs() {
    return <section className="bg-[#121212]">
        <div className=" w-[96%] sm:w-[90%] mx-auto ">
            <h2 className="italic font-bold leading-[100%] py-8 font-['Platypi'] text-white text-[48px] pl-4"><span className="text-[#D2FF00]" >About</span>us</h2>
            <div>
                <div className="hidden lg:flex items-center flex-col lg:flex-row justify-between gap-4" >
                    <div className="flex flex-col items-center gap-4 w-[90%] lg:w-[50%]" >
                        <div className="bg-[#1C1C1C] w-[100%] h-fit lg:h-[172px] flex gap-4 border-[0.5px] border-[#D2FF00] p-6 rounded-[26px] ">
                            <PiStarFourFill className=" text-[#D2FF00] drop-shadow-[0px_6px_23px_#D2FF0080] text-[100px] pb-[50px] " />
                            <p className="text-[24px] leading-[100%] font-['Chakra_Petch'] text-white ">OA Sports is a multidisciplinary sports consulting and management company that unites diverse expertise under one roof and views sports as a complete ecosystem.</p>
                        </div>
                        <div className="bg-[#D2FF00] w-full h-fit lg:h-[172px] flex gap-4  p-6 rounded-[26px] ">
                            <PiStarFourFill className=" text-black drop-shadow-[0px_6px_23px_#121212] text-[100px] pb-[50px] " />
                            <p className="text-[24px] leading-[100%] font-['Chakra_Petch'] text-black ">OA Sports is a multidisciplinary sports consulting and management company that unites diverse expertise under one roof and views sports as a complete ecosystem.</p>
                        </div>
                        <div className="bg-[#1C1C1C] w-full h-fit lg:h-[172px] flex gap-4 border-[0.5px] border-[#D2FF00] p-6 rounded-[26px] ">
                            <PiStarFourFill className=" text-[#D2FF00] drop-shadow-[0px_6px_23px_#D2FF0080] text-[100px] pb-[50px] " />
                            <p className="text-[24px] leading-[100%] font-['Chakra_Petch'] text-white ">OA Sports is a multidisciplinary sports consulting and management company that unites diverse expertise under one roof and views sports as a complete ecosystem.</p>
                        </div>
                    </div>
                    <img src={goodMan} alt="image" className="w-[30%] " />
                </div>
                <div className="flex lg:hidden items-center flex-col lg:flex-row justify-between gap-4" >
                    <div className="flex flex-col items-center gap-4 w-[90%] lg:w-[50%]" >
                        <div className="bg-[#1C1C1C] w-[100%] h-fit lg:h-[172px] flex gap-4 border-[0.5px] border-[#D2FF00] p-6 rounded-[26px] ">
                            <PiStarFourFill className=" text-[#D2FF00] drop-shadow-[0px_6px_23px_#D2FF0080] text-[100px] pb-[50px] " />
                            <p className="text-[24px] leading-[100%] font-['Chakra_Petch'] text-white ">OA Sports is a multidisciplinary sports consulting and management company that unites diverse expertise under one roof and views sports as a complete ecosystem.</p>
                        </div>
                        <img src={goodMan} alt="image" className="w-[80%] sm:w-[50%] py-10 " />
                        <div className="bg-[#D2FF00] w-full h-fit lg:h-[172px] flex gap-4  p-6 rounded-[26px] ">
                            <PiStarFourFill className=" text-black drop-shadow-[0px_6px_23px_#121212] text-[100px] pb-[50px] " />
                            <p className="text-[24px] leading-[100%] font-['Chakra_Petch'] text-black ">OA Sports is a multidisciplinary sports consulting and management company that unites diverse expertise under one roof and views sports as a complete ecosystem.</p>
                        </div>
                        <div className="bg-[#1C1C1C] w-full h-fit lg:h-[172px] flex gap-4 border-[0.5px] border-[#D2FF00] p-6 rounded-[26px] ">
                            <PiStarFourFill className=" text-[#D2FF00] drop-shadow-[0px_6px_23px_#D2FF0080] text-[100px] pb-[50px] " />
                            <p className="text-[24px] leading-[100%] font-['Chakra_Petch'] text-white ">OA Sports is a multidisciplinary sports consulting and management company that unites diverse expertise under one roof and views sports as a complete ecosystem.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h4 className="italic font-bold leading-[100%] py-8 font-['Platypi'] text-white text-[26px] lg:text-[32px] pl-4">A <span className="text-[#D2FF00]" >Holistic</span>  Approach</h4>
                <div className="flex flex-col  lg:flex-row items-center gap-8 lg:overflow-x-auto custom-scroll pt-2 py-4">
                    <AboutUsCard number="1" />
                    <AboutUsCard number="2" />
                    <AboutUsCard number="3" />
                    <AboutUsCard number="4" />
                </div>
            </div>
            <div>
                <h4 className="italic font-bold leading-[100%] py-8 font-['Platypi'] text-white text-[26px] lg:text-[32px] pl-4">More Than Consulting — A Strategic  <span className="text-[#D2FF00]" >Partnership</span></h4>
                <div className="flex lg:flex-row flex-col lg:items-center gap-8 my-10 ">
                    <div className="lg:w-[33%] border-[1px] border-[#D2FF00] bg-[#1C1C1C] h-[222px] lg:self-end rounded-[24px] flex justify-center items-center flex-col">
                        <AiFillGitlab className="text-[#D2FF00] text-[60px]" />
                        <p className="text-[20px] font-['Chakra_Petch'] leading-[100%] text-white text-center">We are not just a consulting company; we are your strategic partner in your sports journey.</p>
                    </div>
                    <div className="lg:w-[33%] border-[1px] border-[#D2FF00] bg-[#1C1C1C] h-[222px] lg:h-[254px] rounded-[24px] flex  items-center flex-col justify-evenly">
                        <AiFillGitlab className="text-[#D2FF00] text-[60px]" />
                        <p className="text-[20px] font-['Chakra_Petch'] leading-[100%] text-white text-center w-[90%] ">We manage the planning behind the scenes with professionalism and strengthen your performance.</p>                    </div>
                    <div className="lg:w-[33%] border-[1px] border-[#D2FF00] bg-[#1C1C1C] h-[222px] lg:self-end rounded-[24px] flex justify-center items-center flex-col">
                        <AiFillGitlab className="text-[#D2FF00] text-[60px]" />
                        <p className="text-[20px] font-['Chakra_Petch'] leading-[100%] text-white text-center">We are not just a consulting company; we are your strategic partner in your sports journey.</p>                    </div>
                </div>
            </div>
            <div className="py-8 w-full">
                <Studyom />
            </div>
        </div>
    </section>
}
export default AboutUs