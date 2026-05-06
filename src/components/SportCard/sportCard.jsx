import { useState } from "react"
function SportCard({ open, setOpen, title, text , image}) {
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

    return <section onClick={HandleOpen} className={`overflow-hidden relative cursor-pointer ${isOpen ? "md:w-[500px] h-[275px] md:h-[400px]" : "md:w-[130px] h-[110px] md:h-[400px]"} shrink-0 transition-all duration-300 `}>
        <img
            src={image}
            alt="test"
            className={`z-10 rounded-[24px] w-full transition-all duration-150  h-full object-cover object-[50%_50%] md:object-cover`} />

        <div className={` ${isOpen ? " opacity-1" : " opacity-0"} transition-all duration-500 absolute z-50 rounded-[16px] backdrop-blur-md overflow-x-hidden w-[97%] md:w-[450px] bottom-2 left-1/2 -translate-x-[50%] p-[14px]`}>
            <h5 className="font-bold text-[#D2FF00] italic leading-[100%] text-[26px] font-['Platypi'] ">{title}</h5>
            <p className="text-[#F5FB94]">{text}</p>
        </div>
    </section>
}
export default SportCard