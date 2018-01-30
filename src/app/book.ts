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

export class Book {
	public id: number;
	public title: string;
	public subtitle?: string;
	public medium?: medium;
}

// working on line 20 above: trying to (a) set medium as optional and (b) set it as enum from medium list above
