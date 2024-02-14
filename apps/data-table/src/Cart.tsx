import { DataTable } from './DataTable';

const data = [
	{
		id: 1,
		title: 'iPhone 9',
		description: 'An apple mobile which is nothing like apple',
	},
	{
		id: 2,
		title: 'iPhone X',
		description:
			'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
	},
	{
		id: 3,
		title: 'Samsung Universe 9',
		description: "Samsung's new variant which goes beyond Galaxy to the Universe",
	},
	{
		id: 4,
		title: 'OPPOF19',
		description: 'OPPO F19 is officially announced on April 2021.',
	},
	{
		id: 5,
		title: 'Huawei P30',
		description:
			'Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.',
	},
	{
		id: 6,
		title: 'MacBook Pro',
		description: 'MacBook Pro 2021 with mini-LED display may launch between September, November',
	},
	{
		id: 7,
		title: 'Samsung Galaxy Book',
		description:
			'Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched',
	},
	{
		id: 8,
		title: 'Microsoft Surface Laptop 4',
		description:
			'Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.',
	},
	{
		id: 9,
		title: 'Infinix INBOOK',
		description: 'Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty',
	},
	{
		id: 10,
		title: 'HP Pavilion 15-DK1056WM',
		description:
			'HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10',
	},
	{
		id: 11,
		title: 'perfume Oil',
		description:
			'Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil',
	},
	{
		id: 12,
		title: 'Brown Perfume',
		description: 'Royal_Mirage Sport Brown Perfume for Men & Women - 120ml',
	},
	{
		id: 13,
		title: 'Fog Scent Xpressio Perfume',
		description:
			'Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men',
	},
	{
		id: 14,
		title: 'Non-Alcoholic Concentrated Perfume Oil',
		description:
			'Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil',
	},
	{
		id: 15,
		title: 'Eau De Perfume Spray',
		description: 'Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality',
	},
];

const Cart = () => {
	return <DataTable data={data} />;
};

export default Cart;
