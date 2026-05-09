import newImage from "/images/newImage.jpg";
import avatar from "/images/avatar.jpg";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
function NewCard({ id, cardNum }) {
    const { t } = useTranslation();
    const tags = t(`newsCard.cards.${cardNum}.tags`, {
        returnObjects: true,
    });
    const currentLang = i18n.language || localStorage.getItem("lang") || "en";

    return (
        <section className="w-[98%] flex flex-col gap-8  bg-[#1C1C1C] border-[#535862] rounded-[24px] p-3 border-[1px] h-fit py-4  ">
            <img
                src={newImage}
                alt="newimg"
                className="w-[98%] mx-auto rounded-[12px]"
            />
            <div className="flex flex-col justify-between gap-4 h-full">
                <p className="font-[Chakra_Petch] text-[12px] leading-tight text-[#D5D7DA]">
                    {t(`newsCard.cards.${cardNum}.date`)}
                </p>
                <h5 className="text-[26px] text-[#D2FF00] font-bold italic font-['Platypi'] leading-tight">
                    {t(`newsCard.cards.${cardNum}.title`)}
                </h5>
                <p className="text-white text-[20px] font-['Chakra_Petch'] leading-tight  ">
                    {t(`newsCard.cards.${cardNum}.description`)}
                </p>
                <div className="flex items-center gap-4 flex-wrap">
                    {tags.map((tag, index) => (
                        <div
                            key={index}
                            className="py-2 px-3 flex items-center gap-4 rounded-[16px] bg-[#1C1C1C] border-[1px] border-[#D2FF00]"
                        >
                            <span className="w-[6px] h-[6px] inline-block bg-[#D2FF00] rounded-full shadow-[0px_0px_6px_0px_#D2FF0080]" />

                            <p className="text-[#D2FF00] leading-tight font-['Geist']">
                                {tag}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="flex justify-center items-center bg-[#D2FF00] w-[45px] h-[45px] rounded-full">
                            <img
                                src={avatar}
                                alt="avatar"
                                className="w-[95%] mx-auto h-[] rounded-full  "
                            />
                        </div>
                        <p className="text-white">{t(`newsCard.cards.${cardNum}.author`)}</p>
                    </div>
                    <div className="flex items-center gap-4 text-[#D2FF00] font-bold font-['Chakra_Petch'] leading-tight ">
                        <Link to={`/${currentLang}/News-and-reviews/${id}`}>
                            <p>{t(`newsCard.readMore`)}</p>
                        </Link>
                        <FiArrowUpRight />
                    </div>
                </div>
            </div>
        </section>
    );
}
export default NewCard;
