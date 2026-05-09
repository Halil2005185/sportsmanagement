import Stadyum from "/images/stadyum.jpg";
import { useLocation } from "react-router-dom";
import { motion } from 'framer-motion';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import i18n from "../../i18n";

const MotionLink = motion.create(Link)
const currentLang = i18n.language || localStorage.getItem("lang") || "en";
const container = {
    hidden: {},
    show: {
        transition: {
            delayChildren: 0.1,
            staggerChildren: 0.25,
        },
    },
};
const item = {
    hidden: { opacity: 0, y: 60 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

function Studyom() {
    const { t } = useTranslation()
    const { pathname } = useLocation()
    const STD = pathname == "/services" || "/about-us"
    console.log(STD);

    return <div className={` ${STD ? "xl:w-full" : ""} z-50 relative w-[98%] md:w-[95%] lg:w-[90%] md:h-[395px]  mx-auto md:rounded-[48px] overflow-hidden`}>
        <img
            src={Stadyum}
            className="md:absolute md:inset-0 md:w-full md:h-full object-contain md:object-cover rounded-[30px] md:rounded-[0]"
        />

        <img
            src={Stadyum}
            className="absolute hidden md:block w-full h-full object-cover blur-xl left-[-255px] [mask-image:linear-gradient(to_right,black_0%,black_35%,transparent_75%)] [-webkit-mask-image:linear-gradient(to_right,black_0%,black_35%,transparent_75%)]"
        />
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} className="absolute flex flex-row items-center lg:flex-col lg:items-start justify-between w-[93%] left-4 mx-auto md:w-[95%] top-1/2 -translate-y-1/2 z-20">
            <motion.div variants={container} className="pt-4 lg:mt-0">
                <motion.h2 variants={item} className="text-[#D2FF00] text-[26px] sm:text-[45px] md:text-[64px] italic font-bold font-['Platypi']">
                    {t("studyom.title")}
                </motion.h2>

                <motion.h3 variants={item} className="text-white text-[14px] sm:text-[25px] md:text-[48px] italic font-bold mb-8 font-['Platypi']">
                    {t("studyom.subtitle")}
                </motion.h3>
            </motion.div>
            <MotionLink to={`/${currentLang}/pricing`} variants={item} className="bg-[#D2FF00] px-[24px] py-[18px] rounded-[8px] md:w-[280px] shadow-[0_8px_16px_0_#D2FF0029,0_71px_29px_0_#D2FF000A,0_40px_24px_0_#D2FF0021,0_18px_18px_0_#D2FF0036,0_4px_10px_0_#D2FF0040] flex justify-center items-center " >
                <div>
                    <p className="font-['Chakra_Petch'] font-bold text-[12px] sm:text-[16px] md:text-[20px] leading-[100%]  ">
                        {t("studyom.button")}
                    </p>
                </div>
            </MotionLink>
        </motion.div>
    </div>

}
export default Studyom