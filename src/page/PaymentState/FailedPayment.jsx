
import { LuCircleX } from "react-icons/lu";
function FailedPayment() {
    return <section className="bg-[#121212]">
        <div className="md:w-[90%] mx-auto flex flex-col gap-8 py-14 ">
            <div className="flex flex-col items-center justify-center">
                <LuCircleX className="drop-shadow-[10px_30px_84px_#D2FF00] font-bold text-[#D2FF00] text-[150px] text-[]" />
                <h2 className="italic font-bold leading-[100%] py-8 font-['Platypi'] text-center text-white text-[26px] md:text-[48px] pl-4">We <span className="text-[#D2FF00]"> couldn’t complete </span>your payment</h2>
            </div>
            <div>
                <div className="cursor-pointer w-[90%] sm:w-[30%] mx-auto bg-[#D2FF00] rounded-[8px] px-[12px] py-[12px] sm:px-[24px] sm:py-[18px] flex justify-center items-center shadow-[0px_8px_16px_0px_#D2FF0029,0px_71px_29px_0px_#D2FF000A,0px_40px_24px_0px_#D2FF0021,0px_18px_18px_0px_#D2FF0036,0px_4px_10px_0px_#D2FF0040] ">
                    <p className="font-['Geist'] font-bold sm:text-[24px] leading-[100%] ">Contact Us</p>
                </div>
            </div>
        </div>
    </section>
}
export default FailedPayment