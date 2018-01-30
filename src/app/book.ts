enum era {
	'prehistoric',
	'ancient',
	'medieval',
	'renaissance',
	'modern',
	'contemporary',
	'future'
}

enum medium {
	'hardcopy',
	'kindle',
	'audiobook'
}

enum category {
	'fiction',
	'nonfiction',
	'kids fiction',
	'kids nonfiction',
	'baby'
}

enum status {
	'shelved',
	'donated',
	'borrowed',
	'lent',
	'sold',
	'recommended'
}

enum position {
	'currently reading',
	'read',
	'to read',
	'wishlist',
	'abandoned',
	'reference'
}

export class Book {
	public id: number;
	public title: string;
	public subtitle?: string;
	public medium?: medium;
	public category?: category;
	public era?: era;
	public status?: status;
	public position?: position;
}

// working on line 20 above: trying to (a) set medium as optional and (b) set it as enum from medium list above
