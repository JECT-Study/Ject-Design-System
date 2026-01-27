const config = {
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  printWidth: 100,
  plugins: ['@ianvs/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],

  // Import 정렬 규칙 (react -> next -> third party -> local)
  importOrder: [
    '^(react/(.*)$)|^(react$)',
    '^(next/(.*)$)|^(next$)',
    '<THIRD_PARTY_MODULES>',
    '',
    '^types$',
    '^@/types/(.*)$',
    '^@/config/(.*)$',
    '^@/utils/(.*)$',
    '^@/hooks/(.*)$',
    '^@/components/(.*)$',
    '^@/styles/(.*)$',
    '^@/shared/(.*)$',
    '^@/app/(.*)$',
    '',
    '^[./]',
  ],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderTypeScriptVersion: '5.0.0',
};

export default config;
