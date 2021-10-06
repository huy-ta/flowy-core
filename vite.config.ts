import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
    lib: {
      entry: path.resolve(__dirname, 'lib/index.ts'),
      name: 'FlowyCore',
      fileName: (format) => `flowy-core.${format}.js`,
    },
  },
});
