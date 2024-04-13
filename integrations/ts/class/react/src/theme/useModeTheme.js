
export const createUseModeTheme = () => {
  const data = `import { useMemo, useState } from "react";
import { PaletteMode, createTheme } from "@mui/material";

import { palette } from "./palette";
import { typography } from "./typography";
import { shadows } from "./shadow";
import { customShadows } from "./customShadow";
import { overrides } from "./overrides";
import { useColor } from "./useColorPreset";
import { getMode, getSettings, settings } from "../components/config/SessionSettings";

export const useMode = () => {
  const { colorPreset } = useColor();
  // 1-mode global light dark
  const localStorageSettings = getSettings();
  const prevMode = getMode();
  const [mode, setMode] = useState<PaletteMode>(prevMode || settings.themeMode);

  // 2-toggle to change mode
  const toggleColorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prev) => (prev === "light" ? "dark" : "light"));

        const newSettings = {
          ...localStorageSettings,
          themeMode: prevMode === "light" ? "dark" : "light"
        };

        localStorage.setItem("settings", JSON.stringify(newSettings));
        console.log('newSettings: ', newSettings);
      }
    }),
    [mode]
  );

  // 3-memoizable themeSettings MUI
  const memoizedValue = useMemo(
    () => ({
      palette: palette(mode, colorPreset),
      typography,
      shadows: shadows(),
      customShadows: customShadows(),
      shape: { borderRadius: 8 },
    }),
    [mode, colorPreset]
  );


  // @ts-ignore
  const theme = createTheme(memoizedValue);
  // @ts-ignore
  theme.components = overrides(theme);

  return {
    mode,
    toggleColorMode,
    theme,
  };
};
`;
  return data;
}
