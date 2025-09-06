import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
dotenv.config({ path: "../.env" });

app.use(
	express.static(path.join(__dirname, "../client/dist"), {
		setHeaders: (res, path) => {
			if (path.endsWith(".js")) {
				res.setHeader("Content-Type", "application/javascript");
			}
		},
	})
);

const PORT = process.env.PORT;

app.get("/api/hello", (_, res) => {
	res.json({ message: "from Express JS!" });
});

app.use((req, res) => {
	res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
});

app.listen(PORT, () => {
	console.log(`Server listening at: http://localhost:${PORT}`);
});
