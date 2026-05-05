import newImage from "/images/newImage.jpg"
import avatar from "/images/avatar.jpg"
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

function NewCard({ id }) {
    return <section className="w-[98%] flex flex-col gap-8  bg-[#1C1C1C] border-[#535862] rounded-[24px] p-3 border-[1px] h-fit py-4  " >
        <img src={newImage} alt="newimg" className="w-[98%] mx-auto rounded-[12px]" />
        <div className="flex flex-col justify-between gap-4 h-full">
            <p className="font-[Chakra_Petch] text-[12px] leading-[100%] text-[#D5D7DA]">25 Oct 2025</p>
            <h5 className="text-[26px] text-[#D2FF00] font-bold italic font-['Platypi'] leading-[100%]">Night Games</h5>
            <p className="text-white text-[20px] font-['Chakra_Petch'] leading-[100%]  ">We manage the planning behind the scenes with expertise, while helping you excel on the field.</p>
            <div className="flex items-center gap-4">
                <div className="py-2 px-3 flex items-center gap-4 rounded-[16px] bg-[#1C1C1C] border-[1px] border-[#D2FF00] ">
                    <span className="w-[6px] h-[6px] inline-block bg-[#D2FF00] rounded-full shadow-[0px_0px_6px_0px_#D2FF0080] "></span>
                    <p className="text-[#D2FF00] leading-[100%] font-['Geist'] ">Tag</p>
                </div>
                <div className="py-2 px-3 flex items-center gap-4 rounded-[16px] bg-[#1C1C1C] border-[1px] border-[#D2FF00] ">
                    <span className="w-[6px] h-[6px] inline-block bg-[#D2FF00] rounded-full shadow-[0px_0px_6px_0px_#D2FF0080] "></span>
                    <p className="text-[#D2FF00] leading-[100%] font-['Geist'] ">Tag</p>
                </div>
                <div className="py-2 px-3 flex items-center gap-4 rounded-[16px] bg-[#1C1C1C] border-[1px] border-[#D2FF00] ">
                    <span className="w-[6px] h-[6px] inline-block bg-[#D2FF00] rounded-full shadow-[0px_0px_6px_0px_#D2FF0080] "></span>
                    <p className="text-[#D2FF00] leading-[100%] font-['Geist'] ">Tag</p>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="flex justify-center items-center bg-[#D2FF00] w-[45px] h-[45px] rounded-full">
                        <img src={avatar} alt="avatar" className="w-[95%] mx-auto h-[] rounded-full  " />
                    </div>
                    <p className="text-white">Ahmed Ali</p>
                </div>
                <div className="flex items-center gap-4 text-[#D2FF00] font-bold font-['Chakra_Petch'] leading-[100%] ">
                    <Link to={`/News-and-reviews/${id}`} >
                        <p>Read more</p>
                    </Link>
                    <FiArrowUpRight />
                </div>
            </div>
        </div>
    </section>
}
export default NewCard