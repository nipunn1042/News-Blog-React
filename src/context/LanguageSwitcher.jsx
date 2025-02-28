import { useTranslation } from "react-i18next";
import { Globe2 } from "lucide-react";
// import i18n from "../assets/i18n";

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = () => {
        const newLanguage = i18n.language === "en" ? "hi" : "en";
        i18n.changeLanguage(newLanguage);
    }

    return(
        <button
        onClick={changeLanguage}
        className="ml-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none" 
        >
            {/* {i18n.language === "en" ? "HI" : "EN"} */}
            <Globe2 className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            </button>
    )
}

export default LanguageSwitcher;

<button
              // onClick={() => changeLanguage(currentLanguage === 'en' ? 'es' : 'en')}
              className="ml-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
            >
              <Globe2 className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            </button>