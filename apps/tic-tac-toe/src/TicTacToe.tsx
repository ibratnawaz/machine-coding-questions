import { useEffect, useState } from 'react';

const winingCondition = [
	// row-wise
	{
		condition: [0, 1, 2],
		strikeClassName: 'strike-row-1',
	},
	{
		condition: [3, 4, 5],
		strikeClassName: 'strike-row-2',
	},
	{
		condition: [6, 7, 8],
		strikeClassName: 'strike-row-3',
	},
	// column-wise
	{
		condition: [0, 3, 6],
		strikeClassName: 'strike-column-1',
	},
	{
		condition: [1, 4, 7],
		strikeClassName: 'strike-column-2',
	},
	{
		condition: [2, 5, 8],
		strikeClassName: 'strike-column-3',
	},
	// diagonal-wise
	{
		condition: [0, 4, 8],
		strikeClassName: 'strike-diagonal-1',
	},
	{
		condition: [2, 4, 6],
		strikeClassName: 'strike-diagonal-2',
	},
];

function TicTacToe() {
	const [tiles, setTiles] = useState<string[]>(new Array(9).fill(''));
	const [player, setPlayer] = useState('X');
	const [gameOver, setGameOver] = useState(false);
	const [strike, setStrike] = useState('');
	const [winner, setWinner] = useState('');

	const handleClick = (index: number) => {
		if (tiles[index] != '' || gameOver) return;

		setTiles((prev) => {
			const newTiles = [...prev];
			newTiles[index] = player == 'X' ? 'X' : 'O';
			return newTiles;
		});

		setPlayer((prev) => (prev == 'X' ? 'O' : 'X'));
	};

	useEffect(() => {
		checkWinner();
	}, [tiles]);

	const checkWinner = () => {
		for (const { condition, strikeClassName } of winingCondition) {
			const [g1, g2, g3] = condition;
			const isInvalid = tiles[g1] == '' || tiles[g2] == '' || tiles[g3] == '';
			if (!isInvalid && tiles[g1] === tiles[g2] && tiles[g2] === tiles[g3]) {
				setGameOver(true);
				setStrike(strikeClassName);
				if (player == 'X') setWinner('O-wins');
				if (player == 'O') setWinner('X-wins');
				return;
			}
		}

		const allFilled = tiles.every((tile) => tile != '');
		if (allFilled) {
			setGameOver(true);
			setWinner('Draw');
		}
	};

	const resetGame = () => {
		setTiles(new Array(9).fill(''));
		setGameOver(false);
		setPlayer('X');
		setStrike('');
	};

	return (
		<div className='container'>
			<h1>Tic Tac Toe Game</h1>
			<div className={`board ${gameOver ? 'game-end' : ''}`}>
				<Tile
					handleClick={() => handleClick(0)}
					value={tiles[0]}
					playerTurn={player}
					className='right-border bottom-border'
				/>
				<Tile
					handleClick={() => handleClick(1)}
					playerTurn={player}
					value={tiles[1]}
					className='right-border bottom-border'
				/>

				<Tile
					playerTurn={player}
					handleClick={() => handleClick(2)}
					value={tiles[2]}
					className=' bottom-border'
				/>
				<Tile
					playerTurn={player}
					handleClick={() => handleClick(3)}
					value={tiles[3]}
					className='right-border bottom-border'
				/>
				<Tile
					playerTurn={player}
					handleClick={() => handleClick(4)}
					value={tiles[4]}
					className='right-border bottom-border'
				/>
				<Tile
					playerTurn={player}
					handleClick={() => handleClick(5)}
					value={tiles[5]}
					className='bottom-border'
				/>
				<Tile
					playerTurn={player}
					handleClick={() => handleClick(6)}
					value={tiles[6]}
					className='right-border'
				/>
				<Tile
					playerTurn={player}
					handleClick={() => handleClick(7)}
					value={tiles[7]}
					className='right-border'
				/>
				<Tile
					playerTurn={player}
					handleClick={() => handleClick(8)}
					value={tiles[8]}
					className=''
				/>
				<div className={`strike ${strike}`}></div>
			</div>
			{gameOver && <h3 className='game-over'>Game Over: {winner}</h3>}
			<button className={`reset-button ${gameOver ? '' : 'mt-32'}`} onClick={resetGame}>
				Reset
			</button>
		</div>
	);
}

type TileProps = {
	className: string;
	value: string;
	playerTurn: string;
	handleClick: () => void;
};

function Tile({ className, value, playerTurn, handleClick }: TileProps) {
	let hoverEffectClass = '';
	if (playerTurn == 'X' && value == '') {
		hoverEffectClass = 'x-hover';
	} else if (playerTurn == 'O' && value == '') {
		hoverEffectClass = 'o-hover';
	}

	return (
		<div className={`tile ${className} ${hoverEffectClass}`} onClick={handleClick}>
			{value}
		</div>
	);
}

export default TicTacToe;
