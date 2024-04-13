
export const createViteConfig = () => {
  const data = `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
  
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
`;
  return data;
}
