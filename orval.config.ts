import { defineConfig } from "orval";

export default defineConfig({
	api: {
		input: {
			target: "http://localhost:3333/docs/json",
		},
		output: {
			target: "./src/http/api.ts",
			// schemas: "./src/api/schemas",
			client: "fetch",
			httpClient: "fetch",
			clean: true,
			// mock: true,
			baseUrl: "http://localhost:3333",
			override: {
				fetch: {
					includeHttpResponseReturnType: false,
				},
			},
		},
	},
});
