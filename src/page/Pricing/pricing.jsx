import PlayersPlan from "../../components/PlayersPlan/playersPlan"
import footballPlayer from "/images/footballPlayer.png"
import ourMan from "/images/ourMan.png"
function Pricing() {
    return <section className="bg-[#121212]">
        <div className="w-full sm:w-[90%] mx-auto flex flex-col gap-4 ">
            <h2 className="italic font-bold leading-[100%] py-8 font-['Platypi'] text-white text-[48px]"><span className="text-[#D2FF00]" >Pricing</span> plans</h2>
            <div className="flex flex-col gap-8">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between lg:bg-[#1C1C1C] w-full h-fit rounded-[48px] pb-[20px] px-[28px]">
                    <PlayersPlan />
                    <img src={footballPlayer} alt="" className="w-full lg:w-[50%] xl:rotate-[15deg]" />
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-4 justify-between lg:bg-[#1C1C1C] w-full h-fit rounded-[48px] mb-20 pb-[20px] p-[28px]">
                    <img src={ourMan} alt="" className="mx-auto w-[90%] sm:w-[50%] md:w-[60%] lg:w-[30%] " />
                    <PlayersPlan />
                </div>
            </div>
        </div>
    </section>
}
export default Pricing  