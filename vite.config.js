import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { use } from 'react';

export default defineConfig({
    build: {
      outDir: 'build',
    },
    plugins: [react()],
    server: {
      host: true,
    },
});
