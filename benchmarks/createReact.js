import fs from 'fs';
import path from 'path';
import { 
  createAccountPopoverNavbar, createAppConversionRates, createAppCss, createAppCurrentSubject, createAppCurrentVisit, createAppNewUpdate, 
  createAppOrderTimeline, createAppTask, createAppTrafficBySite, createAppTsx, createAppWebsiteVisits, createAppbarNavbar, createAuthContainer, 
  createBarChart, createButtons, createCardWidget, createCards, createChart, createColumnsChart, createComponents, createComponentsPage, 
  createConfigLayout, createConfigNavigation, createCssTheme, createCustomShadow, createDashboardJson, createDataTable, createDataTableCustom, 
  createDrawerSidebar, createEditorConfig, createEslintrc, createForgotPassword, createFormatNumbers, createFormatTime, createGitignore, 
  createHomePage, createIconify, createIndexChart, createIndexDashboard, createIndexHtml, createIndexLandingpage, createIndexMock, 
  createIndexModuleAdminHome, createIndexNavbar, createIndexRoutes, createIndexSidebar, createIndexTheme, createInputDatePickers, 
  createInputFileUpload, createInputSelect, createInputs, createItemsListSidebar, createLandingpageJson, createLanguagePopoverNavbar, 
  createLayoutContext, createLineChart, createListSidebar, createLogin, createLoginPage, createLogo, createMain, createMainDashboard, 
  createManifestJson, createModelToggleNavbar, createNewPassword, createNewPasswordPage, createNotFound, createNotFoundPage, 
  createNotificationsPopover, createObjWithRoutes, createOverrides, createPackageJson, createPalette, createPaletteColorPopover, 
  createPieChart, createPruebaPalette, createRadarChart, createReadmemd, createRedirects, createRouterLink, createScrollbarIndex, 
  createScrollbarStyle, createSearchBar, createServerError, createServerErrorPage, createSessionSettings, createShadowTheme, 
  createSidebarLayout2, createSignUp, createSignUpPage, createTables, createTabsNavigationCustom, createTest, createTest3, 
  createTestPage, createThemeInterface, createTsConfigJson, createTsConfigNodeJson, createTypography, createUseColorPreset, 
  createUseLanguage, createUseModeTheme, createUsePathName, createUseResponsive, createUseRouter, createUseScrollToTop, createUserChart, 
  createUserSession, createUsers, createViteConfig, createViteEnvDTs, createWithAuthentication, createWithRoleAllowed, createWithoutAuthentication
} from '../integrations/ts/class/react/index.js';

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
    { route: '.editorconfig', data: createEditorConfig()  },
    { route: '.eslintrc.cjs', data: createEslintrc() },
    { route: '.gitignore', data: createGitignore() },
    { route: 'index.html', data: createIndexHtml() },
    { route: 'package.json', data: createPackageJson() },
    { route: 'README.md', data: createReadmemd() },
    { route: 'tsconfig.json', data: createTsConfigJson() },
    { route: 'tsconfig.node.json', data: createTsConfigNodeJson() },
    { route: 'vite.config.ts', data: createViteConfig() }
  ];
  filesConf.forEach(( {route, data }) => {
    const fullRoute = path.join(client, route);
    fs.writeFileSync( fullRoute, data );
  });

  // --------------------------ARCHIVOS DENTRO DE PUBLIC--------------------------------//
  const publicPath = path.join(client, '/public');
  const foldersPublic = [ '/favicon', 
    '/assets', '/assets/images', '/assets/icons', '/assets/background', '/assets/illustrations/',
    '/assets/images/avatars', '/assets/images/covers',
    '/assets/icons/glass'
  ];
  foldersPublic.forEach( folder => {
    const folderPath = path.join(publicPath, folder);
    fs.mkdirSync(folderPath);
  });

  const publicFiles = [
    { route: '_redirects', data: createRedirects() },
    { route: 'manifest.json', data: createManifestJson() },
  ];
  publicFiles.forEach(( {route, data }) => {
    let fullRoute = path.join(publicPath, route);
    fs.writeFileSync( fullRoute, data );
  });
  // TODO: aun debo averiguar como poder pegar aqui imagenes
  function formatPath(path) {
    return path.replace(/^\//, '').replace(/\//g, '\\');
  }
  const dirPath = path.dirname(new URL(import.meta.url).pathname);
  const formattedPath = formatPath(dirPath);

  const faviconPaths = [
    { origin: '/favicon/android-chrome-192x192.png' },
    { origin: '/favicon/android-chrome-512x512.png' },
    { origin: '/favicon/apple-touch-icon.png' },
    { origin: '/favicon/favicon-16x16.png' },
    { origin: '/favicon/favicon-32x32.png' },
    { origin: '/favicon/favicon.ico' },

    { origin: '/assets/background/overlay_4.jpg' },

    { origin: '/assets/illustrations/error-server-500.svg' },
    { origin: '/assets/illustrations/illustration_404.svg' },
    { origin: '/assets/illustrations/illustration_avatar.png' },
    { origin: '/assets/illustrations/illustration_login.png' },

    { origin: '/assets/icons/ic_flag_en.svg' },
    { origin: '/assets/icons/ic_flag_es.png' },
    { origin: '/assets/icons/ic_flag_fr.svg' },
    { origin: '/assets/icons/ic_flag_por.png' },
    { origin: '/assets/icons/ic_notification_chat.svg' },
    { origin: '/assets/icons/ic_notification_mail.svg' },
    { origin: '/assets/icons/ic_notification_package.svg' },
    { origin: '/assets/icons/ic_notification_shipping.svg' },

    { origin: '/assets/icons/glass/ic_glass_bag.png' },
    { origin: '/assets/icons/glass/ic_glass_buy.png' },
    { origin: '/assets/icons/glass/ic_glass_message.png' },
    { origin: '/assets/icons/glass/ic_glass_users.png' },

    { origin: '/assets/images/avatars/avatar_1.jpg' },
    { origin: '/assets/images/avatars/avatar_2.jpg' },
    { origin: '/assets/images/avatars/avatar_3.jpg' },
    { origin: '/assets/images/avatars/avatar_4.jpg' },
    { origin: '/assets/images/avatars/avatar_5.jpg' },
    { origin: '/assets/images/avatars/avatar_6.jpg' },
    { origin: '/assets/images/avatars/avatar_7.jpg' },
    { origin: '/assets/images/avatars/avatar_8.jpg' },
    { origin: '/assets/images/avatars/avatar_9.jpg' },
    { origin: '/assets/images/avatars/avatar_10.jpg' },
    { origin: '/assets/images/avatars/avatar_11.jpg' },
    { origin: '/assets/images/avatars/avatar_12.jpg' },
    { origin: '/assets/images/avatars/avatar_13.jpg' },
    { origin: '/assets/images/avatars/avatar_14.jpg' },
    { origin: '/assets/images/avatars/avatar_15.jpg' },
    { origin: '/assets/images/avatars/avatar_16.jpg' },
    { origin: '/assets/images/avatars/avatar_17.jpg' },
    { origin: '/assets/images/avatars/avatar_18.jpg' },
    { origin: '/assets/images/avatars/avatar_18.jpg' },
    { origin: '/assets/images/avatars/avatar_19.jpg' },
    { origin: '/assets/images/avatars/avatar_20.jpg' },
    { origin: '/assets/images/avatars/avatar_21.jpg' },
    { origin: '/assets/images/avatars/avatar_22.jpg' },
    { origin: '/assets/images/avatars/avatar_23.jpg' },
    { origin: '/assets/images/avatars/avatar_24.jpg' },
    { origin: '/assets/images/avatars/avatar_25.jpg' },

    { origin: '/assets/images/covers/cover_1.jpg' },
    { origin: '/assets/images/covers/cover_2.jpg' },
    { origin: '/assets/images/covers/cover_3.jpg' },
    { origin: '/assets/images/covers/cover_4.jpg' },
    { origin: '/assets/images/covers/cover_5.jpg' },
    { origin: '/assets/images/covers/cover_6.jpg' },
    { origin: '/assets/images/covers/cover_7.jpg' },
    { origin: '/assets/images/covers/cover_8.jpg' },
    { origin: '/assets/images/covers/cover_9.jpg' },
    { origin: '/assets/images/covers/cover_10.jpg' },
    { origin: '/assets/images/covers/cover_11.jpg' },
    { origin: '/assets/images/covers/cover_12.jpg' },
    { origin: '/assets/images/covers/cover_13.jpg' },
    { origin: '/assets/images/covers/cover_14.jpg' },
    { origin: '/assets/images/covers/cover_15.jpg' },
    { origin: '/assets/images/covers/cover_16.jpg' },
    { origin: '/assets/images/covers/cover_17.jpg' },
    { origin: '/assets/images/covers/cover_18.jpg' },
    { origin: '/assets/images/covers/cover_18.jpg' },
    { origin: '/assets/images/covers/cover_19.jpg' },
    { origin: '/assets/images/covers/cover_20.jpg' },
    { origin: '/assets/images/covers/cover_21.jpg' },
    { origin: '/assets/images/covers/cover_22.jpg' },
    { origin: '/assets/images/covers/cover_23.jpg' },
    { origin: '/assets/images/covers/cover_24.jpg' },
  ]

  faviconPaths.forEach(({ origin }) => {
    let fullOrigin = path.join( formattedPath , '../integrations/ts/class/react/public', origin );
    let fullDestiny = path.join( publicPath, origin );
    fs.copyFileSync(fullOrigin, fullDestiny);
  });
  // --------------------------ARCHIVOS DENTRO DE MOCK--------------------------------//
  const mockPath = path.join(client, '/mock');
  const filesMock = [
    { route: 'index.ts', data: createIndexMock() },
    { route: 'users.ts', data: createUsers() },
    { route: 'userSession.ts', data: createUserSession() },
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
    { route: 'App.css', data: createAppCss() },
    { route: 'App.tsx', data: createAppTsx() },
    { route: 'main.tsx', data: createMain() },
    { route: 'vite-env.d.ts', data: createViteEnvDTs() },
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
    { route: '/chart/BarChart.tsx',               data: createBarChart() },
    { route: '/chart/chart.ts',                   data: createChart() },
    { route: '/chart/ColumnsChart.tsx',           data: createColumnsChart() },
    { route: '/chart/index.tsx',                  data: createIndexChart() },
    { route: '/chart/LineChart.tsx',              data: createLineChart() },
    { route: '/chart/PieChart.tsx',               data: createPieChart() },
    { route: '/chart/RadarChart.tsx',             data: createRadarChart() },
    { route: '/chart/user-chart.ts',              data: createUserChart() },
    { route: '/common/Scrollbar/index.tsx',       data: createScrollbarIndex() },
    { route: '/common/Scrollbar/style.ts',        data: createScrollbarStyle() },
    { route: '/common/CardWidget.tsx',            data: createCardWidget() },
    { route: '/common/DataTable.tsx',             data: createDataTable() },
    { route: '/common/DataTableCustom.tsx',       data: createDataTableCustom() },
    { route: '/common/Iconify.tsx',               data: createIconify() },
    { route: '/common/InputDatePicker.tsx',       data: createInputDatePickers() },
    { route: '/common/InputFileUpload.tsx',       data: createInputFileUpload() },
    { route: '/common/InputSelect.tsx',           data: createInputSelect() },
    { route: '/common/Logo.tsx',                  data: createLogo() },
    { route: '/common/TabsNavigationCustom.tsx',  data: createTabsNavigationCustom() },
    { route: '/config/SessionSettings.ts',         data: createSessionSettings() },
    { route: '/tools/RouterLink.tsx',             data: createRouterLink() },
  ];
  filesComponents.forEach(({ route, data }) => {
    let fullRoute = path.join(componentsPath, route);
    fs.writeFileSync(fullRoute, data);
  });
  // --------------------------ARCHIVOS DENTRO DE CONTEXT--------------------------------//
  const contextPath = path.join(src,'/context');
  const filesContext = [
    { route: '/LayoutContext.tsx', data: createLayoutContext() },
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
    { route: '/routes/usePathName.ts', data: createUsePathName() },
    { route: '/routes/useRouter.ts', data: createUseRouter() },
    { route: 'useResponsive.ts', data: createUseResponsive() },
    { route: 'useScrollToTop.ts', data: createUseScrollToTop() },
  ];
  filesHooks.forEach(({ route, data }) => {
    let fullRoute = path.join(hooksPath, route);
    fs.writeFileSync(fullRoute, data);
  });
  // --------------------------ARCHIVOS DENTRO DE LANG--------------------------------//
  const langPath = path.join(src,'/lang');
  const filesLang = [
    { route: 'dasboard.json', data: createDashboardJson() },
    { route: 'landingPage.json', data: createLandingpageJson() },
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
    { route: '/dashboard/configLayout.ts',                            data: createConfigLayout() },
    { route: '/dashboard/configNavigation.tsx',                       data: createConfigNavigation() },
    { route: '/dashboard/index.tsx',                                  data: createIndexDashboard() },
    { route: '/dashboard/Main.tsx',                                   data: createMainDashboard() },
    { route: '/dashboard/SidebarLayout2.tsx',                         data: createSidebarLayout2() },
    { route: '/dashboard/Navbar/index.tsx',                           data: createIndexNavbar() },
    { route: '/dashboard/Navbar/components/AccountPopover.tsx',       data: createAccountPopoverNavbar() },
    { route: '/dashboard/Navbar/components/Appbar.tsx',               data: createAppbarNavbar() },
    { route: '/dashboard/Navbar/components/LanguagePopover.tsx',      data: createLanguagePopoverNavbar() },
    { route: '/dashboard/Navbar/components/ModeToggle.tsx',           data: createModelToggleNavbar() },
    { route: '/dashboard/Navbar/components/NotificationsPopover.tsx', data: createNotificationsPopover() },
    { route: '/dashboard/Navbar/components/PaletteColorPopover.tsx',  data: createPaletteColorPopover() },
    { route: '/dashboard/Navbar/components/SearchBar.tsx',            data: createSearchBar() },
    { route: '/dashboard/Sidebar/index.tsx',                          data: createIndexSidebar() },
    { route: '/dashboard/Sidebar/common/ItemsList.tsx',               data: createItemsListSidebar() },
    { route: '/dashboard/Sidebar/common/ListSidebar.tsx',             data: createListSidebar() },
    { route: '/dashboard/Sidebar/components/Drawer.tsx',              data: createDrawerSidebar() },
    { route: '/landingpage/index.tsx',                                data: createIndexLandingpage() },
    { route: '/others/AuthContainer.tsx',                             data: createAuthContainer() },
  ];
  filesLayout.forEach(({ route, data }) => {
    let fullRoute = path.join(layoutPath, route);
    fs.writeFileSync(fullRoute, data);
  });
  // --------------------------ARCHIVOS DENTRO DE MIDDLEWARES--------------------------------//
  const middlewaresPath = path.join(src,'/middlewares');
  const filesMiddlewares = [
    { route: 'WithAuthentication.tsx',    data: createWithAuthentication() },
    { route: 'WithoutAuthentication.tsx', data: createWithoutAuthentication() },
    { route: 'WithRoleAllowed.tsx',       data: createWithRoleAllowed() },
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
    { route: '/Admin/Develop/Components.tsx',                 data: createComponents() },
    { route: '/Admin/Develop/components/Buttons.tsx',         data: createButtons() },
    { route: '/Admin/Develop/components/Cards.tsx',           data: createCards() },
    { route: '/Admin/Develop/components/Inputs.tsx',          data: createInputs() },
    { route: '/Admin/Develop/components/Tables.tsx',          data: createTables() },
    { route: '/Admin/Home/index.tsx',                         data: createIndexModuleAdminHome() },
    { route: '/Admin/Home/components/AppConversionRates.tsx', data: createAppConversionRates() },
    { route: '/Admin/Home/components/AppCurrentSubject.tsx',  data: createAppCurrentSubject() },
    { route: '/Admin/Home/components/AppCurrentVisit.tsx',    data: createAppCurrentVisit() },
    { route: '/Admin/Home/components/AppNewsUpdate.tsx',      data: createAppNewUpdate() },
    { route: '/Admin/Home/components/AppOrderTimeline.tsx',   data: createAppOrderTimeline() },
    { route: '/Admin/Home/components/AppTask.tsx',            data: createAppTask() },
    { route: '/Admin/Home/components/AppTrafficBySite.tsx',   data: createAppTrafficBySite() },
    { route: '/Admin/Home/components/AppWebsiteVisits.tsx',   data: createAppWebsiteVisits() },
    { route: '/Auth/ForgotPassword/index.tsx',                data: createForgotPassword() },
    { route: '/Auth/Login/index.tsx',                         data: createLogin() },
    { route: '/Auth/NewPassword/index.tsx',                   data: createNewPassword() },
    { route: '/Auth/SignUp/index.tsx',                        data: createSignUp() },
    { route: '/Public/Errors/NotFound.tsx',                   data: createNotFound() },
    { route: '/Public/Errors/ServerError.tsx',                data: createServerError() },
    { route: '/Public/Test/index.tsx',                        data: createTest() },
    { route: '/Public/Test/index3.tsx',                       data: createTest3() },
  ];
  filesModules.forEach(({ route, data }) => {
    let fullRoute = path.join(modulesPath, route);
    fs.writeFileSync(fullRoute, data);
  });
  // --------------------------ARCHIVOS DENTRO DE PAGES--------------------------------//
  const pagesPath = path.join(src,'/pages');
  const filesPages = [
    { route: 'Components.tsx',      data: createComponentsPage() },
    { route: 'ForgotPassword.tsx',  data: createForgotPassword() },
    { route: 'Home.tsx',            data: createHomePage() },
    { route: 'Login.tsx',           data: createLoginPage() },
    { route: 'NewPassword.tsx',     data: createNewPasswordPage() },
    { route: 'NotFound.tsx',        data: createNotFoundPage() },
    { route: 'ServerError.tsx',     data: createServerErrorPage() },
    { route: 'SignUp.tsx',          data: createSignUpPage() },
    { route: 'Test.tsx',            data: createTestPage() },
  ];
  filesPages.forEach(({ route, data }) => {
    let fullRoute = path.join(pagesPath, route);
    fs.writeFileSync(fullRoute, data);
  });
  // --------------------------ARCHIVOS DENTRO DE ROUTES--------------------------------//
  const routesPath = path.join(src, '/routes');
  const filesRoutes = [
    { route: 'index.tsx',         data: createIndexRoutes() },
    { route: 'ObjWithRoutes.tsx', data: createObjWithRoutes() },
  ];
  filesRoutes.forEach(({ route, data }) => {
    let fullRoute = path.join(routesPath, route);
    fs.writeFileSync(fullRoute, data);
  });
  // --------------------------ARCHIVOS DENTRO DE THEME--------------------------------//
  const themePath = path.join(src, '/theme');
  const filesTheme = [
    { route: 'css.ts',              data: createCssTheme() },
    { route: 'customShadow.ts',     data: createCustomShadow() },
    { route: 'index.tsx',           data: createIndexTheme() },
    { route: 'overrides.ts',        data: createOverrides() },
    { route: 'palette.ts',          data: createPalette() },
    { route: 'pruebaPalette.ts',    data: createPruebaPalette() },
    { route: 'shadow.ts',           data: createShadowTheme() },
    { route: 'theme.interface.ts',  data: createThemeInterface() },
    { route: 'typography.ts',       data: createTypography() },
    { route: 'useColorPreset.tsx',  data: createUseColorPreset() },
    { route: 'useLanguage.tsx',     data: createUseLanguage() },
    { route: 'useModeTheme.tsx',    data: createUseModeTheme() },
  ];
  filesTheme.forEach(( { route, data }) => {
    let fullRoute = path.join(themePath, route);
    fs.writeFileSync(fullRoute, data);
  });
  // --------------------------ARCHIVOS DENTRO DE UTILS--------------------------------//
  const utilsPath = path.join(src, '/utils');
  const filesUtils = [
    { route: 'format-numbers.ts', data: createFormatNumbers() },
    { route: 'format-time.ts',    data: createFormatTime() },
  ];
  filesUtils.forEach(( {route, data }) => {
    let fullRoute = path.join(utilsPath, route);
    fs.writeFileSync(fullRoute, data);
  });

  return true;
};
