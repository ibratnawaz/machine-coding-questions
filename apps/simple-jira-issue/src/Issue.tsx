import { useState } from 'react';
import { TResponse, dummyData, sleep, subtasks } from './Issues';

const statuses = ['Todo', 'In progress', 'Done'];

const getSubtasks = async () => {
	await sleep(500);

	return subtasks.map((id) => ({
		id,
		title: `Subtask ${id}`,
		description: `Description for subtask ${id}`,
		assignee: `User ${id}`,
		status: statuses[id % 3],
	}));
};

const updateStatus = async (id: number, status: string) => {
	await sleep(1000);
	if (dummyData.id === id) {
		dummyData.status = status;
	}
	return true;
};

type TSubTask = Omit<TResponse, 'subtasks'>;

type IssuePropsType = {
	issue: TResponse;
};

const Issue = ({ issue }: IssuePropsType) => {
	const [show, setShow] = useState(false);
	const [option, setOption] = useState(issue.status);
	const [subTasks, setSubTasks] = useState<TSubTask[]>([]);

	const fetchSubtasks = async () => {
		const resp = await getSubtasks();
		setSubTasks(resp);
		setShow((prev) => !prev);
	};

	const changeHandler = async (e: React.ChangeEvent<HTMLSelectElement>) => {
		const resp = await updateStatus(issue.id, e.target.value);
		if (resp) alert('Updated!');
		setOption(e.target.value);
	};

	return (
		<section className='card'>
			<header className='card-header'>
				<h3 className='card-title'>{issue.title}</h3>

				<select className='issue-options' defaultValue={option} onChange={changeHandler}>
					{statuses.map((status) => (
						<option value={status} key={status}>
							{status}
						</option>
					))}
				</select>
			</header>
			<main>
				<h3 className='subtasks-heading' onClick={fetchSubtasks}>
					➡️ Show subtasks
				</h3>
				{show ? (
					<div className='subtasks'>
						<ul>
							{subTasks.map((item) => (
								<li key={item.id}>{item.title}</li>
							))}
						</ul>
					</div>
				) : null}
			</main>
		</section>
	);
};

export default Issue;
