import minimist from 'minimist';
import vue from 'rollup-plugin-vue';
import buble from 'rollup-plugin-buble';
import babel from 'rollup-plugin-babel';
import common from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify-es';
import resolve from 'rollup-plugin-node-resolve';

const argv = minimist(process.argv.slice(2));

const config = {
    input: 'index.js',
    output: {
        name: 'Bricks',
        exports: 'named'
    },
    plugins: [
        resolve(),
        common(),
        vue({
            css: true,
            compileTemplate: true,
        }),
        babel({
            exclude: 'node_modules/**' // only transpile our source code
        }),
        buble(),
    ]
};

// Only minify browser (iife) version
if (argv.format === 'iife') {
    config.plugins.push(uglify());
}

export default config;