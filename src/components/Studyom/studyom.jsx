import Stadyum from "/images/stadyum.jpg";
import { useLocation } from "react-router-dom";

function Studyom() {
    const { pathname } = useLocation()
    const STD = pathname == "/services"
    console.log(STD);

    return <div className={` ${STD ? "xl:w-full" : ""} z-50 relative w-[98%] md:w-[95%] lg:w-[90%] md:h-[395px] mx-auto md:rounded-[48px] overflow-hidden`}>
        <img
            src={Stadyum}
            className="md:absolute md:inset-0 md:w-full md:h-full object-contain md:object-cover rounded-[30px] md:rounded-[0]"
        />

        <img
            src={Stadyum}
            className="absolute hidden md:block w-full h-full object-cover blur-xl left-[-255px] [mask-image:linear-gradient(to_right,black_0%,black_35%,transparent_75%)] [-webkit-mask-image:linear-gradient(to_right,black_0%,black_35%,transparent_75%)]"
        />
        <div className="absolute flex flex-row items-center lg:flex-col lg:items-start justify-between w-[93%] left-4 mx-auto md:w-[95%] top-1/2 -translate-y-1/2 z-20">
            <div className="pt-4 lg:mt-0">
                <h2 className="text-[#D2FF00] text-[26px] sm:text-[45px] md:text-[64px] italic font-bold font-['Platypi']">
                    Interested?
                </h2>

                <h3 className="text-white text-[14px] sm:text-[25px] md:text-[48px] italic font-bold mb-8 font-['Platypi']">
                    That’s just the start.
                </h3>
            </div>
            <div className="bg-[#D2FF00] px-[24px] py-[18px] rounded-[8px] md:w-[280px] shadow-[0_8px_16px_0_#D2FF0029,0_71px_29px_0_#D2FF000A,0_40px_24px_0_#D2FF0021,0_18px_18px_0_#D2FF0036,0_4px_10px_0_#D2FF0040] flex justify-center items-center ">
                <p className="font-['Chakra_Petch'] font-bold text-[12px] sm:text-[16px] md:text-[20px] leading-[100%]  ">
                    View prices
                </p>
            </div>
        </div>
    </div>

}
export default Studyom