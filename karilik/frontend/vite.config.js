// CommonJS-compatible Vite config that dynamically imports the ESM-only plugin.
module.exports = async () => {
  const { default: react } = await import('@vitejs/plugin-react');
  return {
    plugins: [react()],
    server: {
      port: 3000,
      open: true,
    },
    build: {
      outDir: 'dist',
    },
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  };
};