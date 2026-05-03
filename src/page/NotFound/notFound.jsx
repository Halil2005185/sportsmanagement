import { Link } from "react-router-dom"

function NotFound() {
    return <section className="bg-[#121212] py-24 ">
        <div className="w-[90%] mx-auto">
            <h5 className="text-[#D2FF00] text-[100px] md:text-[200px] text-center font-['Platypi']">404</h5>
            <h2 className="italic font-bold leading-[100%] py-8 font-['Platypi'] text-center text-white text-[26px] md:text-[48px] pl-4">The page you ara looking for<span className="text-[#D2FF00]"> does not exist </span></h2>
            <p></p>

        </div>
        <Link to={"/"} className="w-[80%] md:w-[30%] mx-auto cursor-pointer shadow-[0_8px_16px_0_#D2FF0029,0_40px_24px_0_#D2FF0021,0_18px_18px_0_#D2FF0036,0_4px_10px_0_#D2FF0040] bg-[#D2FF00] rounded-[8px] px-[12px] py-[12px] sm:px-[24px] sm:py-[18px] flex justify-center items-center">
            <p className="font-['Geist'] font-bold sm:text-[20px] leading-[100%] ">Home page</p>
        </Link>
    </section>

}

export default NotFound