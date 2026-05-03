import { LuCircleCheckBig } from "react-icons/lu";

function SuccessfulPayment() {
    return <section className="bg-[#121212]">
        <div className="w-[98%] md:w-[90%] mx-auto flex flex-col py-14 ">
            <div className="flex flex-col items-center justify-center">
                <LuCircleCheckBig className="drop-shadow-[10px_30px_84px_#D2FF00] font-bold text-[#D2FF00] text-[150px] text-[]" />
                <h2 className="italic font-bold leading-[100%] py-8 font-['Platypi'] text-white text-[26px] md:text-[48px] pl-4">Your payment was <span className="text-[#D2FF00]"> successfully </span>completed</h2>

            </div>
            <div>
                <div className="w-full lg:w-[35%] mx-auto rounded-[12px] p-2 sm:p-6 bg-[#1C1C1C] border-[1px] border-[#D2FF00]  ">
                    <h4 className="border-b-[1px] border-[#D5D7DA] text-[#D5D7DA] font-bold italic text-[20px] sm:text-[32px] font-['Platypi'] pl-2 pb-2 sm:p-[18px] " >Order details</h4>
                    <div className="flex items-center justify-between pt-4 pl-2 pb-2 sm:p-[18px]">
                        <p className="font-['Chakra_Petch'] leading-[100%] text-[#FFFFFF] " >Player plan</p>
                        <p className="text-white text-[Chakra_Petch] leading-[100%] ">$ 960.00</p>
                    </div>
                    <div className="flex flex-col gap-4 pt-4 pl-2 pb-3 sm:p-[18px]">
                        <p className="font-['Chakra_Petch'] leading-[100%] text-[#FFFFFF] ">RUB 940.00</p>
                        <div className="flex items-center justify-between">
                            <p className="font-['Chakra_Petch'] leading-[100%] font-bold text-[#FFFFFF]">Price</p>
                            <p className="text-white text-[Chakra_Petch] leading-[100%] "> RUB 940.00</p>
                        </div>
                        <p className="text-white font-['Chakra_Petch'] leading-[100%]">1 month</p>
                        <p className="text-white font-['Chakra_Petch'] leading-[100%]">Access</p>
                        <p className="text-white font-['Chakra_Petch'] leading-[100%]">Training</p>
                    </div>
                    <div className="border-t-[1px] border-[#D5D7DA] flex items-center justify-between pt-4 pl-2 pb-2 sm:p-[18px] ">
                        <p className="font-['Chakra_Petch'] leading-[100%] font-bold text-[#FFFFFF] text-[20px] ">Total</p>
                        <p className="text-white text-[Chakra_Petch] leading-[100%] font-bold text-[20px] "> RUB 960.00</p>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-full cursor-pointer bg-transparent border-[1px] border-[#D2FF00] rounded-[8px] px-[12px] py-[12px] sm:px-[24px] sm:py-[18px] flex justify-center items-center  ">
                            <p className="font-['Geist'] font-bold sm:text-[20px] leading-[100%] text-[#D2FF00]  text-center  ">Download invoice</p>
                        </div>
                        <div className="w-full   cursor-pointer bg-[#D2FF00] rounded-[8px] px-[12px] py-[12px] sm:px-[24px] sm:py-[18px] flex justify-center items-center">
                            <p className="font-['Geist'] font-bold sm:text-[20px] leading-[100%] ">Contact us</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}
export default SuccessfulPayment