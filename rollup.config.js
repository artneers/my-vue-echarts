import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import vue from 'rollup-plugin-vue';
import babel from 'rollup-plugin-babel';
import terser from '@rollup/plugin-terser';
import del from 'rollup-plugin-delete'

const config = [
  {
    input: 'src/index.js', // 入口文件
    output: [
      {
        format: 'es',
        file: 'dist/my-vue2-component-library.esm.js'
      },
      {
        format: 'cjs',
        file: 'dist/my-vue2-component-library.cjs.js'
      },
      {
        format: 'umd',
        name: 'MyVue2ComponentLibrary',
        file: 'dist/my-vue2-component-library.umd.js'
      }
    ],
    plugins: [
      del({ targets: 'dist/*' }), // 删除 dist 目录下的所有文件
      resolve(),
      commonjs(),
      vue({ css: true, compileTemplate: true }),
      babel({
        exclude: 'node_modules/**',
        runtimeHelpers: true
      }),
      terser()
    ]
  },
  // {
  //   input: 'src/components/BarCharts/index.js', // 单个组件的入口文件
  //   output: [
  //     {
  //       format: 'es',
  //       file: 'dist/components/BarCharts.esm.js'
  //     },
  //     {
  //       format: 'cjs',
  //       file: 'dist/components/BarCharts.cjs.js'
  //     },
  //     {
  //       format: 'umd',
  //       name: 'BarCharts',
  //       file: 'dist/components/BarCharts.umd.js'
  //     }
  //   ],
  //   plugins: [
  //     resolve(),
  //     commonjs(),
  //     vue({ css: true, compileTemplate: true }),
  //     babel({
  //       exclude: 'node_modules/**',
  //       runtimeHelpers: true
  //     }),
  //     terser()
  //   ]
  // }
];

export default config;
