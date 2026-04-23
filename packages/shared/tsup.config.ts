import { defineConfig } from 'tsup';

export default defineConfig({
	entry: ['src/index.ts'], // 入口文件
	format: ['cjs', 'esm'], // 核心：同时生成 CommonJS 和 ESM
	dts: true, // 生成 .d.ts 类型文件
	clean: true, // 打包前清空 dist 目录
	outDir: 'dist', // 输出目录
	// 让 ESM 文件后缀变成 .mjs，CJS 保持 .js (可选，配合你的 package.json)
	outExtension({ format }) {
		return {
			js: format === 'esm' ? '.mjs' : '.js',
		};
	},
});
