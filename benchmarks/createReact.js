import fs from 'fs';
import path from 'path';
// import {} from '../integrations/ts/class/react/index.js';

export const createProyectReactTsClass = async ( fileProyectPath, nameProyect, descriptionProyect ) => {
  // crear carpetas principales
  const client = path.join(fileProyectPath, "/client");

  const foldersPrimary = [ '/src', '/public', '/mock' ];
  foldersPrimary.forEach( folder => {
    const folderPath = path.join(client, folder);
    fs.mkdirSync(folderPath);
  });

  // crear archivos configuracion
  const filesConf = [
    { route: '.editorconfig', data: 'hola'  },
    { route: '.eslintrc.cjs', data: 'hola'  },
    { route: '.gitignore', data: 'hola'  },
    { route: 'index.html', data: 'hola'  },
    { route: 'package.json', data: 'hola'  },
    { route: 'README.md', data: 'hola'  },
    { route: 'tsconfig.json', data: 'hola'  },
    { route: 'tsconfig.node.json', data: 'hola'  },
    { route: 'vite.config.ts', data: 'hola'  }
  ];
  filesConf.forEach(( {route, data }) => {
    const fullRoute = path.join(client, route);
    fs.writeFileSync( fullRoute, data );
  });

  // --------------------------ARCHIVOS DENTRO DE PUBLIC--------------------------------//
  const publicPath = path.join(client, '/public');
  const publicFiles = [
    { route: '_redirects', data: 'hola' },
    { route: 'manifest.json', data: 'hola' },
    // TODO: aun debo averiguar como poder pegar aqui imagenes
  ];
  publicFiles.forEach(( {route, data }) => {
    let fullRoute = path.join(publicPath, route);
    fs.writeFileSync( fullRoute, data );
  });
  // --------------------------ARCHIVOS DENTRO DE MOCK--------------------------------//
  const mockPath = path.join(client, '/mock');
  const filesMock = [
    { route: 'index.ts', data: 'hola' },
    { route: 'users.ts', data: 'hola' },
    { route: 'userSession.ts', data: 'hola' },
  ];
  filesMock.forEach(({ route, data }) => {
    let fullRoute = path.join( mockPath, route );
    fs.writeFileSync(fullRoute, data);
  });
  // --------------------------ARCHIVOS DENTRO DE SRC--------------------------------//
  const src = path.join(client, '/src');
  // crear carpetas
  const foldersSrc = ['/components', '/context', '/hooks', '/lang', '/layout', '/middlewares', '/mock', '/modules', '/pages', '/routes', '/theme', '/utils' ];
  foldersSrc.forEach( folder => {
    let folderPath = path.join( src, folder );
    fs.mkdirSync(folderPath);
  });
  // crear archivos
  const filesSrc = [
    { route: 'App.css', data: 'hola' },
    { route: 'App.tsx', data: 'hola' },
    { route: 'main.tsx', data: 'hola' },
    { route: 'vite-env.d.ts', data: 'hola' },
  ];
  filesSrc.forEach(( {route, data }) => {
    let fullRoute = path.join(src, route);
    fs.writeFileSync(fullRoute ,data);
  });

  // --------------------------ARCHIVOS DENTRO DE COMPONENTS--------------------------------//
  const componentsPath = path.join(src,'/components');

  const foldersComponents = [ '/chart', '/common', '/common/Scrollbar', '/config', '/global', 
    '/tools', '/views' 
  ];
  foldersComponents.forEach( folder => {
    let  folderComponent = path.join( componentsPath, folder ) ;
    fs.mkdirSync(folderComponent);
  });

  const filesComponents = [
    { route: '/chart/BarChart.tsx',               data: 'hola' },
    { route: '/chart/chart.ts',                   data: 'hola' },
    { route: '/chart/ColumnsChart.tsx',           data: 'hola' },
    { route: '/chart/index.tsx',                  data: 'hola' },
    { route: '/chart/LineChart.tsx',              data: 'hola' },
    { route: '/chart/PieChart.tsx',               data: 'hola' },
    { route: '/chart/RadarChart.tsx',             data: 'hola' },
    { route: '/chart/user-chart.ts',              data: 'hola' },
    { route: '/common/Scrollbar/index.tsx',       data: 'hola' },
    { route: '/common/Scrollbar/style.ts',        data: 'hola' },
    { route: '/common/CardWidget.tsx',            data: 'hola' },
    { route: '/common/DataTable.tsx',             data: 'hola' },
    { route: '/common/DataTableCustom.tsx',       data: 'hola' },
    { route: '/common/Iconify.tsx',               data: 'hola' },
    { route: '/common/InputDatePicker.tsx',       data: 'hola' },
    { route: '/common/InputFileUpload.tsx',       data: 'hola' },
    { route: '/common/InputSelect.tsx',           data: 'hola' },
    { route: '/common/Logo.tsx',                  data: 'hola' },
    { route: '/common/TabsNavigationCustom.tsx',  data: 'hola' },
    { route: '/config/SesionSettings.ts',         data: 'hola' },
    { route: '/tools/RouterLink.tsx',             data: 'hola' },
  ];
  filesComponents.forEach(({ route, data }) => {
    let fullRoute = path.join(componentsPath, route);
    fs.writeFileSync(fullRoute, data);
  });
  // --------------------------ARCHIVOS DENTRO DE CONTEXT--------------------------------//
  const contextPath = path.join(src,'/context');
  const filesContext = [
    { route: '/LayoutContext.tsx', data: 'hola' },
  ];
  filesContext.forEach(({ route, data }) => {
    let fullRoute = path.join(contextPath, route);
    fs.writeFileSync(fullRoute, data);
  });
  // --------------------------ARCHIVOS DENTRO DE HOOKS--------------------------------//
  const hooksPath = path.join(src,'/hooks');
  const foldersHooks = [ '/routes' ];
  foldersHooks.forEach( folder => {
    let  folderComponent = path.join( hooksPath, folder ) ;
    fs.mkdirSync(folderComponent);
  });

  const filesHooks = [
    { route: '/routes/usePathName.ts', data: 'hola' },
    { route: '/routes/useRouter.ts', data: 'hola' },
    { route: 'useResponsive.ts', data: 'hola' },
    { route: 'useScrollToTop.ts', data: 'hola' },
  ];
  filesHooks.forEach(({ route, data }) => {
    let fullRoute = path.join(hooksPath, route);
    fs.writeFileSync(fullRoute, data);
  });
  // --------------------------ARCHIVOS DENTRO DE LANG--------------------------------//
  const langPath = path.join(src,'/lang');
  const filesLang = [
    { route: 'dasboard.json', data: 'hola' },
    { route: 'landingPage.json', data: 'hola' },
  ];
  filesLang.forEach(({ route, data }) => {
    let fullRoute = path.join(langPath, route);
    fs.writeFileSync(fullRoute, data);
  });
  // --------------------------ARCHIVOS DENTRO DE LAYOUT--------------------------------//
  const layoutPath = path.join(src,'/layout');
  const foldersLayout = [ '/dashboard', '/dashboard/common', '/dashboard/Navbar', '/dashboard/Navbar/components', 
    '/dashboard/Sidebar', '/dashboard/Sidebar/common', '/dashboard/Sidebar/components', '/landingpage', 
    '/others' 
  ];
  foldersLayout.forEach( folder => {
    let folderLayout = path.join( layoutPath, folder );
    fs.mkdirSync(folderLayout);
  });

  const filesLayout = [
    { route: '/dashboard/configLayout.ts',                            data: 'hola' },
    { route: '/dashboard/configNavigation.tsx',                       data: 'hola' },
    { route: '/dashboard/index.tsx',                                  data: 'hola' },
    { route: '/dashboard/Main.tsx',                                   data: 'hola' },
    { route: '/dashboard/SidebarLayout2.tsx',                         data: 'hola' },
    { route: '/dashboard/Navbar/index.tsx',                           data: 'hola' },
    { route: '/dashboard/Navbar/components/AccountPopover.tsx',       data: 'hola' },
    { route: '/dashboard/Navbar/components/Appbar.tsx',               data: 'hola' },
    { route: '/dashboard/Navbar/components/LanguagePopover.tsx',      data: 'hola' },
    { route: '/dashboard/Navbar/components/ModeToggle.tsx',           data: 'hola' },
    { route: '/dashboard/Navbar/components/NotificationsPopover.tsx', data: 'hola' },
    { route: '/dashboard/Navbar/components/PaletteColorPopover.tsx',  data: 'hola' },
    { route: '/dashboard/Navbar/components/SearchBar.tsx',            data: 'hola' },
    { route: '/dashboard/Sidebar/index.tsx',                          data: 'hola' },
    { route: '/dashboard/Sidebar/common/ItemsList.tsx',               data: 'hola' },
    { route: '/dashboard/Sidebar/common/ListSidebar.tsx',             data: 'hola' },
    { route: '/dashboard/Sidebar/components/Drawer.tsx',              data: 'hola' },
    { route: '/landingpage/index.tsx',                                data: 'hola' },
    { route: '/others/AuthContainer.tsx',                             data: 'hola' },
  ];
  filesLayout.forEach(({ route, data }) => {
    let fullRoute = path.join(layoutPath, route);
    fs.writeFileSync(fullRoute, data);
  });
  // --------------------------ARCHIVOS DENTRO DE MIDDLEWARES--------------------------------//
  const middlewaresPath = path.join(src,'/middlewares');
  const filesMiddlewares = [
    { route: 'WithAuthentication.tsx', data: 'hola' },
    { route: 'WithoutAuthentication.tsx', data: 'hola' },
    { route: 'WithRoleAllowed.tsx', data: 'hola' },
  ];
  filesMiddlewares.forEach(({ route, data }) => {
    let fullRoute = path.join(middlewaresPath, route);
    fs.writeFileSync(fullRoute, data);
  });
  // --------------------------ARCHIVOS DENTRO DE MODULES--------------------------------//
  const modulesPath = path.join(src,'/modules');
  const foldersModules = [ '/Admin', '/Admin/Develop', '/Admin/Develop/components', '/Admin/Home', 
    '/Admin/Home/components','/Auth', '/Auth/ForgotPassword', '/Auth/Login', '/Auth/NewPassword', 
    '/Auth/SignUp', '/Public', '/Public/Errors', '/Public/Test', 
  ];
  foldersModules.forEach( folder => {
    let folderLayout = path.join( modulesPath, folder );
    fs.mkdirSync(folderLayout);
  });

  const filesModules = [
    { route: '/Admin/Develop/Components.tsx', data: 'hola' },
    { route: '/Admin/Develop/components/Buttons.tsx', data: 'hola' },
    { route: '/Admin/Develop/components/Cards.tsx', data: 'hola' },
    { route: '/Admin/Develop/components/Inputs.tsx', data: 'hola' },
    { route: '/Admin/Develop/components/Tables.tsx', data: 'hola' },
    { route: '/Admin/Home/index.tsx', data: 'hola' },
    { route: '/Admin/Home/components/AppConversionRates.tsx', data: 'hola' },
    { route: '/Admin/Home/components/AppCurrentSubject.tsx', data: 'hola' },
    { route: '/Admin/Home/components/AppCurrentVisit.tsx', data: 'hola' },
    { route: '/Admin/Home/components/AppNewsUpdate.tsx', data: 'hola' },
    { route: '/Admin/Home/components/AppOrderTimeline.tsx', data: 'hola' },
    { route: '/Admin/Home/components/AppTask.tsx', data: 'hola' },
    { route: '/Admin/Home/components/AppTrafficBySite.tsx', data: 'hola' },
    { route: '/Admin/Home/components/AppWebsiteVisits.tsx', data: 'hola' },
    { route: '/Auth/ForgotPassword/index.tsx', data: 'hola' },
    { route: '/Auth/Login/index.tsx', data: 'hola' },
    { route: '/Auth/NewPassword/index.tsx', data: 'hola' },
    { route: '/Auth/SignUp/index.tsx', data: 'hola' },
    { route: '/Public/Errors/NotFound.tsx', data: 'hola' },
    { route: '/Public/Errors/ServerError.tsx', data: 'hola' },
    { route: '/Public/Test/index.tsx', data: 'hola' },
    { route: '/Public/Test/index3.tsx', data: 'hola' },
  ];
  filesModules.forEach(({ route, data }) => {
    let fullRoute = path.join(modulesPath, route);
    fs.writeFileSync(fullRoute, data);
  });
  // --------------------------ARCHIVOS DENTRO DE PAGES--------------------------------//
  const pagesPath = path.join(src,'/pages');
  const filesPages = [
    { route: 'Components.tsx', data: 'hola' },
    { route: 'ForgotPassword.tsx', data: 'hola' },
    { route: 'Home.tsx', data: 'hola' },
    { route: 'Login.tsx', data: 'hola' },
    { route: 'NewPassword.tsx', data: 'hola' },
    { route: 'NotFound.tsx', data: 'hola' },
    { route: 'ServerError.tsx', data: 'hola' },
    { route: 'SignUp.tsx', data: 'hola' },
    { route: 'Test.tsx', data: 'hola' },
  ];
  filesPages.forEach(({ route, data }) => {
    let fullRoute = path.join(pagesPath, route);
    fs.writeFileSync(fullRoute, data);
  });
  // --------------------------ARCHIVOS DENTRO DE ROUTES--------------------------------//
  const routesPath = path.join(src, '/routes');
  const filesRoutes = [
    { route: 'index.tsx', data: 'hola' },
    { route: 'ObjWithRoutes.tsx', data: 'hola' },
  ];
  filesRoutes.forEach(({ route, data }) => {
    let fullRoute = path.join(routesPath, route);
    fs.writeFileSync(fullRoute, data);
  });
  // --------------------------ARCHIVOS DENTRO DE THEME--------------------------------//
  const themePath = path.join(src, '/theme');
  const filesTheme = [
    { route: 'css.ts', data: 'hola' },
    { route: 'customShadow.ts', data: 'hola' },
    { route: 'index.tsx', data: 'hola' },
    { route: 'overrides.ts', data: 'hola' },
    { route: 'palette.ts', data: 'hola' },
    { route: 'pruebaPalette.ts', data: 'hola' },
    { route: 'shadow.ts', data: 'hola' },
    { route: 'theme.interface.ts', data: 'hola' },
    { route: 'typography.ts', data: 'hola' },
    { route: 'useColorPreset.tsx', data: 'hola' },
    { route: 'useLanguage.tsx', data: 'hola' },
    { route: 'useModeTheme.tsx', data: 'hola' },
  ];
  filesTheme.forEach(( { route, data }) => {
    let fullRoute = path.join(themePath, route);
    fs.writeFileSync(fullRoute, data);
  });
  // --------------------------ARCHIVOS DENTRO DE UTILS--------------------------------//
  const utilsPath = path.join(src, '/utils');
  const filesUtils = [
    { route: 'format-numbers.ts', data: 'hola' },
    { route: 'format-time.ts', data: 'hola' },
  ];
  filesUtils.forEach(( {route, data }) => {
    let fullRoute = path.join(utilsPath, route);
    fs.writeFileSync(fullRoute, data);
  });

  return true;
};
