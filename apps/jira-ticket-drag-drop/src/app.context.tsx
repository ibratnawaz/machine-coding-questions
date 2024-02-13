import { createContext, useState } from 'react';

export type CardDetails = { title: string; id: number; status: string };

export type InitialState = {
	tickets: CardDetails[];
	setTickets: React.Dispatch<React.SetStateAction<CardDetails[]>>;
};

export enum TICKET_STATES {
	TO_DO = 'TO DO',
	READY_FOR_DEVELOPMENT = 'READY FOR DEVELOPMENT',
	IN_PROGRESS = 'IN PROGRESS',
	QA_IN_PROGRESS = 'QA IN PROGRESS',
	DONE = 'DONE',
}

export const statesList = Object.values(TICKET_STATES);

const dummyTickets: CardDetails[] = [
	{ title: 'Ticket - 1', id: 1, status: TICKET_STATES.IN_PROGRESS },
	{ title: 'Ticket - 2', id: 2, status: TICKET_STATES.DONE },
	{ title: 'Ticket - 3', id: 3, status: TICKET_STATES.TO_DO },
	{ title: 'Ticket - 4', id: 4, status: TICKET_STATES.QA_IN_PROGRESS },
	{ title: 'Ticket - 5', id: 5, status: TICKET_STATES.READY_FOR_DEVELOPMENT },
	{ title: 'Ticket - 6', id: 6, status: TICKET_STATES.READY_FOR_DEVELOPMENT },
	{ title: 'Ticket - 7', id: 7, status: TICKET_STATES.TO_DO },
];

export const BoardContext = createContext({} as InitialState);

export const BoardContextProvider = ({ children }: { children: JSX.Element }) => {
	const [tickets, setTickets] = useState([...dummyTickets]);

	return <BoardContext.Provider value={{ tickets, setTickets }}>{children}</BoardContext.Provider>;
};
