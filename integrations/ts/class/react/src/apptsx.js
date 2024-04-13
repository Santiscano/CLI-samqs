
export const createAppTsx = () => {
  const data = `import { CssBaseline, ThemeProvider } from "@mui/material";

import AllRouters from "./routes";
// import { useScrollToTop } from './hook/useScrollToTop';

import './App.css';
import { useThemeContext } from "./theme";
import { useEffect } from "react";
import { settings } from "./components/config/SessionSettings";



function App() {
  const { theme } = useThemeContext();
  // useScrollToTop();


  const validateSettings = () => {
    if (!localStorage.getItem("settings")) {
      localStorage.setItem("settings", JSON.stringify(settings))
    }
  };


  useEffect(() => {
    validateSettings();
  },[]);


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>

        <AllRouters/>
    </ThemeProvider>
  )
}

export default App
`;
  return data;
}
