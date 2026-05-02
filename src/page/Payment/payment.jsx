import { FaCcMastercard } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";

function Payment() {
    return <section className="bg-[#121212] py-3" >
        <div className="w-[90%] mx-auto">
            <h2 className="italic font-bold leading-[100%] py-8 font-['Platypi'] text-white text-[48px] pl-4">Complete your <span className="text-[#D2FF00]">payment</span></h2>
            <div className="w-full mx-auto rounded-[40px] py-8 px-4 bg-[#1C1C1C]">
                <div className="mx-auto w-[95%] rounded-[40px] flex flex-col-reverse lg:flex-row gap-8 sm:gap-16 lg:gap-0 items-center justify-between ">
                    <div className="w-full lg:w-[55%] flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <h5 className="font-['Platypi'] italic text-[#D5D7DA] text-[20px]  sm:text-[26px] font-bold">Card number</h5>
                            <div className="relative">
                                <input type="text" placeholder="0000 0000 0000 0000" className="text-white font-['Chakra_Petch'] sm:text-[26px]  w-full border-[1px] border-[#535862] bg-[#2B2B2B] rounded-[12px] px-[16px] py-[10px]" />
                                <div className=" hidden absolute top-1/2 -translate-y-[50%] right-4 sm:flex items-center gap-2 sm:text-[30px]">
                                    <FaCcMastercard className="text-[#F9A000]" />
                                    <FaCcVisa className="text-[#172B85]" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h5 className="font-['Platypi'] italic text-[#D5D7DA] text-[20px] sm:text-[26px] font-bold">Card holder name</h5>
                            <input type="text" placeholder="Name on card" className="text-white font-['Chakra_Petch'] sm:text-[26px]  w-full border-[1px] border-[#535862] bg-[#2B2B2B] rounded-[12px] px-[16px] py-[10px]" />
                        </div>
                        <div className="flex items-center gap-4 justify-between">
                            <div className="w-full flex flex-col gap-2">
                                <h5 className="font-['Platypi'] italic text-[#D5D7DA] sm:text-[26px] font-bold">Security code</h5>
                                <input type="text" placeholder="CVV" className="text-white font-['Chakra_Petch'] sm:text-[26px]  w-full border-[1px] border-[#535862] bg-[#2B2B2B] rounded-[12px] px-[16px] py-[10px]" />
                            </div>
                            <div className="flex w-full flex-col gap-2">
                                <h5 className="font-['Platypi'] italic text-[#D5D7DA] sm:text-[26px] font-bold">Expiry date</h5>
                                <input type="text" placeholder="MM/YY" className="text-white font-['Chakra_Petch'] sm:text-[26px]  w-full border-[1px] border-[#535862] bg-[#2B2B2B] rounded-[12px] px-[16px] py-[10px]" />
                            </div>
                        </div>
                        <div className="w-full bg-[#D2FF00] rounded-[8px] px-[12px] py-[12px] sm:px-[24px] sm:py-[18px] flex justify-center items-center shadow-[0px_8px_16px_0px_#D2FF0029,0px_71px_29px_0px_#D2FF000A,0px_40px_24px_0px_#D2FF0021,0px_18px_18px_0px_#D2FF0036,0px_4px_10px_0px_#D2FF0040] ">
                            <p className="font-['Geist'] font-bold sm:text-[24px] leading-[100%]   ">Pay Now</p>
                        </div>
                    </div>
                    <div className="w-full lg:w-[30%] rounded-[12px] p-2 sm:p-6 bg-[#1C1C1C] border-[1px] border-[#D2FF00]  ">
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
                    </div>
                </div>
            </div>
        </div>
    </section>
}
export default Payment 