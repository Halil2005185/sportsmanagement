import test from "/images/test.jpg"
function LatestNews({title , text}) {
    return <section className=" relative  bg-[#1C1C1C] flex items-center justify-center rounded-[12px] " >
        <img src={test} alt="" className="w-[90%] h-[90%] rounded-[12px] object-cover" />
        <div className="absolute w-[88%] left-1/2 -translate-x-[50%] bottom-4 ">
            <h5 className="text-[#D2FF00] italic text-[24px] font-['Platypi'] " >{title}</h5>
            <p className=" text-white font-['Chakra_Petch'] " >{text}</p>
        </div>
    </section>
}
export default LatestNews