import { useTranslation } from "react-i18next";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa6";

function SearchSection() {
    const { t } = useTranslation()
    return <section className="flex items-center justify-between bg-[#1c1c1c] w-[98%] mx-auto h-[56px] border-[#535862] border-[1px] rounded-[12px] py-[10px] px-[14px]">
        <CiSearch className="text-[#717680] text-[20px] mx-1" />
        <input type="text" placeholder={t("searchSection.placeholder")} className="placeholder:px-4 text-white w-[98%] bg-transparent outline-none" />
        <FaMicrophone className="text-[#717680] border-[#717680] border-l-[1px] pl-1 text-[20px]" />
    </section>
}
export default SearchSection