
export const createUseColorPreset = () => {
  const data = `import { useState } from "react";
import { getColor, getSettings, settings } from "../components/config/SessionSettings";
import { ColorPreset } from "./theme.interface";



export const useColor = () => {
  // color set global
  const localStorageSettings = getSettings();
  const prevColorPreset = getColor();
  const [colorPreset, setColorPreset] = useState<ColorPreset>(prevColorPreset || settings.themeColorPreset);

  // toggle colorset
  const toggleColorPreset = (newColor: ColorPreset) => {
    setColorPreset(newColor);

    const newSettings = {
      ...localStorageSettings,
      themeColorPreset: newColor
    };

    localStorage.setItem("settings", JSON.stringify(newSettings));
  };

  return {
    colorPreset,
    toggleColorPreset,
  }


};
`;
  return data;
}
