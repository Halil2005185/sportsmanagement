import logoIcon from "/images/logoIcon.png"
import sbu from "/images/sbu.png"
import mans from "/images/mans.jpg"
function SbuUniversity() {
    return <section className="bg-[#1C1C1C] w-full h-fit rounded-[20px] lg:rounded-[40px] mt-10 py-[24px] lg:py-[48px] px-4 lg:px-[32px] gap-8 flex flex-col">
        <div className="flex items-center justify-between w-[90%] mx-auto">
            <div className="flex flex-col gap-[24px] lg:w-[60%]">
                <h4 className="italic font-bold leading-[100%] text-white text-[26px] lg:text-[32px] font-['Platypi'] ">Partners with <span className="text-[#D2FF00]">SBU university !</span></h4>
                <p className="text-[#FFFFFF] leading-[100%] lg:text-[24px] font-['Chakra_Petch']" >OA Sports is a multifaceted sports consulting and management company that brings together multidisciplinary expertise under one roof.</p>
                <div className="bg-[#D2FF00] w-full sm:w-[284px] flex justify-center items-center py-[18px] px-[24px] rounded-[8px] shadow-[0_8px_16px_0_#D2FF0029,0_40px_24px_0_#D2FF0021,0_18px_18px_0_#D2FF0036,0_4px_10px_0_#D2FF0040] ">
                    <p className="font-bold font-['Chakra_Petch'] text-[20px] leading-[100%]  ">Contact us</p>
                </div>
            </div>
            <div className="hidden xl:flex items-center">
                <img src={logoIcon} alt="logoIcon" className="w-[300px] xl:w-[400px]" />
                <img src={sbu} alt="sbu" className="w-[100px] xl:w-[200px]" />
            </div>
        </div>
        <div className="flex items-center gap-[24px] justify-between flex-wrap ">
            <img src={mans} alt="mans" className="md:w-[40%] lg:w-[18%] rounded-[16px]" />
            <img src={mans} alt="mans" className="md:w-[40%] lg:w-[18%] rounded-[16px]" />
            <img src={mans} alt="mans" className="md:w-[40%] lg:w-[18%] rounded-[16px]" />
            <img src={mans} alt="mans" className="md:w-[40%] lg:w-[18%] rounded-[16px]" />
            <img src={mans} alt="mans" className="md:w-[40%] lg:w-[18%] rounded-[16px]" />
        </div>
    </section>
}
export default SbuUniversity