function StartingJourney({number ,image}){
    return <section className=" relative bg-[#1C1C1C] w-full md:w-[44%] lg:w-[48%] h-[600px] lg:h-[600px] md:py-10 rounded-[32px] flex flex-col gap-4 ">
        <div className="absolute top-0 left-0 bg-[#D2FF00] rounded-tr-[14px] rounded-br-[32px] rounded-tl-[32px] px-1 ">
        <p className="text-[48px] italic font-bold font-['Platypi'] ">{number}</p>
        </div>
        <img src={image} alt="image" className="lg:mt-4 h-[200px] md:h-[50%] mx-auto px-1 rounded-[32px] my-20" />
        <div className="bg-[#2B2B2B] w-[95%] mx-auto rounded-[16px] p-4 flex flex-col gap-8">
            <h2 className="font-bold italic font-['Platypi'] text-[26px] lg:text-[48px] leading-[100%] text-[#D2FF00] ">Choose your service</h2>
            <p className="lg:text-[28px] font-['Chakra_Petch'] leading-[100%] text-[#FFFFFF] ">Choose the service that suits you.</p>
        </div>
    </section>
}
export default StartingJourney