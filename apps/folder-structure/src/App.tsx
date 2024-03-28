import { useState } from 'react';
import './App.css';

type TFile = {
	label: string;
	type: 'folder' | 'file';
	children?: TFile[];
};

const data: TFile = {
	label: 'root',
	type: 'folder',
	children: [
		{
			type: 'file',
			label: 'package.json',
		},
		{
			label: 'src',
			type: 'folder',
			children: [
				{
					label: 'components',
					type: 'folder',
					children: [
						{
							label: 'Avatar',
							type: 'folder',
							children: [
								{
									type: 'file',
									label: 'avatar.js',
								},
								{
									type: 'file',
									label: 'index.js',
								},
							],
						},
					],
				},
				{
					label: 'index.js',
					type: 'file',
				},
				{
					label: 'Tooltip',
					type: 'folder',
					children: [
						{
							label: 'index.js',
							type: 'file',
						},
						{
							label: 'tooltip.js',
							type: 'file',
						},
					],
				},
				{
					label: 'Mui',
					type: 'folder',
					children: [
						{
							label: 'index.js',
							type: 'file',
						},
						{
							label: 'types.ts',
							type: 'file',
						},
					],
				},
			],
		},
		{
			label: 'dist',
			type: 'folder',
			children: [
				{
					label: 'main.js',
					type: 'file',
				},
			],
		},
	],
};

function App() {
	return <Folder data={data} />;
}

function Folder({ data }: { data: TFile }) {
	const [expand, setExpand] = useState(false);

	data.children?.sort((a, b) => b.type.localeCompare(a.type));

	if (data.type === 'file') return <div style={{ marginTop: 5 }}>📄 {data.label}</div>;

	return (
		<div style={{ marginTop: 5, borderLeft: '1px solid #ccc' }}>
			<div onClick={() => setExpand(!expand)} className='folder'>
				<span>📁 {data.label}</span>
			</div>
			{expand && (
				<div style={{ paddingLeft: 25 }}>
					{data?.children?.map((d, index) => {
						return <Folder key={index} data={d}></Folder>;
					})}
				</div>
			)}
		</div>
	);
}

export default App;
