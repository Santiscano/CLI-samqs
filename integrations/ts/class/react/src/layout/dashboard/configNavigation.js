
export const createConfigNavigation = () => {
  const data = `import { HiOutlineBeaker, HiOutlineBookOpen, HiOutlineChartBar, HiOutlineChartSquareBar, HiOutlineCode, HiOutlineHome } from "react-icons/hi";

export const homeConf = [
  {
    name: 'home',
    path: '/dashboard/home',
    icon: <HiOutlineHome />
  }
];

export const exampleConfig = [
  {
    name: 'test',
    path: '/dashboard/radicacion/test',
    icon: <HiOutlineBeaker />
  },
  {
    name: 'test2',
    path: '/dashboard/radicacion/test2',
    icon: <HiOutlineBookOpen />
  }
];

export const exampleWithoutConf = [
  {
    name: 'without',
    path: '/dashboard/without',
    icon: <HiOutlineChartBar/>
  },
  {
    name: 'without-2',
    path: '/dashboard/without-2',
    icon: <HiOutlineChartSquareBar  />
  }
];


// TODO: SIEMPRE MANTENER DE ULTIMO
export const developConfig = [
  {
    name: 'components',
    path: '/dashboard/components/all',
    icon: <HiOutlineCode />,
  }
];
`;
  return data;
}
