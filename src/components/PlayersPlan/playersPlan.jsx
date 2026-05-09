import { CiCircleCheck } from "react-icons/ci";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

const item = {
    hidden: { opacity: 0, y: 50 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.9,
            ease: "easeOut",
        },
    },
};
const currentLang = i18n.language || localStorage.getItem("lang") || "en";

function PlayersPlan({ cardNum }) {
    const { t } = useTranslation()
    const features = t(`pricingPage.cards.${cardNum}.features`, {
        returnObjects: true
    });
    console.log(features);

    return (
        <motion.section
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-col gap-8 w-full md:w-[531px] h-fit bg-[#121212] border-[1px] border-[#D5D7DA] p-2 md:p-[24px] rounded-[30px]"
        >
            <motion.div
                variants={item}
                className="bg-[#1C1C1C] w-[98%] mx-auto md:w-[483px] h-fit gap-8 md:h-[340px] rounded-[18px] p-[18px] flex flex-col justify-between"
            >
                <h4 className="text-white font-bol italic text-[26px] md:text-[32px] leading-[100%] font-['Platypi']  ">
                    {t(`pricingPage.cards.${cardNum}.title`)}
                </h4>
                <p className="text-[#D5D7DA] font-['Chakra_Petch']  md:text-[24px] leading-[100%]">
                    {t(`pricingPage.cards.${cardNum}.description`)}

                </p>
                <div className="flex items-end gap-1">
                    <h4 className="font-['Platypi'] font-bold leading-[100%] text-[26px] md:text-[32px] italic text-white">
                        {t(`pricingPage.cards.${cardNum}.price`)}
                    </h4>
                    <p className="text-[#535862] md:text-[20px] leading-[100%] font-[Chakra_Petch] not-italic">
                        {t("pricingPage.perMonth")}
                    </p>
                </div>
                <div className="cursor-pointer w-[95%] rounded-[8px] py-[18px] px-[24px] bg-[#D2FF00] flex items-center justify-center ">
                    <Link to={`${currentLang}/pricing/payment`}>
                        <p className="font-bold leading-[100%] font-['Chakra_Petch'] md:text-[20px] ">
                            {t("pricingPage.startNow")}
                        </p>
                    </Link>
                </div>
            </motion.div>
            <motion.div variants={item} className="flex flex-col gap-10">
                {features.map((feature) => (
                    <div className="flex items-center gap-2 ">
                        <CiCircleCheck className="text-[#D2FF00] [text-shadow:0px_1px_6px_#D2FF008A]" />
                        <p className="text-[#D5D7DA] leading-[100%] md:text-[24px] font-['Chakra_Petch']  ">
                            {feature}{" "}
                        </p>
                    </div>
                ))}


            </motion.div>
        </motion.section >
    );
}
export default PlayersPlan;
