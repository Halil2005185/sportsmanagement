import Stadyum from "/images/stadyum.jpg";

function Studyom() {
    return <div className="z-50 relative w-[98%] md:w-[95%] lg:w-[80%] md:h-[395px] mx-auto md:rounded-[48px] overflow-hidden">
        <img
            src={Stadyum}
            className="md:absolute md:inset-0 md:w-full md:h-full object-contain md:object-cover rounded-[30px] md:rounded-[0]"
        />

        <img
            src={Stadyum}
            className="absolute hidden md:block w-full h-full object-cover blur-xl left-[-255px] [mask-image:linear-gradient(to_right,black_0%,black_35%,transparent_75%)] [-webkit-mask-image:linear-gradient(to_right,black_0%,black_35%,transparent_75%)]"
        />
        <div className="absolute flex items-center justify-between w-[90%] mx-auto md:w-[80%] left-1/2 -translate-x-[50%] md:-translate-x-[0%] md:left-16 top-1/2 -translate-y-1/2 z-20">
            <div>
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