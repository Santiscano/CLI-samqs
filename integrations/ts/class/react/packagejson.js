
export const createPackageJson = () => {
  const data = `{
  "name": "client",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "@emotion/react": "^11.11.3",
    "@emotion/styled": "^11.11.0",
    "@iconify/react": "^4.1.1",
    "@mui/lab": "^5.0.0-alpha.165",
    "@mui/material": "^5.15.10",
    "@mui/x-data-grid": "^6.19.6",
    "@mui/x-date-pickers": "^6.19.6",
    "apexcharts": "^3.46.0",
    "dayjs": "^1.11.10",
    "numeral": "^2.0.6",
    "react": "^18.2.0",
    "react-apexcharts": "^1.4.1",
    "react-dom": "^18.2.0",
    "react-helmet-async": "^2.0.4",
    "react-hook-form": "^7.50.1",
    "react-icons": "^5.0.1",
    "react-pro-sidebar": "^1.1.0",
    "react-router-dom": "^6.22.1",
    "simplebar-react": "^3.2.4"
  },
  "devDependencies": {
    "@faker-js/faker": "^8.4.1",
    "@types/numeral": "^2.0.5",
    "@types/react": "^18.2.55",
    "@types/react-dom": "^18.2.19",
    "@typescript-eslint/eslint-plugin": "^6.21.0",
    "@typescript-eslint/parser": "^6.21.0",
    "@vitejs/plugin-react-swc": "^3.5.0",
    "date-fns": "^3.3.1",
    "eslint": "^8.56.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.5",
    "typescript": "^5.2.2",
    "vite": "^5.1.0"
  }
}
`;
  return data;
}
