import { CiCircleCheck } from "react-icons/ci";
import { Link } from "react-router-dom";

function PlayersPlan() {
    return <section className="flex flex-col gap-8 w-full md:w-[531px] h-fit bg-[#121212] border-[1px] border-[#D5D7DA] p-2 md:p-[24px] rounded-[30px]">
        <div className="bg-[#1C1C1C] w-[98%] mx-auto md:w-[483px] h-fit gap-8 md:h-[340px] rounded-[18px] p-[18px] flex flex-col justify-between">
            <h4 className="text-white font-bol italic text-[26px] md:text-[32px] leading-[100%] font-['Platypi']  ">Players Plan</h4>
            <p className="text-[#D5D7DA] font-['Chakra_Petch']  md:text-[24px] leading-[100%]">We offer a consulting service that thinks through every detail on your behalf.</p>
            <div className="flex items-end gap-1">
                <h4 className="font-['Platypi'] font-bold leading-[100%] text-[26px] md:text-[32px] italic text-white">990</h4>
                <p className="text-[#535862] md:text-[20px] leading-[100%] font-[Chakra_Petch] not-italic">/month</p>
            </div>
            <div className="cursor-pointer w-[95%] rounded-[8px] py-[18px] px-[24px] bg-[#D2FF00] flex items-center justify-center " >
                <Link to="/pricing/payment"><p className="font-bold leading-[100%] font-['Chakra_Petch'] md:text-[20px] ">Start Now</p></Link>
            </div>
        </div>
        <div className="flex flex-col gap-10">
            <div className="flex items-center gap-2 " >
                <CiCircleCheck className="text-[#D2FF00] [text-shadow:0px_1px_6px_#D2FF008A]" />
                <p className="text-[#D5D7DA] leading-[100%] md:text-[24px] font-['Chakra_Petch']  ">We offer a consulting service that thinks </p>
            </div>
            <div className="flex items-center gap-2 " >
                <CiCircleCheck className="text-[#D2FF00] [text-shadow:0px_1px_6px_#D2FF008A]" />
                <p className="text-[#D5D7DA] leading-[100%] md:text-[24px] font-['Chakra_Petch']  ">We offer a consulting service that thinks </p>
            </div>
            <div className="flex items-center gap-2 " >
                <CiCircleCheck className="text-[#D2FF00] [text-shadow:0px_1px_6px_#D2FF008A]" />
                <p className="text-[#D5D7DA] leading-[100%] md:text-[24px] font-['Chakra_Petch']  ">We offer a consulting service that thinks </p>
            </div>
            <div className="flex items-center gap-2 " >
                <CiCircleCheck className="text-[#D2FF00] [text-shadow:0px_1px_6px_#D2FF008A]" />
                <p className="text-[#D5D7DA] leading-[100%] md:text-[24px] font-['Chakra_Petch']  ">We offer a consulting service that thinks </p>
            </div>
            <div className="flex items-center gap-2 " >
                <CiCircleCheck className="text-[#D2FF00] [text-shadow:0px_1px_6px_#D2FF008A]" />
                <p className="text-[#D5D7DA] leading-[100%] md:text-[24px] font-['Chakra_Petch']  ">We offer a consulting service that thinks </p>
            </div>
        </div>
    </section>
}
export default PlayersPlan