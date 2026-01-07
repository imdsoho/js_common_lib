import html from 'rollup-plugin-generate-html-template';
import browsersync from 'rollup-plugin-browsersync';

// 외부 플러그인을 rollup.plugin.js에 불러오고 정의
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default[
    {
        input: './src/index.js',
        output: {
            file: './dist/bundle.umd.js',
            format: 'umd',
            name: "sbl",
            //console.log(window.sbl.sum(1, 2));
            sourcemap: true
        }
        /*plugins: [
            browsersync({
                server: 'dist'
            }),
            html({
                template: 'src/index.html',
                target: 'dist/index.html'
            })
        ]*/
    },
    {
        input: './src/index.js',
        output: {
            file: './dist/bundle.esm.js',
            format: 'esm',
            sourcemap: true
        },
        plugins: [
            browsersync({
                server: 'dist'
            }),
            html({
                template: 'src/index.html',
                target: 'dist/index.html'
            })           ,
            resolve(),
            commonjs({
                include: 'node_modules/**',
            })
        ]
    },{
        input: './src/index.js',
        output: {
            file: './dist/bundle.cjs.js',
            format: 'cjs',
            exports: "named",
            sourcemap: true
        }
    }
]
