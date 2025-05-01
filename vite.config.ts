import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	build: {
		rollupOptions: {
			input: {
				main: 'src/main.tsx' // Replace with your entry file
			},
			output: {
				dir: './extensions/order-forms-ext/assets',
				entryFileNames: 'order-forms-ext-index.js',
				assetFileNames: 'order-forms-ext-index.css',
				inlineDynamicImports: true,
			}
		}
	}
});
