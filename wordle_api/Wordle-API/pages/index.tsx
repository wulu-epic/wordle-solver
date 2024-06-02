import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { getWordOfTheDay, getRandomWord, get_current_word, current_random_word } from "../word-util/util";
import { useState, useEffect } from "react";

const Home: NextPage = () => {
	const [wordOfTheDay, setWordOfTheDay] = useState<string>("");
  
	useEffect(() => {
	  const fetchWordOfTheDay = async () => {
		try {
		  const response = await fetch("/api/wordle");
		  if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		  }
		  const data = await response.json();
		  setWordOfTheDay(data.wotd);
		} catch (error) {
		  console.error("Error fetching word of the day:", error);
		}
	  };
  
	  fetchWordOfTheDay();
	}, []);
  
	return (
	  <div className={styles.container}>
		<h1>
		  Today's Word of the Day:{" "}
		  <span className={styles.wotd}>{wordOfTheDay.toUpperCase()}</span>
		</h1>
	  </div>
	);
  };
  
  export default Home;