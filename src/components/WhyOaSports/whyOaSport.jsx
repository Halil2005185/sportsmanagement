
function WhyOaSports({ image , title , text }) {
    return <section className=" relative ">
        <img src={image} alt="Test" className="lg:w-[80%] h-[500px] lg:h-[750px] mx-auto object-contain " />
        <div className="absolute bottom-[-16px] w-full bg-[#D2FF00] shadow-[0_-100px_100px_0_#D2FF0066] p-6 rounded-[24px] gap-4 flex flex-col lg:min-h-[175px] ">
            <h3 className=" italic font-bold  text-[26px] lg:text-[40px] font-['Platypi'] leading-[100%] ">{title}</h3>
            <p className="text-[20px] lg:text-[28px] font-['Chakra_Petch'] leading-[100%]" >{text}</p>
        </div>
    </section>
}
export default WhyOaSports 