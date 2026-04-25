function WhySports({title , text}) {
    return <section className="flex flex-col gap-2 ">
        <h4 className="font-['Platypi'] italic font-bold text-[32px] text-white " >{title}</h4>
        <div className="w-[400px] h-[213px] rounded-[28px] bg-[#1C1C1C] pt-[34px] px-[20px] py-[24px]">
            <p className="font-['Chakra_Petch'] leading-[100%] text-[24px] text-white ">{text}</p>
        </div>
    </section>
}
export default WhySports