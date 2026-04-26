import { useState } from "react"
import test from "/images/test.jpg"
function SportCard({ open, setOpen }) {
    const [show, setShow] = useState(false)

    const controlled = setOpen !== undefined;
    const isOpen = controlled ? open : show;

    function HandleOpen() {
        if (controlled) {
            setOpen(prev => !prev);
        } else {
            setShow(prev => !prev);
        }
    }

    return <section onClick={HandleOpen} className={`overflow-hidden relative cursor-pointer ${isOpen ? "md:w-[500px] h-[275px] md:h-[400px]" : "md:w-[110px] h-[110px] md:h-[400px]"} shrink-0 transition-all duration-150 `}>
        <img
            src={test}
            alt="test"
            className={`z-10 rounded-[24px] w-full transition-all duration-150  h-full object-cover object-[50%_35%] md:object-cover`} />

        <div className={` ${isOpen ? "block" : "hidden"} absolute z-50 rounded-[16px] backdrop-blur-md overflow-x-hidden w-[97%] md:w-[450px] bottom-2 left-1/2 -translate-x-[50%] p-[14px]`}>
            <h5 className="font-bold text-[#D2FF00] italic leading-[100%] text-[26px] font-['Platypi'] ">Players Services</h5>
            <p className="text-[#F5FB94]">Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    </section>
}
export default SportCard