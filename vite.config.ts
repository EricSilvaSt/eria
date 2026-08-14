import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

// https://vitejs.dev/config/
export default defineConfig({
  cacheDir: join(tmpdir(), 'eria-institucional-vite-cache'),
  plugins: [react()],
});
