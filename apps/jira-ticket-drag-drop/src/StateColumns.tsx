import { useContext } from 'react';
import { BoardContext } from './app.context';
import { Card } from './Card';

type StateContainerProps = {
	state: string;
};

export function StateColumns({ state }: StateContainerProps) {
	const { tickets, setTickets } = useContext(BoardContext);

	const onDragOver = (e: React.DragEvent<HTMLElement>) => {
		e.preventDefault();
	};

	const onDrop = (e: React.DragEvent<HTMLElement>, state: string) => {
		const id = +e.dataTransfer.getData('id');
		const updateTicket = tickets.map((ticket) => {
			if (ticket.id === id) {
				ticket.status = state;
			}

			return ticket;
		});

		setTickets([...updateTicket]);
	};

	return (
		<section
			id={`section-${state}`}
			onDragOver={(e) => onDragOver(e)}
			onDrop={(e) => onDrop(e, state)}>
			<header className='column-title'>{state}</header>
			{tickets.map((card) =>
				card.status === state ? <Card card={card} key={card.id} /> : null
			)}
		</section>
	);
}
