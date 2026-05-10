function WhySports({ title, text }) {
    return <section className="flex flex-col gap-4 h-fit bg-[#1C1C1C] rounded-[28px] pt-[34px] px-[20px] py-[24px] ">
        <h4 className="font-['Platypi'] italic font-bold text-[24px]  text-white " >{title}</h4>
        <div className=" w-[95%] sm:w-full lg:w-full xl:w-full sm:h-[150px] ">
            <p className="font-['Chakra_Petch']  lg:text-[24px] leading-7 text-gray-300 ">{text}</p>
        </div>
    </section>
}
export default WhySports