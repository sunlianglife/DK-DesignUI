/**
 * rollup.config.js配置文件
 * rollup请参考: https://github.com/rollup/rollup
 * rollup/pluginq请参考:https://github.com/rollup/plugins
 * */ 

import bable from '@rollup/plugin-babel' // es6语法转换
import commonjs from '@rollup/plugin-commonjs' // commonjs 转换
import { nodeResolve } from '@rollup/plugin-node-resolve' // 在node_模块中查找并捆绑第三方依赖项
import postcss from 'rollup-plugin-postcss' // 解析css less文件
import autoprefixer from 'autoprefixer' // css3加前缀
import cssnano from 'cssnano' // css压缩
import strip from '@rollup/plugin-strip' // 从代码中删除调试器语句和assert、console.log等函数。
import builtins from 'rollup-plugin-node-builtins'
// import replace from '@rollup/plugin-replace' // 替换字符串
// import alisa from '@rollup/plugin-alias' //定义并解析捆绑依赖项的别名
import { terser } from 'rollup-plugin-terser' // 代码压缩
import typescript from 'rollup-plugin-typescript2'; // ts解析


// 依赖的三方库需要使用这种方式
const external = ['react','antd','antd/dist/antd.css']

// 插件
const plugins = [
    bable(),
    builtins(),
    nodeResolve(['js', 'ts']),
    commonjs(),
    typescript(),
    postcss({
        plugins:[
            autoprefixer(),
            cssnano()
        ]
    }),
    // strip()
]

// 基础组件配置
const Components = { // 基础组件
   input: './src/components/index.ts',
   output:[
    {
        file: "lib/index.js",
        format:'cjs',
    },
    {
        file: "es/index.js",
        format:'es',
    },
    {
        file: "dist/index.js",
        format:'umd',
        name: 'my-app',
        plugins:[
            terser()
        ]
    }
   ],
   plugins,
   external
}

// 多入口多出口，数组配置
const Config = [
    Components,
]

export default Config