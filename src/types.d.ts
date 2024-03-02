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
	};
	user: { username: string };
};

type SearchResult = {
	total: number;
	total_pages: number;
	results: Image[];
};