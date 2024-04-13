
export const createThemeInterface = () => {
  const data = `import { Theme } from "@mui/material";

// *=========== types ==========* //
export type LanguageType = "en" | "es" | "fre" | "por";
export type ColorPreset = "facebookBlue"
  | "purpleLight"
  | "teal"
  | "ceruleanBlue"
  | "fireEngineRed"
  | "goldenrod";

// definimos el tipado del context
export type ThemeContextType = {
  mode: "light" | "dark";
  toggleColorMode: { toggleColorMode: () => void }
  theme: Theme;
  language: LanguageType;
  toggleLanguage: (lang: LanguageType) => void;
  colorPreset: ColorPreset;
  toggleColorPreset: (newColor: ColorPreset) => void;
};
// *=========== types ==========* //
`;
  return data;
}
