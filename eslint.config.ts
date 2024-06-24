import style, { GLOB_JS } from "@isentinel/eslint-config";

export default style(
	{
		spellCheck: false,
		typescript: {
			parserOptions: {
				project: "tsconfig.build.json",
			},
		},
	},
	{
		ignores: [GLOB_JS],
	},
);
