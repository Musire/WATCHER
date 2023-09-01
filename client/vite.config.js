import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr' 

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  let env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.REACT_APP_API_URL': JSON.stringify(env.REACT_APP_API_URL),
      'process.env.REACT_APP_API_ENDPOINT': JSON.stringify(env.REACT_APP_API_ENDPOINT),
    },
    plugins: [
      react(),
      svgr()
    ],
  }
})