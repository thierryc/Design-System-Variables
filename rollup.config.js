import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import prettier from 'rollup-plugin-prettier';
import stripBanner from 'rollup-plugin-strip-banner';
import replace from 'rollup-plugin-replace';
import pkg from './package.json';


export default [
	// browser-friendly UMD build
	{
		input: 'src/index.js',
		output: {
			name: 'designSystemVariables',
			file: pkg.browser,
			format: 'umd'
		},
		plugins: [
			resolve(), // so Rollup can find `ms`
			commonjs(), // so Rollup can convert `ms` to an ES module
			babel({
				exclude: ['node_modules/**']
			}),
			stripBanner({
				exclude: 'node_modules/**/*',
			}),
			prettier({
				tabWidth: 2,
				singleQuote: false,
				parser: 'babel',
			}),
			replace({
				ENVIRONMENT: JSON.stringify('production')
			}),
		]
	},

	// CommonJS (for Node) and ES module (for bundlers) build.
	// (We could have three entries in the configuration array
	// instead of two, but it's quicker to generate multiple
	// builds from a single configuration where possible, using
	// an array for the `output` option, where we can specify 
	// `file` and `format` for each target)
	{
		input: 'src/index.js',
		external: ['bezier-easing', 'chroma-js'],
		output: [
			{ file: pkg.main, format: 'cjs' },
			{ file: pkg.module, format: 'es' }
		],
		plugins: [
			babel({
				exclude: ['node_modules/**']
			}),
			stripBanner({
				exclude: 'node_modules/**/*',
			}),
			prettier({
				tabWidth: 2,
				singleQuote: false,
				parser: 'babel',
			}),
			replace({
				ENVIRONMENT: JSON.stringify('production')
			}),
		]
	}
];