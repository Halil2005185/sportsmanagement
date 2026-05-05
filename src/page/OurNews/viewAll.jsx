import { motion, stagger } from "framer-motion"
import NewCard from "../../components/NewCard/newCard"
import SearchSection from "../../components/SearchSection/searchSection"
const AllNewCard = [
    { id: 1, },
    { id: 2, },
    { id: 3, },
    { id: 4, },
    { id: 5, },
    { id: 6, },
    { id: 7, },
    { id: 8, },
    { id: 9, },
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

function ViewAll() {
    return <section className="bg-[#121212]  py-4 ">
        <div className="w-[90%] mx-auto flex flex-col gap-4 py-8 ">
            <SearchSection />
            <div div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 " >
                {AllNewCard.map((card) => (
                    <motion.div variants={item} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} key={card.id}>
                        <NewCard />
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
}
export default ViewAll