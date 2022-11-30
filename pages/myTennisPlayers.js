import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
let url = "http://localhost:3000/api/GetTennisPlayers";

export default function Home() {
  let [nameFact, setNameFact] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => setNameFact(result));
  }, []);
  return (
    <div>
      <h3> My Tennis Player</h3>
      {nameFact !== null && nameFact !== undefined ? (
        <ul>
          {nameFact.map((tennis) => {
            return (
              <li className={styles.card} key={tennis.data._id}>
                <span className={styles.card}>{tennis.name}</span>
                <br />
                <span Style="Color: white">Plays: {tennis.plays}</span>
                <br />
                <span></span>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}
