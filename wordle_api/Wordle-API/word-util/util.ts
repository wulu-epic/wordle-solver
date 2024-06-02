import seedrandom from "seedrandom";
import { five_char_words } from "./word_list";

let cached_date: Date = new Date();
let cached_idx = -1;
let current_random_word : string = '';

/**
 * Determines the number of days a specific `Date` has been since 01/01/2000.
 * @param date The `Date` in question
 * @returns The number of days `date` has been since 01/01/2000.
 */
const getDayDiff = (date: Date): number => {
	return Math.floor(
		(date.valueOf() - new Date(2000, 0, 0).valueOf()) / (1000 * 60 * 60 * 24)
	);
};

/**
 * Determines whether a specific Date is the same as our currently cached date.
 * For our purpose, a Date is the same if the day, month, and full year match.
 * @param date The Date in question.
 * @returns Whether or not a Date's day, month, and full year match the cached date.
 */
const isSameDate = (date: Date): boolean => {
	return (
		date.getDay() === cached_date.getDay() &&
		date.getMonth() === cached_date.getMonth() &&
		date.getFullYear() === cached_date.getFullYear()
	);
};

/**
 * Checks to see if a character is present within a word.
 *
 * @param guess The character in question
 * @param ans The word we are looking to find the character in
 * @returns Whether or not guess is present in ans.
 */
const isCharInWord = (guess: string, ans: string): boolean => {
	for (let i = 0; i < ans.length; i++) {
		if (guess === ans[i]) {
			return true;
		}
	}
	return false;
};

let get_current_word = () : string => {
	return `${current_random_word}`;
}

let getRandomWord = (getNew : boolean) : string => {
	if(!getNew)
	{
		return current_random_word
	}

	if(current_random_word.length === 0 || getNew)
	{
		const rng = seedrandom(); 
		const idx: number = Math.floor(rng() * five_char_words.length); 

		current_random_word = five_char_words[idx];
		console.log(`answer is ${current_random_word}`);

		return current_random_word;
	} 
	return "N";
};

const getWordOfTheDay = (): string => {
	const date = new Date();

	if (isSameDate(date) && cached_idx !== -1) {
		return five_char_words[cached_idx];
	}

	cached_date = date;
	const rng = seedrandom(getDayDiff(date).toString());
	
	let idx: number = Math.floor(rng() * five_char_words.length);
	cached_idx = idx; 

	return five_char_words[idx];
};

export { getRandomWord, getWordOfTheDay, getDayDiff as getDayOfYear, isCharInWord, get_current_word};
