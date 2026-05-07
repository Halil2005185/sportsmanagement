import { PiStarFourFill } from "react-icons/pi";
import bucnisMan from "/images/bucnisMan.png";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { useState } from "react";
import lights from "/images/lights.png";
import { useTranslation } from "react-i18next";

function AboutUsCard({ number, cardNum }) {
    const [show, setShow] = useState(number === "1");
    const { t } = useTranslation()
    return (
        <section className="flex w-full sm:w-fit">
            <div className="hidden lg:flex">
                <div
                    onClick={() => setShow((prev) => !prev)}
                    className={`${show ? "rounded-l-[20px] bg-[#D2FF00] " : "rounded-[20px] bg-[#1C1C1C]"} transition-all duration-150  flex flex-col items-center justify-between h-[530px]  w-[82px] py-[26px]  cursor-pointer `}
                >
                    <h2
                        className={`${show ? "text-black" : "text-white "} font-['Platypi'] italic font-bold text-[48px] leading-[100%]`}
                    >
                        {number}
                    </h2>
                    {show ? (
                        <FiMinus className=" text-[35px]" />
                    ) : (
                        <GoPlus className="text-[35px] text-white font-bold" />
                    )}
                </div>
                <div
                    className={`${show ? " w-[888px] px-6" : "w-[0]"} overflow-hidden transition-all duration-150 bg-[#1C1C1C]  h-[530px] py-10  flex flex-col gap-4 rounded-r-[20px]`}
                >
                    <p className="font-bold italic text-[26px] font-['Platypi'] text-[#D2FF00] ">
                        {t(`aboutUsCard.${cardNum}.title`)}
                    </p>
                    <div className=" relative flex items-center">
                        <div>
                            <div className=" h-fit lg:h-[172px] flex gap-4 p-6 rounded-[26px] ">
                                <PiStarFourFill className=" text-[#D2FF00] drop-shadow-[0px_6px_23px_#D2FF0080] text-[100px] pb-[50px] " />
                                <p className="text-[24px] leading-[100%] font-['Chakra_Petch'] text-white ">
                                    {t(`aboutUsCard.${cardNum}.points.point1`)}
                                </p>
                            </div>
                            <div className=" h-fit lg:h-[172px] flex gap-4 p-6 rounded-[26px] ">
                                <PiStarFourFill className=" text-[#D2FF00] drop-shadow-[0px_6px_23px_#D2FF0080] text-[100px] pb-[50px] " />
                                <p className="text-[24px] leading-[100%] font-['Chakra_Petch'] text-white ">
                                    {t(`aboutUsCard.${cardNum}.points.point2`)}

                                </p>
                            </div>
                        </div>
                        <img
                            src={bucnisMan}
                            alt="image"
                            className="w-[280px] rounded-[32px] "
                        />
                        <img
                            src={lights}
                            alt="image"
                            className="absolute right-[-10px] w-[400px] top-[-55px]"
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col-reverse lg:hidden w-[95%] sm:w-[90%] mx-auto">
                <div
                    onClick={() => setShow((prev) => !prev)}
                    className={`${show ? "rounded-b-[20px] bg-[#D2FF00] " : "rounded-[20px] bg-[#1C1C1C]"} transition-all duration-150 flex items-center justify-between h-[82px] w-full py-[26px] px-[20px]  cursor-pointer `}
                >
                    <h2
                        className={`${show ? "text-black" : "text-white "} font-['Platypi'] italic font-bold text-[48px] leading-[100%]`}
                    >
                        {number}
                    </h2>
                    {show ? (
                        <FiMinus className=" text-[35px]" />
                    ) : (
                        <GoPlus className="text-[35px] text-white font-bold" />
                    )}
                </div>
                <div
                    className={`${show ? " h-[750px] sm:h-[700px]  pt-4" : "h-0"} w-full px-6 overflow-hidden transition-all duration-150 bg-[#1C1C1C] flex flex-col gap-4 rounded-t-[20px]`}
                >
                    <p className="font-bold italic text-[26px] font-['Platypi'] text-[#D2FF00] ">
                        Management & Strategy Team
                    </p>
                    <div className=" relative flex flex-col gap-4 items-center">
                        <div>
                            <div className=" h-fit lg:h-[172px] flex gap-4 p-6 rounded-[26px] ">
                                <PiStarFourFill className=" text-[#D2FF00] drop-shadow-[0px_6px_23px_#D2FF0080] text-[100px] pb-[50px] " />
                                <p className=" md:text-[20px] lg:text-[24px] leading-[100%] font-['Chakra_Petch'] text-white ">
                                    OA Sports is a multidisciplinary sports consulting and
                                    management company that unites diverse expertise under one
                                    roof and views sports as a complete ecosystem.
                                </p>
                            </div>
                            <div className=" h-fit lg:h-[172px] flex gap-4 p-6 rounded-[26px] ">
                                <PiStarFourFill className=" text-[#D2FF00] drop-shadow-[0px_6px_23px_#D2FF0080] text-[100px] pb-[50px] " />
                                <p className="md:text-[20px] lg:text-[24px] leading-[100%] font-['Chakra_Petch'] text-white ">
                                    OA Sports is a multidisciplinary sports consulting and
                                    management company that unites diverse expertise under one
                                    roof and views sports as a complete ecosystem.
                                </p>
                            </div>
                        </div>
                        <img
                            src={bucnisMan}
                            alt="image"
                            className="w-[280px] rounded-[32px] "
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
export default AboutUsCard;
