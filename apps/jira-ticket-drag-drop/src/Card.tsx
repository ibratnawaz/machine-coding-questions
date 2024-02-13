import { CardDetails, TICKET_STATES } from "./app.context";

type CardProps = {
	card: CardDetails
};

export function Card({ card }: CardProps) {
	const dragStart = (e: React.DragEvent<HTMLDivElement>, id: number) => {
		e.dataTransfer.setData('id', id.toString());
	};

  const setBgColor = () => {
    switch(card.status) {
      case TICKET_STATES.TO_DO: return 'card';
      case TICKET_STATES.DONE: return 'card bg-success';
      case TICKET_STATES.READY_FOR_DEVELOPMENT: return 'card bg-ready';
      case TICKET_STATES.IN_PROGRESS: return 'card bg-in-progress';
      case TICKET_STATES.QA_IN_PROGRESS: return 'card bg-in-qa ';
    }
    return 'card'
  }

	return (
		<div className={setBgColor()} draggable id={`card-item-${card.id}`} onDragStart={(e) => dragStart(e, card.id)}>
			<h3 className='card-title'>{card.title}</h3>
		</div>
	);
}
