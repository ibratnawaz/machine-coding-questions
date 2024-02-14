import { useEffect, useState } from 'react';

type DataTableProps = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	data: any[];
};

export const DataTable = ({ data }: DataTableProps) => {
	const [paginationSize] = useState(10);
	const [startIndex, setPaginationStartIndex] = useState(0);
	const [paginationBtnSize, setPaginationBtnSize] = useState(0);

	useEffect(() => {
		setPaginationBtnSize(Math.ceil(data.length / paginationSize));
	}, []);

	if (data.length === 0) return <p>No Data</p>;

	return (
		<>
			<table className='container mt-4 table table-secondary'>
				<thead>
					<tr>
						{Object.keys(data[0])
							.sort()
							.map((header) => (
								<th key={header}>{header}</th>
							))}
					</tr>
				</thead>

				<tbody>
					{data.map((item, index) => {
						if (index < startIndex || index > startIndex + paginationSize - 1) {
							return null;
						}
						return (
							<tr key={`${item.id}_${index}`} id={`${item.id}`}>
								{Object.keys(item)
									.sort()
									.map((key, innerIndex) => {
										return <td key={`${item.id}_${key}_${innerIndex}`}>{item[key]}</td>;
									})}
							</tr>
						);
					})}
				</tbody>
			</table>

			{new Array(paginationBtnSize).fill(1).map((_, index) => (
				<button
					className='btn btn-primary mx-1 mb-5'
					key={`pagination_${index}`}
					onClick={() => setPaginationStartIndex(index * paginationSize)}>
					{index + 1}
				</button>
			))}
		</>
	);
};
