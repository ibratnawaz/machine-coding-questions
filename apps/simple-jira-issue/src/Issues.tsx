// Arrow characters to use: ▼ ▶

import { useEffect, useState } from 'react';
import Issue from './Issue';

export const subtasks = [11, 12, 13, 14, 15, 16, 17, 18];
export const sleep = (timeout: number) => {
	return new Promise((resolve) => setTimeout(resolve, timeout));
};

export const dummyData = {
	id: 1,
	title: 'sit amet erat nulla tempus vivamus',
	description:
		'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
	assignee: 'Nelli Bielfeld',
	status: 'In progress',
	subtasks: subtasks,
};

const d2 = { ...dummyData, id: 2, title: 'Some another issue', status: 'Done' };

export type TResponse = typeof dummyData;

// Available APIs
const getIssue = async (): Promise<TResponse[]> => Promise.resolve([dummyData, d2]);

const Issues = () => {
	const [data, setData] = useState<TResponse[]>([]);

	useEffect(() => {
		getIssue()
			.then((resp) => {
				setData(resp);
			})
			.catch((err) => console.error(err));
	}, []);

	return (
		<div>
			{data.map((item) => (
				<Issue key={item.id} issue={item} />
			))}
		</div>
	);
};

export default Issues;
