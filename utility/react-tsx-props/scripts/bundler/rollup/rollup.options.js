import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import esbuild from 'rollup-plugin-esbuild'
import json from '@rollup/plugin-json'
import typescript from '@rollup/plugin-typescript'

const production = process.env.NODE_ENV === 'production'

// prettier-ignore
export const options = (pkg) => ({
  rootDir = 'src',
  tsconfig = './tsconfig.json',
  typeCheck = false,
  tsOnly = false,
}) => ({
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.devDependencies || {}),
  ],
  plugins: [
    typescript({
      tsconfig,
      rootDir,
      noEmit: typeCheck,
    }),
    nodeResolve(),
    esbuild({
      // All options are optional
      include: tsOnly ? /\.tsx?$/ : /\.[jt]sx?$/, // default, inferred from `loaders` option
      exclude: [
        'react-native-fetch-blob',
        'react-native-fs',
        'shelljs',
        'alasql',
      ], // default
      sourceMap: !production,
      minify: production,
      target: 'esnext', // default, or 'es20XX', 'esnext'
      jsx: 'transform', // default, or 'preserve'
      jsxFactory: 'React.createElement',
      jsxFragment: 'React.Fragment',
      // Like @rollup/plugin-replace
      define: {
        __VERSION__: '"x.y.z"',
      },
      tsconfig: 'tsconfig.json', // default
      // Add extra loaders
      loaders: {
        // Add .json files support
        // require @rollup/plugin-commonjs
        '.json': 'json',
        // Enable JSX in .js files too
        '.js': 'jsx',
      },
    }),
    commonjs({
      strictRequires: true,
      sourceMap: false,
      transformMixedEsModules: true,
    }),
    json({
      compact: true,
    }),
  ],
})
