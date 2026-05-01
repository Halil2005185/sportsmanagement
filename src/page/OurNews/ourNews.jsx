import { Link } from "react-router-dom"
import CustomerReviews from "../../components/CustomerReviews/customerReviews"
import NewCard from "../../components/NewCard/newCard"
import Studyom from "../../components/Studyom/studyom"
import SearchSection from "../../components/SearchSection/searchSection"

function OurNews() {
    return <section className="bg-[#121212]  py-4 ">
        <div className="w-[90%] mx-auto flex flex-col gap-4 ">
            <div className="w-full md:w-[98%] mx-auto flex items-center justify-between">
                <h2 className="text-[26px]  lg:text-[48px] text-white font-bold italic leading-[100%] font-['Platypi']">Our <span className="text-[#D2FF00]">News</span></h2>
                <Link to="/News-and-reviews/viewAll" className="lg:text-[28px] text-[#D2FF00]  font-['Chakra_Petch'] leading-[100%] pt-1">View all</Link>
            </div>
            <SearchSection />
            <div className="flex gap-4 flex-wrap" >
                <NewCard />
                <NewCard />
                <NewCard />
                <NewCard />
                <NewCard />
                <NewCard />
                <NewCard />
                <NewCard />
                <NewCard />
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
        <Studyom />
    </section>
}
export default OurNews
