import NewCard from "../../components/NewCard/newCard"
import SearchSection from "../../components/SearchSection/searchSection"

function ViewAll() {
    return <section className="bg-[#121212]  py-4 ">
        <div className="w-[90%] mx-auto flex flex-col gap-4 ">
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
                <NewCard />
                <NewCard />
                <NewCard />
                <NewCard />
                <NewCard />
                <NewCard />
            </div>
        </div>
    </section>
}
export default ViewAll