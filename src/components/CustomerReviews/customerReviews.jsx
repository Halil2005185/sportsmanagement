import avatar from "/images/avatar.jpg"

function CustomerReviews() {
    return <section className="w-[290px] md:w-[400px] h-fit md:h-[220px] rounded-[19px] bg-[#1C1C1C] p-6 flex flex-col gap-4 ">
        <div className="flex items-center gap-2">
            <div className="flex justify-center items-center bg-[#D2FF00] w-[45px] h-[45px] rounded-full">
                <img src={avatar} alt="avatar" className="w-[95%] mx-auto h-[] rounded-full  " />
            </div>
            <div>
                <p className="text-[#D2FF00] font-bold ">Ahmed Ali</p>
                <p className="text-white font-['Chakra_Petch'] leading-[100%] font-semibold text-[14px]">Football Player</p>
            </div>
        </div>
        <p className="text-white " >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
    </section>
}
export default CustomerReviews