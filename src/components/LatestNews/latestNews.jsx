import test from "/images/test.jpg"
function LatestNews() {
    return <section className=" relative w-[98%] mx-auto md:w-[331px] h-[303px] bg-[#1C1C1C] flex items-center justify-center rounded-[12px] " >
        <img src={test} alt="" className="w-[90%] h-[90%] rounded-[12px] object-cover" />
        <div className="absolute w-[88%] left-1/2 -translate-x-[50%] bottom-4 ">
            <h5 className="text-[#D2FF00] italic text-[24px] font-['Platypi'] " >A New talent has joined</h5>
            <p className=" text-white font-['Chakra_Petch'] " >OA Sports is a multifaceted sports
                consulting and management company
                that brings together multidisciplinary
                expertise under one roof.</p>
        </div>
    </section>
}
export default LatestNews