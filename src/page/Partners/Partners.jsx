import { BsStars } from "react-icons/bs";
import twoMan from "/images/twoMan.png";
import lights from "/images/lights.png";
import SbuUniversity from "../../components/SbuUniversity/sbuUniversity";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const container = {
    hidden: {},
    show: {
        transition: {
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
            duration: 0.3,
            ease: "easeOut",
        },
    },
};

function Partners() {
    const { t } = useTranslation()
    return (
        <section className="bg-[#121212]">
            <div className="w-[90%] mx-auto">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex flex-col gap-4 py-10">
                    <motion.h2
                        variants={item}
                        className="italic font-bold text-white leading-[100%] text-[32px] lg:text-[48px] font-['Platypi']"
                    >
                        {t("partnersPage.hero.title.before")}<span className="text-[#D2FF00]">{t("partnersPage.hero.title.highlight")}</span>
                    </motion.h2>
                    <motion.div
                        values={container}
                        className="flex flex-col gap-4 lg:flex-row lg:justify-between items-center">
                        <div className="flex flex-col gap-8">
                            <motion.h4
                                variants={item}
                                className="text-[26px] lg:text-[32px] font-['Platypi'] text-[#D2FF00] italic leading-[100%] font-bold [text-shadow:0_6px_100px_#C3FF1A9C] "
                            >
                                {t("partnersPage.hero.subtitle")}
                            </motion.h4>
                            <motion.div values={container} className="flex flex-col gap-8">
                                <motion.div variants={item} className="flex items-start gap-2">
                                    <BsStars className="text-[#D2FF00] drop-shadow-[0_6px_23px_#D2FF00] text-[50px]" />
                                    <p className="text-white lg:text-[24px] font-['Chakra_Petch'] leading-[100%]  ">
                                        {t("partnersPage.hero.points.point1")}
                                    </p>
                                </motion.div>
                                <motion.div variants={item} className="flex items-start gap-2">
                                    <BsStars className="text-[#D2FF00] drop-shadow-[0_6px_23px_#D2FF00] text-[50px]" />
                                    <p className="text-white lg:text-[24px] font-['Chakra_Petch'] leading-[100%]  ">
                                        {t("partnersPage.hero.points.point2")}
                                    </p>
                                </motion.div>
                                <motion.div variants={item} className="flex items-start gap-2">
                                    <BsStars className="text-[#D2FF00] drop-shadow-[0_6px_23px_#D2FF00] text-[50px]" />
                                    <p className="text-white lg:text-[24px] font-['Chakra_Petch'] leading-[100%]  ">
                                        {t("partnersPage.hero.points.point3")}
                                    </p>
                                </motion.div>
                                <motion.div variants={item} className="flex items-start gap-2">
                                    <BsStars className="text-[#D2FF00] drop-shadow-[0_6px_23px_#D2FF00] text-[50px]" />
                                    <p className="text-white lg:text-[24px] font-['Chakra_Petch'] leading-[100%]  ">
                                        {t("partnersPage.hero.points.point4")}
                                    </p>
                                </motion.div>
                            </motion.div>
                            <motion.div
                                variants={item}
                                className="bg-[#D2FF00] w-[284px] flex justify-center items-center py-[18px] px-[24px] rounded-[8px] shadow-[0_8px_16px_0_#D2FF0029,0_40px_24px_0_#D2FF0021,0_18px_18px_0_#D2FF0036,0_4px_10px_0_#D2FF0040] "
                            >
                                <p className="font-bold font-['Chakra_Petch'] text-[20px] leading-[100%]  ">
                                    {t("partnersPage.hero.button")}
                                </p>
                            </motion.div>
                        </div>
                        <img src={twoMan} alt="twoman" className="w-[500px] z-50" />
                        <img
                            src={lights}
                            alt="lights"
                            className="w-[400px] z-40 absolute right-0 hidden lg:block "
                        />
                    </motion.div>
                </motion.div>
                <div className="pb-10">
                    <SbuUniversity
                        title={{
                            before: t("partnersPage.hero.sbuUniversity.title.before"),
                            highlight: t("partnersPage.hero.sbuUniversity.title.highlight"),
                        }}
                        description={t("partnersPage.hero.sbuUniversity.description")}
                        button={t("partnersPage.hero.sbuUniversity.button")}
                    />
                    <SbuUniversity
                        title={{
                            before: t("partnersPage.hero.sbuUniversity.title.before"),
                            highlight: t("partnersPage.hero.sbuUniversity.title.highlight"),
                        }}
                        description={t("partnersPage.hero.sbuUniversity.description")}
                        button={t("partnersPage.hero.sbuUniversity.button")}
                    />
                </div>
            </div>
        </section>
    );
}
export default Partners;
