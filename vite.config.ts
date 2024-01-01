import * as path from "path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), "");

	return {
		css: {
			modules: {
				generateScopedName: (name, filename) => {
					const basename = path.basename(filename);
					const componentName = basename.split(".module.scss")[0];
					return `${componentName}-${name}`;
				},
			},
		},
		define: {
			"process.env.REACT_APP_API_URL": JSON.stringify(env.REACT_APP_API_URL),
		},
		plugins: [react()],
	};
});
