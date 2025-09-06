import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
export default defineConfig(({ mode }) => {
	// Load env variables from project root
	const env = loadEnv(mode, path.resolve(process.cwd(), ".."), "");

	return {
		plugins: [react()],
		server: {
			proxy: {
				"/api": `http://localhost:${env.PORT}`, // Fallback for safety
			},
		},
		base: "/", // Adjust if deploying to a subdirectory
	};
});
