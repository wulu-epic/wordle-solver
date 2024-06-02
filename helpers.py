import os, time, string, requests, json, threading

from enum import Enum
from collections import OrderedDict

import colorama
from colorama import Fore, Style

colorama.init()
 
class WordRanking(Enum):
    GRAY = 0
    YELLOW = 1
    GREEN = 2

class WordleHelper(object):
    def __init__(self, words) -> None:
        self.MAX_WORD_LENGTH = 5
        self.MAX_GUESSES = 5

        self.words = words
        self.wordle_api_communicator = WordleAPICommunicator(words)

    def input_validation(self, input_value : str):
        if len(input_value) != self.MAX_WORD_LENGTH:
            return False
        
        if any(char in string.punctuation for char in input_value):
            return False

        if any(char in string.digits for char in input_value):
            return False
        
        input_value = input_value.lower()
        return True
    
    def ask_guess(self):
        guess = input('[+] Enter your guess: ')
        if self.input_validation(guess):
            return guess
        else:
            print("[-] There was an error with your guess, try again")
            self.ask_guess()

    def main_input_loop(self):
        neutral = self.words
        print('[-] These are the best starting guesses')
        top_5 = dict(list(neutral.items())[:5])

        print(top_5)
        for _ in range(self.MAX_GUESSES):
            guess = self.ask_guess()
            info = self.wordle_api_communicator.get_word_information(guess,{}, neutral, 0)

            if info == 1:
                print('[+] Good job! That was the correct guess.')
                return

            neutral = info

            top_5 = dict(list(neutral.items())[:5])
            
            print(top_5, end="")
            print(f" Showing 5/{len(list(neutral.items()))} results")
        
        print("[-] Game over!")
    
class WordleAPICommunicator(object):
    def __init__(self, word_list):
        self.ENDPOINT = "http://localhost:3000/api/wordle"
        self.word_list : dict = word_list

        self.colour_funcs = {
            "gray": self.gray_check,
            "yellow": self.yellow_check,
            "green": self.green_check,
        }

    def generate_new_word(self):
        print("[+] Generating new word!")
        requests.get(self.ENDPOINT)

    def is_server_running(self) -> bool:
        request = requests.get('http://localhost:3000')
        return request.status_code == 200

    def get_current_word(self):
        response = requests.get(self.ENDPOINT)
        if response.status_code != 200:
            return
        
        data = response.json()
        return data["wotd"];

    def letter_to_rank(self, char_info : dict):
        if char_info['scoring']['correct_idx']:
            return WordRanking.GREEN
        
        if char_info['scoring']["in_word"]:
            return WordRanking.YELLOW
        
        return WordRanking.GRAY
    
    def print_words_with_color(self, guess, character_info, recursion_depth):
        for index, char in enumerate(guess):
            letter_rank = self.letter_to_rank(character_info[index])
            if letter_rank == WordRanking.GRAY:
                color = Fore.LIGHTBLACK_EX
            elif letter_rank == WordRanking.YELLOW:
                color = Fore.YELLOW
            elif letter_rank == WordRanking.GREEN:
                color = Fore.GREEN
            print(f'{color}{char}{Style.RESET_ALL}', end="")
        print()

    def get_gray_or_yellow_letters(self, known_information, word_rank : WordRanking):
        letters = []
        for char in known_information.keys():
            if known_information[char] == word_rank:
                letters.append(char)

        return letters

    def get_green_letters(self, known_information):
        letters = {}
        for char in known_information.keys():
            if len(char) == 2:
                letters[char[0]] = char[1]
        return letters
    
    def gray_check(self, letters, valid_letters=[]):
        for word_item in list(letters.items()):
            word, frequency = word_item[0], word_item[1]
            if any(letter in word for letter in valid_letters):
                del letters[word]
        
        return letters

    def yellow_check(self, letters, valid_letters=[]):
        for word_item in list(letters.items()):
            word, frequency = word_item[0], word_item[1]
            if any(letter not in word for letter in valid_letters):
                del letters[word]
        
        return letters

    def green_check(self, letters=[], valid_letters={}):
        for word_item in list(letters.items()):
            word, frequency = word_item[0], word_item[1]
            try:
                if any(word[int(index)] != letter for letter, index in valid_letters.items()):
                    del letters[word]
            except IndexError:
                pass
        
        return letters
        
    def colour_check(self, letter_wordrank, colour: str, letters={}):
        if colour in self.colour_funcs:
            return self.colour_funcs[colour](letters=letters, valid_letters=letter_wordrank[colour])
        else:
            raise ValueError(f"Invalid colour: {colour}")

    def get_word_information(self, guess : str, known_information={}, neutral={}, recursion_depth = 0):
        response = requests.post(self.ENDPOINT, json={"guess": guess})
        response = json.loads(response.text)

        if response["was_correct"]:
            return 1
            
        character_info = response["character_info"]

        for index, char in enumerate(guess):
            letter_rank = self.letter_to_rank(character_info[index])
            if letter_rank == WordRanking.GREEN:
                known_information[char+str(index)] = letter_rank
            else:
                known_information[char] = letter_rank

        letter_wordrank = {
            "gray": self.get_gray_or_yellow_letters(known_information, WordRanking.GRAY), 
            "yellow": self.get_gray_or_yellow_letters(known_information, WordRanking.YELLOW),
            "green" : self.get_green_letters(known_information)
        }

        gray_words = self.colour_check(letter_wordrank, "gray", neutral)
        yellow_words = self.colour_check(letter_wordrank, "yellow", gray_words)
        green_words = self.colour_check(letter_wordrank, "green", yellow_words)

        green_words_sorted = OrderedDict(sorted(green_words.items(), key=lambda x: x[1], reverse=True))
        
        if guess in green_words_sorted:
            del green_words_sorted[guess]
            

        self.print_words_with_color(guess, character_info, recursion_depth)
        return green_words_sorted

class Serialization(object): 
    def __init__(self) -> None:
        self.words = {}
        self.seralized = False

        self.wordle_helper = WordleHelper(self.words)

    def serialize_wordlist(self, path="./wordle_documents/word_freq_160k.txt"):
        if not os.path.exists(path):
            return ValueError("File does not exist")

        current_time = time.time()

        with open('./wordle_documents/wordle-words.txt', 'r') as f:
            wordle_list = set(line.strip() for line in f)

        self.words = {}

        with open(path, 'r', encoding="utf8") as file:
            for line in file:
                parts = line.strip().split()
                if len(parts) != 2:
                    continue  
                word, frequency = parts
                frequency = int(frequency)
                if word in wordle_list and self.wordle_helper.input_validation(word):
                    self.words[word] = frequency

        print(f"[+] Time took to serialize all words: {time.time() - current_time:.2f}ms. {len(self.words)} words serialized.")
        self.serialized = True

    def is_serialized(self) -> bool:
        return self.seralized

    def get_all_words(self):
        if not self.is_serialized():
            self.serialize_wordlist(path="./wordle_documents/word_freq_160k.txt")

        return self.words