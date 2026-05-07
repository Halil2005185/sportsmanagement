import { Link } from "react-router-dom";
import CustomerReviews from "../../components/CustomerReviews/customerReviews";
import NewCard from "../../components/NewCard/newCard";
import Studyom from "../../components/Studyom/studyom";
import SearchSection from "../../components/SearchSection/searchSection";
import newImage from "/images/newImage.jpg";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const AllNewCard = [
    {
        id: 1,
        image: newImage,
        translationKey: "card1",
    },

    {
        id: 2,
        image: newImage,
        translationKey: "card2",
    },

    {
        id: 3,
        image: newImage,
        translationKey: "card3",
    },

    {
        id: 4,
        image: newImage,
        translationKey: "card4",
    },

    {
        id: 5,
        image: newImage,
        translationKey: "card5",
    },

    {
        id: 6,
        image: newImage,
        translationKey: "card6",
    },

    {
        id: 7,
        image: newImage,
        translationKey: "card7",
    },

    {
        id: 8,
        image: newImage,
        translationKey: "card8",
    },

    {
        id: 9,
        image: newImage,
        translationKey: "card9",
    },
];

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

function OurNews() {
    const { t } = useTranslation();

    return (
        <section className="bg-[#121212]  py-4 ">
            <div className="w-[90%] mx-auto flex flex-col gap-4 ">
                <div className="w-full md:w-[98%] mx-auto flex items-center justify-between">
                    <h2 className="text-[26px]  lg:text-[48px] text-white font-bold italic leading-[100%] font-['Platypi']">
                        {t("newsPage.hero.title.before")}{" "}
                        <span className="text-[#D2FF00]">
                            {t("newsPage.hero.title.highlight")}
                        </span>
                    </h2>
                    <Link
                        to="/News-and-reviews/viewAll"
                        className="lg:text-[28px] text-[#D2FF00]  font-['Chakra_Petch'] leading-[100%] pt-1"
                    >
                        {t("newsPage.hero.viewAll")}
                    </Link>
                </div>
                <SearchSection />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-[98%] mx-auto">
                    {AllNewCard.map((card) => (
                        <motion.div
                            key={card.id}
                            variants={item}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.25 }}
                        >
                            <NewCard
                                id={card.id}
                                image={card.image}
                                cardNum={card.translationKey}
                            />
                        </motion.div>
                    ))}
                </div>

                <div className="flex flex-col gap-8 py-10">
                    <h2 className="text-[26px] lg:text-[48px] text-white font-bold leading-[100%] italic font-['Platypi'] ">
                        {t("newsPage.reviews.title.before")}{" "}
                        <span className="text-[#D2FF00] ">
                            {t("newsPage.reviews.title.highlight")}
                        </span>{" "}
                        {t("newsPage.reviews.title.after")}
                    </h2>
                    <div className="custom-scroll flex items-center gap-4 overflow-x-auto ">
                        <div className="flex flex-col gap-4">
                            <CustomerReviews cardNum="card1" />
                            <CustomerReviews cardNum="card2" />
                        </div>
                        <div className="flex flex-col gap-4">
                            <CustomerReviews cardNum="card1" />
                            <CustomerReviews cardNum="card2" />
                        </div>
                        <div className="flex flex-col gap-4">
                            <CustomerReviews cardNum="card1" />
                            <CustomerReviews cardNum="card2" />
                        </div>
                        <div className="flex flex-col gap-4">
                            <CustomerReviews cardNum="card1" />
                            <CustomerReviews cardNum="card2" />
                        </div>
                        <div className="flex flex-col gap-4">
                            <CustomerReviews cardNum="card1" />
                            <CustomerReviews cardNum="card2" />
                        </div>
                        <div className="flex flex-col gap-4">
                            <CustomerReviews cardNum="card1" />
                            <CustomerReviews cardNum="card2" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:w-[90%] mx-auto">
                <Studyom />
            </div>
        </section>
    );
}
export default OurNews;
