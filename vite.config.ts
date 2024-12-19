import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [],
	build: {
		// Not needed for the amount of JavaScript this theme has
		modulePreload: false,
		rollupOptions: {
			input: {
				app: "./src/main.ts",
			},
			output: {
				dir: "./source", // Weird name, I know. This is the name hexo uses to add static resources.
				entryFileNames: "[name].js",
				assetFileNames: "[name].[ext]",
			},
		},
	},
});
