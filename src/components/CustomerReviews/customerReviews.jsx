import { useTranslation } from "react-i18next"
import avatar from "/images/avatar.jpg"

function CustomerReviews({ cardNum }) {
    const { t } = useTranslation()
    return <section className="w-[290px] md:w-[400px] h-fit md:h-[220px] rounded-[19px] bg-[#1C1C1C] p-6 flex flex-col gap-4 ">
        <div className="flex items-center gap-2">
            <div className="flex justify-center items-center bg-[#D2FF00] w-[45px] h-[45px] rounded-full">
                <img src={avatar} alt="avatar" className="w-[95%] mx-auto h-[] rounded-full  " />
            </div>
            <div>
                <p className="text-[#D2FF00] font-bold ">{t(`reviews.cards.${cardNum}.name`)}</p>
                <p className="text-white font-['Chakra_Petch'] leading-[100%] font-semibold text-[14px]">{t(`reviews.cards.${cardNum}.job`)}</p>
            </div>
        </div>
        <p className="text-white " >{t(`reviews.cards.${cardNum}.text`)}</p>
    </section>
}
export default CustomerReviews