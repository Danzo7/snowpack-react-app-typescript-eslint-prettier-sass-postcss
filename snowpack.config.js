/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-typescript',

    'snowpack-svgr-plugin',
    '@snowpack/plugin-postcss',
    [
      'snowpack-sass-compiler',
      {
        useAlias: true,
        aliasPrefix: '@',
        compilerOptions: {
          outputStyle: 'compressed',
          includePaths: [],
        },
      },
    ],
  ],

  alias: {

  },
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    bundle: true,
    minify:true,

  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
