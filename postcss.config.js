module.exports = ({ env }) => ({
  plugins: {
    tailwindcss: {},
    'postcss-focus-visible': {},
    autoprefixer: {},
    cssnano: env === 'production' ? { preset: 'default' } : false,
  },
});
