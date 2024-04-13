
export const createMain = () => {
  const data = `import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { ThemeContextProvider } from './theme';
import App from './App.tsx'
import { LayoutContextProvider } from './context/LayoutContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <HelmetProvider>
    <BrowserRouter>
      <Suspense>

        <ThemeContextProvider>
          <LayoutContextProvider>
            <App />
          </LayoutContextProvider>
        </ThemeContextProvider>

      </Suspense>
    </BrowserRouter>
  </HelmetProvider>,
)
`;
  return data;
}
