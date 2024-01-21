import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [],
	resolve: {
		alias: {
			/*
			 * SCSS rewrites
			 */
			"~modern-normalize": fileURLToPath(
				new URL("./node_modules/modern-normalize", import.meta.url),
			),
		},
	},
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
