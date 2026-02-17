/// <reference types="vite/client" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
import { libInjectCss } from 'vite-plugin-lib-inject-css'

export default defineConfig(({ mode }) => {
  const isLib = mode === 'lib'

  if (isLib) {
    return {
      plugins: [
        react(),
        tailwindcss(),
        libInjectCss(),
        dts({
          insertTypesEntry: true,
          rollupTypes: true,
          include: ['src/**/*.ts', 'src/**/*.tsx'],
          exclude: [
            'src/**/*.stories.tsx',
            'src/**/*.test.tsx',
            'src/**/*.spec.tsx',
            'src/App.tsx',
            'src/main.tsx',
          ],
          outDir: 'dist',
        }),
      ],
      resolve: {
        alias: {
          '@': resolve(__dirname, './src'),
        },
      },
      build: {
        lib: {
          entry: resolve(__dirname, 'src/index.ts'),
          // ✅ No 'name' field (deprecated in Vite 7)
          formats: ['es', 'cjs'],
          fileName: (format) => `index.${format === 'es' ? 'mjs' : 'cjs'}`,
        },
        rollupOptions: {
          external: [
            'react',
            'react-dom',
            'react/jsx-runtime',
            'lucide-react',
            '@radix-ui/react-slot',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-dialog',
            '@radix-ui/react-select',
            '@radix-ui/react-label',
            '@radix-ui/react-switch',
            '@radix-ui/react-tabs',
            '@radix-ui/react-toast',
          ],
          output: {
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM',
              'react/jsx-runtime': 'react/jsx-runtime',
            },
            // ✅ Renames style.css → index.css
            assetFileNames: (assetInfo) => {
              if (assetInfo.name?.endsWith('.css')) return 'index.css'
              return assetInfo.name ?? '[name][extname]'
            },
          },
        },
        // ✅ Critical: bundle all CSS into one file
        cssCodeSplit: false,
        sourcemap: true,
        outDir: 'dist',
        emptyOutDir: true,
      },
    }
  }

  // Development mode
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
    server: {
      port: 5173,
      open: true,
    },
  }
})
