import { useState } from "react"
import test from "/images/test.jpg"
function SportCard() {
    const [show, setShow] = useState(false)
    return <section onClick={() => setShow(prev => !prev)} className={`overflow-hidden relative cursor-pointer ${show ? "w-[500px]" : "w-[110px]"} shrink-0 transition-all duration-150 h-[400px]`}>
        <img src={test} alt="" className={`z-10 rounded-[24px] w-full transition-all duration-150  h-full object-cover`} />
        <div className="absolute z-50 rounded-[16px] backdrop-blur-md overflow-x-hidden w-[450px] bottom-2 left-1/2 -translate-x-[50%] p-[14px] ">
            <h5 className="font-bold text-[#D2FF00] italic leading-[100%] text-[26px] font-['Platypi'] ">Players Services</h5>
            <p>Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    </section>
}
export default SportCard