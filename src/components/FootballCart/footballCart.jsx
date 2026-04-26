import Football from "/images/football.jpg";

function FootballCart({ text }) {
    return (
        <section className="relative shrink-0 w-[300px] h-[400px]  lg:w-full lg:h-[650px]  lg:overflow-visible">
            <div className="pl-2 absolute inset-x-0 rounded-[26px] bg-[#D2FF00] lg:w-full lg:h-full">
                <img
                    className="rounded-[26px] h-full lg:w-full lg:object-cover"
                    src={Football}
                    alt=""
                />

                <div className="absolute bottom-4 w-[85%] lg:w-[90%] right-1/2 translate-x-[50%] mx-auto backdrop-blur-sm bg-[#53586229] rounded-[22px] py-6 px-2 xl:px-4">
                    <p className="xl:text-[24px] leading-[100%] font-['Chakra_Petch'] text-[#D2FF00]">
                        {text}
                    </p>
                </div>
            </div>
        </section>
    );
}

export default FootballCart;    