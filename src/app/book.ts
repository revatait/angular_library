export class Book {
	 id: number;
	 title: string;
	 subtitle?: string;
	 medium?: medium;
	 category?: category;
	 era?: era;
	 status?: status;
	 position?: position;
	 geo?: Geo[];
}

export class Geo {
	continent = '';
	country = '';
	region = '';
	state = '';
	city = '';
}

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

export const continents = ['Asia', 'Africa', 'Australia', 'Europe', 'North America', 'South America'];

// working on line 20 above: trying to (a) set medium as optional and (b) set it as enum from medium list above
// https://stackoverflow.com/questions/35923744/pass-enums-in-angular2-view-templates
