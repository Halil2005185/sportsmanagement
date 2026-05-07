import { useTranslation } from "react-i18next";
import PlayersPlan from "../../components/PlayersPlan/playersPlan"
import footballPlayer from "/images/footballPlayer.png"
import ourMan from "/images/ourMan.png"
import { motion } from "framer-motion"
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
function Pricing() {
    const { t } = useTranslation();
    return <section className="bg-[#121212]">
        <div className="w-full sm:w-[90%] mx-auto flex flex-col gap-4 ">
            <h2 className="italic font-bold leading-[100%] py-8 font-['Platypi'] text-white text-[48px]"><span className="text-[#D2FF00]" >{t("pricingPage.hero.title.highlight")}</span> {t("pricingPage.hero.title.after")}</h2>
            <div className="flex flex-col gap-8">
                <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} className="flex flex-col-reverse lg:flex-row items-center justify-between lg:bg-[#1C1C1C] w-full h-fit rounded-[48px] pb-[20px] px-[28px]">
                    <PlayersPlan cardNum = "card1"  />
                    <motion.img variants={item} src={footballPlayer} alt="" className="w-full lg:w-[50%] xl:rotate-[15deg]" />
                </motion.div>
                <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} className="flex flex-col lg:flex-row items-center gap-4 justify-between lg:bg-[#1C1C1C] w-full h-fit rounded-[48px] mb-20 pb-[20px] p-[28px]">
                    <motion.img variants={item} src={ourMan} alt="" className="mx-auto w-[90%] sm:w-[50%] md:w-[60%] lg:w-[30%] " />
                    <PlayersPlan cardNum = "card2" />
                </motion.div>
            </div>
        </div>
    </section>
}
export default Pricing  