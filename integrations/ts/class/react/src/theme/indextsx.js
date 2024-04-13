
export const createIndexTheme = () => {
  const data = `import { createTheme } from "@mui/material";
import { FC, PropsWithChildren, createContext, useContext } from "react";

import { settings } from "../components/config/SessionSettings";
import { ThemeContextType } from "./theme.interface";
import { useColor } from "./useColorPreset";
import useLanguage from "./useLanguage";
import { useMode } from "./useModeTheme";


// *=========== createContext ==========* //
// definimos variables que seran globales
export const ThemeContext = createContext<ThemeContextType>({
  mode: settings.themeMode,
  toggleColorMode: { toggleColorMode: () => { } },
  theme: createTheme(),
  language: settings.themeLanguage,
  toggleLanguage: () => {},
  colorPreset: settings.themeColorPreset,
  toggleColorPreset: () => {},
});
// *=========== createContext ==========* //



// *=========== Provider ==========* //
// provider que se usa como envoltorio
export const ThemeContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const modeTheme = useMode();
  const colorPreset = useColor();
  const language = useLanguage();


  return (
    // @ts-ignore
    <ThemeContext.Provider value={{
      ...modeTheme,
      ...language,
      ...colorPreset,
    }}>
      {children}
    </ThemeContext.Provider>
  );
};
// *=========== Provider ==========* //



// *=========== useContext ==========* //
// hook para usar el context en los componentes tsx
export const useThemeContext = () => {
  return useContext(ThemeContext);
};

`;
  return data;
}
