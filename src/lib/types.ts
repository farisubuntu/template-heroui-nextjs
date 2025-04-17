 
export interface MenuItem {
	id: number;
	title: string;
	newTab: boolean;
	path?: string;
	submenu?: MenuItem[];
}

export type Menu = MenuItem;

export interface Question {
	question: string;
	options: string[];
	correctAnswer: string;
}

export interface User {
	id: string;
	name: string;
	email: string;
	image?: string;
	score: number;
	quizzesTaken: number;
}

export interface QuizResult {
	id: string;
	userId: string;
	category: string;
	difficulty: string;
	score: number;
	totalQuizzes: number;
	timeSpent: number;
	date: Date;
}
export interface QuizData {
	id: number;
	lesson: number;
	type: string;
	modifiers: number;
	wordID: number;
	alternates: number[];
	sols?: {
		key: string;
		audio_updated_at: number;
		text: string;
		phonetic?: string;
		dictionary?: Array<{
			raw: string;
			translations: Array<{
				type: string;
				text: string;
				phonetic: string | null;
			}>;
		}>;
	}[];
	alts?: {
		key: string;
		audio_updated_at: number;
		text: string;
		phonetic?: string;
		image?: string;
		image_updated_at?: number;
	}[];
	tokens?: {
		key: string;
		text: string;
		raw: {
			text: string;
			location: number;
			length: number;
		};
		prefix: {
			text: string;
			location: number;
			length: number;
		};
		suffix: {
			text: string;
			location: number;
			length: number;
		};
		linker: {
			text: string;
			location: number;
			length: number;
		};
	}[];
}
