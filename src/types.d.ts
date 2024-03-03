type Image = {
	alt_description: string;
	color: string;
	created_at: Date;
	updated_at: Date;
	description: string;
	height: number;
	id: string;
	likes: number;
	slug: string;
	urls: {
		raw: string;
		full: string;
		regular: string;
		small: string;
		thumb: string;
	};
	user: { username: string };
	statistics: { views: { total: number } };
};

type SearchResult = {
	total: number;
	total_pages: number;
	results: Image[];
};

type ImageStatistics = {
	id: string;
	downloads: { total: 2449 };
	views: { total: 455674 };
	likes: { total: 0 };
};
