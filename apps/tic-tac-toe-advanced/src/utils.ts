export const PLAYER_X = 'X';
export const PLAYER_O = 'O';

export const getRowCol = (index: number, size: number) => {
	const row = Math.floor(index / size);
	const col = Math.floor(index % size);
	return { row, col };
};

export const getIndex = (row: number, col: number, size: number) => {
	return row * size + col;
};

export const checkWinner = (index: number, size: number, player: string, tiles: string[]) => {
	const { row, col } = getRowCol(index, size);
	const val = player === PLAYER_X ? PLAYER_O : PLAYER_X;

	// row-wise
	let isSame = true;
	for (let i = 0; i < size; i++) {
		const idx = getIndex(row, i, size);
		if (tiles[idx] != val) {
			isSame = false;
			break;
		}
	}
	if (isSame) return true;

	// column-wise
	isSame = true;
	for (let i = 0; i < size; i++) {
		const idx = getIndex(i, col, size);
		if (tiles[idx] != val) {
			isSame = false;
			break;
		}
	}
	if (isSame) return true;

	// diagonal-wise: left
	if (row === col) {
		isSame = true;
		for (let i = 0; i < size; i++) {
			const idx = getIndex(i, i, size);
			if (tiles[idx] != val) {
				isSame = false;
				break;
			}
		}
		if (isSame) return true;
	}

	// diagonal-wise: right
	isSame = true;
	for (let i = 0, j = size - 1; i < size - 1; i++, j--) {
		const idx = getIndex(i, j, size);
		if (tiles[idx] != val) {
			isSame = false;
			break;
		}
	}
	if (isSame) return true;

	return false;
};
