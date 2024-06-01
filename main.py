from helpers import Serialization
from helpers import WordleHelper
from helpers import WordleAPICommunicator

import time

def main():
    serializer : Serialization = Serialization()
    word_list = serializer.get_all_words()

    wordle_helper =  WordleHelper(word_list)
    api_communicator = WordleAPICommunicator(word_list)

    print('[-] Waiting for the Wordle server to load...')
    while not api_communicator.is_server_running():
        time.sleep(0.25)

    print("[+] Loaded!")
    current_word = api_communicator.get_current_word()

    #print("[+] The current word is", current_word)
    wordle_helper.main_input_loop()
    

if __name__ == "__main__":
    main()