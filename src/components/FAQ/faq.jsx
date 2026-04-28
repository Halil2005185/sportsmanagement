import { useState } from "react";
import { FaArrowDown } from "react-icons/fa6";
import statistics from "/images/statistics.png"
import { BsStars } from "react-icons/bs";

function FAQ({ title }) {
    const [show, setShow] = useState(false)
    return <section className="flex flex-col justify-center gap-4 " >
        <div onClick={() => setShow(prev => !prev)} className="flex items-center justify-between border-b-[#535862] border-b-[1px] py-4 cursor-pointer ">
            <p className={` ${show ? "text-[#D2FF00]" : " text-white"} text-[18px] md:text-[35px] lg:text-[40px] italic font-['Platypi'] font-bold`}  >{title}</p>
            <FaArrowDown className={`${show ? "rotate-[180deg]" : " "} transition-all duration-150 text-[25px] md:text-[37px] text-[#D2FF00]`} />
        </div>
        <div className={`${show ? "h-[1000px] md:h-[900px] lg:h-[400px]" : "h-0"} transition-all duration-150 flex items-center justify-between lg:bg-[#1C1C1C] rounded-[36px] px-3 gap-4  overflow-hidden `} >
            <div className="hidden lg:flex items-center gap-4" >
                <div className="flex flex-col justify-center gap-4"  >
                    <div className="flex items-center gap-4" >
                        <div className="w-[55%] xl:h-[150px] bg-[#1C1C1C] border-[#D2FF00] border-[1px] rounded-[24px] py-[24px] px-[20px] ">
                            <p className=" xl:text-[20px] leading-[100%] font-['Chakra_Petch'] text-white " >We decode the opponent’s game plan, weaknesses, and key players, and provide you with visual and practical data tailored to your position.</p>
                        </div>
                        <div className="w-[45%] xl:h-[150px] bg-[#1C1C1C] border-[#D2FF00] border-[1px] rounded-[24px] py-[24px] px-[14px] ">
                            <p className=" xl:text-[20px] leading-[100%] font-['Chakra_Petch'] text-white " >Prepare for your match one step ahead of your opponent with customized detailed analytical reports.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3" >
                        <div className="bg-[#1C1C1C] border-[#535862] border-[1px] py-6 px-2 rounded-[24px] flex gap-2" >
                            <BsStars className="text-[#D2FF00] drop-shadow-[0_6px_23px_#D2FF00] lg:text-[50px]" />
                            <p className=" text-white xl:text-[24px] font-['Chakra_Petch'] leading-[100%] " >Analysis of the opponent’s team structure, formation, and strategic behaviors.</p>
                        </div>
                        <div className="bg-[#1C1C1C] border-[#535862] border-[1px] py-6 px-2 rounded-[24px] flex gap-2">
                            <BsStars className="text-[#D2FF00] drop-shadow-[0_6px_23px_#D2FF00] lg:text-[50px]" />
                            <p className=" text-white xl:text-[24px] font-['Chakra_Petch'] leading-[100%]">Analysis of the opponent’s team structure, formation, and strategic behaviors.</p>
                        </div>
                        <div className="bg-[#1C1C1C] border-[#535862] border-[1px] py-6 px-2 rounded-[24px] flex gap-2" >
                            <BsStars className="text-[#D2FF00] drop-shadow-[0_6px_23px_#D2FF00] lg:text-[50px]" />
                            <p className=" text-white xl:text-[24px] font-['Chakra_Petch'] leading-[100%] " >Analysis of the opponent’s team structure, formation, and strategic behaviors.</p>
                        </div>
                    </div>
                </div>
                <img src={statistics} alt="statistics" className="lg:w-[250px] xl:w-[350px] rounded-[24px] object-cover " />
            </div>
            <div className="flex flex-col lg:hidden items-center gap-4 w-full" >
                <div className="flex flex-col gap-4 lg:py-20" >
                    <div className="bg-[#D2FF00] border-[#D2FF00] border-[2px] rounded-[16px] p-4">
                        <p className=" text-[20px] leading-[100%] font-['Chakra_Petch']  " >We decode the opponent’s game plan, weaknesses, and key players, and provide you with visual and practical data tailored to your position.</p>
                    </div>
                    <img src={statistics} alt="statistics" className=" rounded-[16px] sm:h-[400px] mx-auto object-contain" />
                    <div className="bg-[#D2FF00] border-[#D2FF00] border-[2px] rounded-[16px] p-4" >
                        <p>Prepare for your match one step ahead of your opponent with customized detailed analytical reports.</p>
                    </div>
                </div>
                <div className="overflow-x-auto flex w-full items-center gap-4">
                    <div className="w-[310px] h-[253px] bg-[#1C1C1C] border-[#535862] border-[2px] flex gap-1 items-start  rounded-[36px] py-[24px] px-[16px] ">
                        <BsStars className="text-[#D2FF00] drop-shadow-[0_6px_23px_#D2FF00] text-[100px] self-start " />
                        <p className="text-[#FFFFFF] text-[24px] font-['Chakra_Petch'] " >Analysis of the opponent’s team structure, formation, and strategic behaviors.</p>
                    </div>
                    <div className="w-[310px] h-[253px] bg-[#1C1C1C] border-[#535862] border-[2px] flex gap-1 items-start  rounded-[36px] py-[24px] px-[16px] ">
                        <BsStars className="text-[#D2FF00] drop-shadow-[0_6px_23px_#D2FF00] text-[100px] self-start " />
                        <p className="text-[#FFFFFF] text-[24px] font-['Chakra_Petch'] " >Analysis of the opponent’s team structure, formation, and strategic behaviors.</p>
                    </div>
                    <div className="w-[310px] h-[253px] bg-[#1C1C1C] border-[#535862] border-[2px] flex gap-1 items-start  rounded-[36px] py-[24px] px-[16px] ">
                        <BsStars className="text-[#D2FF00] drop-shadow-[0_6px_23px_#D2FF00] text-[100px] self-start " />
                        <p className="text-[#FFFFFF] text-[24px] font-['Chakra_Petch'] " >Analysis of the opponent’s team structure, formation, and strategic behaviors.</p>
                    </div>
                    <div className="w-[310px] h-[253px] bg-[#1C1C1C] border-[#535862] border-[2px] flex gap-1 items-start  rounded-[36px] py-[24px] px-[16px] ">
                        <BsStars className="text-[#D2FF00] drop-shadow-[0_6px_23px_#D2FF00] text-[100px] self-start " />
                        <p className="text-[#FFFFFF] text-[24px] font-['Chakra_Petch'] " >Analysis of the opponent’s team structure, formation, and strategic behaviors.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
}
export default FAQ