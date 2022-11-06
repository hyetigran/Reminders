module.exports = {
  arrowParens: 'avoid',
  bracketSameLine: true,
  bracketSpacing: false,
  singleQuote: true,
  jsxSingleQuote: true,
  trailingComma: 'all',
  bracketSpacing: true,
  printWidth: 80,

  importOrder: [
    '^lodash(.*)$',
    '^react(.*)$',
    // '^next(.*)$',
    // '^@solana/(.*)$',
    // '^@project-serum/(.*)$',
    // '^@chakra-ui/(.*)$',
    '.*',
  ],
  importOrderSortSpecifiers: true,
};
