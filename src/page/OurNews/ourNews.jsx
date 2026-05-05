import { Link } from "react-router-dom"
import CustomerReviews from "../../components/CustomerReviews/customerReviews"
import NewCard from "../../components/NewCard/newCard"
import Studyom from "../../components/Studyom/studyom"
import SearchSection from "../../components/SearchSection/searchSection"
import newImage from "/images/newImage.jpg"
import { motion } from "framer-motion"

const AllNewCard = [
    { id: 1, image: newImage },
    { id: 2, image: newImage },
    { id: 3, image: newImage },
    { id: 4, image: newImage },
    { id: 5, image: newImage },
    { id: 6, image: newImage },
    { id: 7, image: newImage },
    { id: 8, image: newImage },
    { id: 9, image: newImage },
]

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
    return <section className="bg-[#121212]  py-4 ">
        <div className="w-[90%] mx-auto flex flex-col gap-4 ">
            <div className="w-full md:w-[98%] mx-auto flex items-center justify-between">
                <h2 className="text-[26px]  lg:text-[48px] text-white font-bold italic leading-[100%] font-['Platypi']">Our <span className="text-[#D2FF00]">News</span></h2>
                <Link to="/News-and-reviews/viewAll" className="lg:text-[28px] text-[#D2FF00]  font-['Chakra_Petch'] leading-[100%] pt-1">View all</Link>
            </div>
            <SearchSection />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-[98%] mx-auto">
                {AllNewCard.map((NwCard) => (
                    <motion.div
                        key={NwCard.id}
                        variants={item}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.25 }}
                    >
                        <NewCard id={NwCard.id} />
                    </motion.div>
                ))}
            </div>


            <div className="flex flex-col gap-8 py-10">
                <h2 className="text-[26px] lg:text-[48px] text-white font-bold leading-[100%] italic font-['Platypi'] " >What our <span className="text-[#D2FF00] " >clients</span> say about us</h2>
                <div className="custom-scroll flex items-center gap-4 overflow-x-auto ">
                    <div className="flex flex-col gap-4">
                        <CustomerReviews />
                        <CustomerReviews />
                    </div>
                    <div className="flex flex-col gap-4">
                        <CustomerReviews />
                        <CustomerReviews />
                    </div>
                    <div className="flex flex-col gap-4">
                        <CustomerReviews />
                        <CustomerReviews />
                    </div>
                    <div className="flex flex-col gap-4">
                        <CustomerReviews />
                        <CustomerReviews />
                    </div>
                    <div className="flex flex-col gap-4">
                        <CustomerReviews />
                        <CustomerReviews />
                    </div>
                    <div className="flex flex-col gap-4">
                        <CustomerReviews />
                        <CustomerReviews />
                    </div>
                </div>
            </div>
        </div>
        <div className="lg:w-[90%] mx-auto">
            <Studyom />
        </div>
    </section>
}
export default OurNews
