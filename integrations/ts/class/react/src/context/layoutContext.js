
export const createLayoutContext = () => {
  const data = `import { FC, PropsWithChildren, createContext, useCallback, useContext, useState } from "react";

// *=========== types ==========* //
type SidebarCof = {
  WIDTH: number;
  COLLAPSEDWIDTH: number;
};

type LayoutContextType = {
  openSidebar: boolean;
  toggleSidebar: () => void;
  sidebarConf: SidebarCof;
};
// *=========== types ==========* //



// *=========== createContext ==========* //
export const LayoutContext = createContext<LayoutContextType>({
  openSidebar: true,
  toggleSidebar: () => {},
  sidebarConf: { WIDTH: 280, COLLAPSEDWIDTH: 0 },
});
// *=========== createContext ==========* //



// *=========== Provider ==========* //
export const LayoutContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(true);
  const [sidebarConf, setSidebarConf] = useState({
    WIDTH: 280,
    COLLAPSEDWIDTH: 0
  });

  const toggleSidebar = useCallback(() => {
    setOpenSidebar((prev) => !prev);
    setSidebarConf((prev) => prev.WIDTH === 280
      ? ({
        ...prev,
        WIDTH: 0,
      }) : ({
        ...prev,
        WIDTH: 280,
      }))
  }, [openSidebar]);


  return (
    <LayoutContext.Provider value={{
      openSidebar,
      toggleSidebar,
      sidebarConf,
    }}>
      {children}
    </LayoutContext.Provider>
  );
};
// *=========== Provider ==========* //



// *=========== useContext ==========* //
export const useLayoutContext = () => {
  return useContext(LayoutContext);
}
`;
  return data;
}
