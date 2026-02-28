import { defineConfig } from 'vite'
import react from '@vitejs/react-vite'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/gas-100-knock/',
})
