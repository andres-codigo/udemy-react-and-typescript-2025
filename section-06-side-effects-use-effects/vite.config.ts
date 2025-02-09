import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint2';

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		port: 3000,
		open: true,
	},
	preview: {
		port: 3001,
		open: true,
	},
	plugins: [
		react(),
		eslint({
			include: ['src/**/*.ts', 'src/**/*.tsx'],
			exclude: ['node_modules', 'dist'],
		}),
	],
});
