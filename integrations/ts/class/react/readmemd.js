
export const createReadmemd = () => {
  const data = `# Template React + TypeScript + Vite + MUI to dashboard


*** Iconos ***
\`\`\`ts
https://react-icons.github.io/react-icons/
\`\`\`


*** Components ***
\`\`\`ts
https://mui.com/material-ui/getting-started/
\`\`\`

*** sidebar-pro ***
\`\`\`ts
https://www.npmjs.com/package/react-pro-sidebar

https://azouaoui-med.github.io/react-pro-sidebar/?path=/docs/submenu--basic
\`\`\`



### Crear listas en Sidebar
**src/layout/dashboard/Sidebar/common/ListSidebar.tsx**
en esta ruta se encuentra el archivo donde se deben agragar los nuevos componentes para el sidebar
**src/layout/dashboard/configNavigation.tsx**
en esta ruta se encuentra el archivo donde se deben agregar los arrays de los componentes del sidebar

## Crear pagina con proteccion o sin ella
**src/routes/index.tsx** aqui encontrare el archivo con la estructura de rutas y los componentes que estos llaman es decir las pages
la lista de roles se debe definir y esta en **src/components/config/SesionSettings.ts** y el rol se valida desde sesionStorage con idroles, si se quiere cambiar esto se debe configurar la funcion **validateHasRoleAllowed**


### Agregar temas de colores
**src/theme/palette.ts**
agregar un nuevo tema de color
[Material UI Theming Mezclar colores](https://mui.com/material-ui/customization/color/)
**src/theme/theme.interface.ts**
y agregar el nombre a los tipados

**src/components/config/SessionSettings.ts**
aqui se encuentra la variable settings que es la que tiene los valores predefinidos


**src/theme/useMode** - en la funcion **memoizedValue - palette**
definir el tema por defecto que tendra



### Agregar idioma

##### Iniciar a trabajar en desarrollo
1. cd/client
2. npm run dev
3. sesionStorage:
    1. accessToken: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ
    2. idroles: 1


### LINKS PARA TRABAJAR Y DESARROLLAR
[Minimal ui theme](https://minimals.cc/dashboard)
[Minimal free](https://minimal-kit-react.vercel.app/)
[Apex chart](https://apexcharts.com/docs/installation/)
[Material UI](https://mui.com/x/react-data-grid/editing/)
[React Icons](https://react-icons.github.io/react-icons/)






















## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level \`parserOptions\` property like this:

\`\`\`js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
\`\`\`

- Replace \`plugin:@typescript-eslint/recommended\` to \`plugin:@typescript-eslint/recommended-type-checked\` or \`plugin:@typescript-eslint/strict-type-checked\`
- Optionally add \`plugin:@typescript-eslint/stylistic-type-checked\`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add \`plugin:react/recommended\` & \`plugin:react/jsx-runtime\` to the \`extends\` list
`;
  return data;
}
