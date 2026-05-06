function OurNumbers({ number, text, title }) {
    return <section className="rounded-[28px] shrink-0 py-6 px-4 w-[250px] lg:w-[400px] xl:w-[500px] h-[250px] lg:h-[300px] bg-[#1C1C1C] flex flex-col gap-4 ">
        <div className="flex flex-col gap-2">
            <p className="text-[#D2FF00] font-bold text-[32px] lg:text-[48px] leading-[100%] italic font-['Platypi']  ">{number}</p>
            <h3 className="text-[#F5FB94] font-['Platypi'] italic leading-[100%] text-[26px] lg:text-[30px] ">{title}</h3>
        </div>
        <p className="font-['Chakra_Petch'] leading-[100%] lg:text-[24px] text-white ">{text}</p>
    </section>
}
export default OurNumbers