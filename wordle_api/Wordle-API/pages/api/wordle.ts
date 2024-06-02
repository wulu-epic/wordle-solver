import type { VercelRequest, VercelResponse } from "@vercel/node";
import { getRandomWord, getWordOfTheDay, isCharInWord, get_current_word} from "../../word-util/util";

type CharacterInfo = {
	char: string;
	scoring: {
		in_word: boolean;
		correct_idx: boolean;
	};
};

type IncorrectResponse = {
	guess: string;
	was_correct: boolean;
	character_info: CharacterInfo[];
};

export default function handler(req: VercelRequest, res: VercelResponse) {
	if (req.method === "POST") { // scores the guess
		let { guess }: { guess: string } = req.body;
		guess = guess.toLowerCase();
		const wotd = getRandomWord(false); 

		if (wotd === guess) {
			res.status(200).json({ guess: guess, was_correct: true });
			return;
		} else {
			if (guess.length === 5) { 
				let arr: CharacterInfo[] = [];

				for (let i = 0; i < guess.length; i++) {
					arr.push({
						char: guess[i],
						scoring: {
							in_word: isCharInWord(guess[i], wotd),
							correct_idx: guess[i] === wotd[i],
						},
					});
				}
				const resp: IncorrectResponse = {
					guess: guess,
					was_correct: false,
					character_info: arr,
				};
				res.status(200).json(resp);
				return;
			} else {
				res
					.status(400)
					.json({ error: `Only 5 character words currently supported.` });
				return;
			}
		}
	} else if (req.method === "GET") { // get request. [wotd] as data gets current word on the site
		const wotd = getRandomWord(true); 
		res.status(200).json({wotd});

	} else {
		res.status(405).json({ error: `${req.method} unsupported.` });
	}
}
