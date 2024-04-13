
export const createTabsNavigationCustom = () => {
  const data = `import { FC, ReactNode, SyntheticEvent, useState } from "react";

import Box from "@mui/material/Box";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

interface TabsNavigationProps {
  tabs      : { label:string, value:string }[]
  tabsPanels: { value:string, node:ReactNode }[]
}

/**
 *
 * @param param0 - label is name value number increment
 * @returns
 */
const TabsNavigationCustom:FC<TabsNavigationProps> = ({tabs, tabsPanels}) => {
  const [value, setValue] = useState('1');

  const handleChange = (_event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            onChange={handleChange}
            aria-label="Tab navigation custom"
          >

            {tabs.map(({label, value}) => (
              <Tab key={value} label={label} value={value} />
            ))}

          </TabList>
        </Box>

        <>
          {tabsPanels.map(({value, node}) => (
            <TabPanel key={value} value={value}>{node}</TabPanel>
          ))}
        </>

      </TabContext>
    </Box>
  )
}

export default TabsNavigationCustom
`;
  return data;
}
