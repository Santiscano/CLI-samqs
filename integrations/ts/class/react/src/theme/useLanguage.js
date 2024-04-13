
export const createUseLanguage = () => {
  const data = `import { useState } from 'react'
import { getLanguage, getSettings, settings } from '../components/config/SessionSettings';
import { LanguageType } from './theme.interface';

const useLanguage = () => {
  // languge global
  const localStorageSettings = getSettings();
  const prevLanguage = getLanguage();
  const [language, setLanguage] = useState<LanguageType>(prevLanguage || settings.themeLanguage);

  // toggle language
  const toggleLanguage = (lang: LanguageType) => {
    setLanguage(lang);

    const newSettings = {
      ...localStorageSettings,
      themeLanguage: lang,
    };

    localStorage.setItem("settings", JSON.stringify(newSettings));
  };

  return {
    language,
    toggleLanguage,
  }
}

export default useLanguage
`;
  return data;
}
