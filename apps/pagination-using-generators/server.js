import express, { json } from 'express';
import cors from 'cors';
const app = express();

const list = new Array(500).fill(1).map((_, i) => `Product ${i + 1}`);

app.use(
	cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5500", "http://localhost:5174"],
  })
);

app.use(json());

const itemsPerPage = 15

app.get('/api/list', (req, res) => {
	const { nextPage } = req.query;
	let start = 0;
  let nextPageValue = 2;

	if (nextPage && parseInt(nextPage) > 0) {
		start = (nextPage - 1) * itemsPerPage;
    nextPageValue = parseInt(nextPage) + 1;
	}

	const end = start + itemsPerPage;

	let hasNext = true;
	if (end >= list.length) {
		hasNext = false;
		nextPageValue = null;
	}

  console.log('nextPage', nextPage, 'start', start, 'end', end)

	res.json({
		status: 200,
		message: 'success',
		items: list.slice(start, end),
		totalItems: 500,
		hasNextPage: hasNext,
		nextPage: nextPageValue,
    itemsPerPage
	});
});

app.listen(8080, () => {
	console.log(`Server running in on port 8080`);
});
