import request from './request';

// 请求函数
export async function postExtract(text: string) {
	return request.post('/extract', {
		text,
	});
}
