import { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import i18n from "../i18n";

function LangWrapper() {
    const { lang } = useParams();

    useEffect(() => {
        if (lang) {
            i18n.changeLanguage(lang);
            localStorage.setItem("lang", lang);
        }
    }, [lang]);

    return <Outlet />;
}

export default LangWrapper;