import Football from "/images/football.jpg";
function FootballCart({ text }) {
    return <section className=" relative w-[450px] h-[600px] rounded-[26px] ">
        <div className=" pl-2 absolute top-0 rounded-[26px] w-[450px] h-[600px] bg-[#D2FF00]">
            <img className=" rounded-[26px] h-full" src={Football} alt="" />
            <div className=" absolute bottom-4 w-[90%] right-1/2 translate-x-[50%]  mx-auto  backdrop-blur-sm bg-[#53586229] rounded-[22px] py-6 px-4">
                <p className=" text-[24px] leading-[100%] font-['Chakra_Petch'] text-[#D2FF00] ">{text}</p>
            </div>
        </div>
    </section>

}
export default FootballCart