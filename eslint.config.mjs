import eslintPluginAstro from 'eslint-plugin-astro';
import tsParser from '@typescript-eslint/parser';

export default [
    // 1. Définition des dossiers à ignorer (Global)
    {
        ignores: [
            ".astro/**",
            "dist/**",
            "node_modules/**",
            "public/**"
        ],
    },
    // 2. Configuration pour les fichiers Astro
    ...eslintPluginAstro.configs.recommended,
    {
        files: ["**/*.astro"],
        languageOptions: {
            parser: eslintPluginAstro.parser,
            parserOptions: {
                parser: tsParser,
                extraFileExtensions: [".astro"],
            },
        },
        rules: {
            "no-unused-vars": "error",
            "no-console": "warn",
            "eqeqeq": "error",
            "astro/no-set-html-directive": "error",
            "astro/no-unused-define-vars-in-style": "error",
            "no-warning-comments": ["warn", { "terms": ["todo", "fixme"], "location": "start" }],
            "complexity": ["warn", 10],
        },
    },
    // 3. Configuration pour les fichiers JS/TS classiques
    {
        files: ["**/*.{js,ts}"],
        languageOptions: {
            parser: tsParser,
        },
        rules: {
            "no-unused-vars": "error",
            "no-console": "warn",
        }
    }
];