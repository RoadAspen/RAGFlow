import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			// 告诉 Vite: 当你看到 @/ 时，把它转换成 src 目录的绝对路径
			'@': path.resolve(__dirname, './src'),
		},
	},
	server: {
		port: 5173, // 你的前端端口
		proxy: {
			// 匹配所有以 /api 开头的请求
			'/api': {
				target: 'http://localhost:3000', // 后端服务的地址
				changeOrigin: true, // 必须设置为 true，用于更改请求头中的 host
				rewrite: (path) => path.replace(/^\/api/, ''), // 如果后端接口没有 /api 前缀，需要这一行移除它
			},
		},
	},
});
