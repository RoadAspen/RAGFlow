import { postExtract } from '@/api/extract';
import { useState } from 'react';

export default function App() {
	const [text, setText] = useState('');
	const [result, setResult] = useState<any>(null);
	const [loading, setLoading] = useState(false);

	const handleExtract = async () => {
		if (!text.trim()) return;

		setLoading(true);

		try {
			const res = await postExtract(text);
			console.log('res', res);

			setResult(res);
		} catch (err) {
			console.error('请求失败', err);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div style={{ padding: 40, maxWidth: 600, margin: '0 auto' }}>
			<h2>AI 信息抽取 Demo</h2>

			{/* 输入框 */}
			<textarea
				value={text}
				onChange={(e) => setText(e.target.value)}
				placeholder="请输入一句话，例如：张三在北京工作"
				style={{
					width: '100%',
					height: 100,
					marginBottom: 16,
				}}
			/>

			{/* 按钮 */}
			<button onClick={handleExtract} disabled={loading}>
				{loading ? '处理中...' : '提取'}
			</button>

			{/* 结果 */}
			<div style={{ marginTop: 20 }}>
				<h3>结果：</h3>
				<pre
					style={{
						background: '#f5f5f5',
						padding: 16,
					}}
				>
					{JSON.stringify(result, null, 2)}
				</pre>
			</div>
		</div>
	);
}
