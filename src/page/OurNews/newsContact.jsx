import newImage from "/images/newImage.jpg"
import play from "../../assets/play.mp4"
import NewCard from "../../components/NewCard/newCard"
import { useTranslation } from "react-i18next"
function NewsContact() {
    const { t } = useTranslation()
    return <section className="bg-[#121212] py-40">
        <div className="w-[90%] mx-auto">
            <p className="font-[Chakra_Petch]  text-[20px] text-[#D2FF00] leading-[100%] ">{t("newsContactPage.date")}</p>
            <h2 className="italic font-bold leading-[100%] py-8 font-['Platypi'] text-white text-[25px] md:text-[32px] lg:text-[48px] lg:pl-1 ">{t("newsContactPage.heroTitle")}</h2>
            <img src={newImage} alt="image" className="w-[90%] mx-auto rounded-[24px]" />
            <div className=" w-full lg:w-[900px] mx-auto flex flex-col gap-8 py-12 " >
                <p className="font-['Chakra_Petch'] text-[20px] leading-[100%] text-[#D5D7DA]">{t("newsContactPage.intro1")}</p>
                <p className="font-['Chakra_Petch'] text-[20px] leading-[100%] text-[#D5D7DA]" >
                    {t("newsContactPage.intro2")}
                </p>
                <div className="flex flex-col gap-4" >
                    <p className="font-['Platypi'] italic text-[25px] lg:text-[36px] leading-[100%] font-bold text-white ">{t("newsContactPage.sections.section1.title")}</p>
                    <p className="font-['Chakra_Petch'] lg:text-[20px] leading-[100%] text-[#D5D7DA]" >{t("newsContactPage.sections.section1.description")}</p>
                </div>
                <div className="flex flex-col gap-4" >
                    <p className="font-['Platypi'] italic text-[25px] lg:text-[36px] leading-[100%] font-bold text-white " >{t("newsContactPage.sections.section1.title")}</p>
                    <p className="font-['Chakra_Petch'] lg:text-[20px] leading-[100%] text-[#D5D7DA]">{t("newsContactPage.sections.section2.description")}</p>
                </div>
                <video
                    src={play}
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls={false}
                    disablePictureInPicture
                    controlsList="nodownload nofullscreen noremoteplayback"
                    className="w-full  object-cover h-[200px]  rounded-[25px] "
                ></video>
                <div className="flex flex-col gap-4" >
                    <p className="font-['Platypi'] italic text-[25px] lg:text-[36px] leading-[100%] font-bold text-white " >{t("newsContactPage.sections.section2.title")}</p>
                    <p className="font-['Chakra_Petch'] lg:text-[20px] leading-[100%] text-[#D5D7DA]" >{t("newsContactPage.sections.section2.description")}</p>
                </div>
                <div className="flex flex-col gap-4" >
                    <p className="font-['Platypi'] italic text-[25px] lg:text-[36px] leading-[100%] font-bold text-white " >{t("newsContactPage.sections.section3.title")}</p>
                    <p className="font-['Chakra_Petch'] lg:text-[20px] leading-[100%] text-[#D5D7DA]" >{t("newsContactPage.sections.section3.description")}</p>
                </div>
            </div>
            <h2 className="italic font-bold leading-[100%] py-8 font-['Platypi'] text-white text-[25px] md:text-[32px] lg:text-[48px] "><span className="text-[#D2FF00]"> {t("newsContactPage.relatedTopics.before")} </span> {t("newsContactPage.relatedTopics.after")}</h2>
            <div className="flex gap-4 overflow-x-auto ">
                <NewCard cardNum="card1" />
                <NewCard cardNum="card2" />
                <NewCard cardNum="card3" />
            </div>
        </div>
    </section>
}
export default NewsContact