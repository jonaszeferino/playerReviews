import styles from "../styles/Home.module.css";
import Head from "next/head";
import { useState } from "react";

const innitialTennisPlayerState = {
  name: "",
  age: 0,
  hand: "",
  country: "",
  plays: "",
  sacks: 50,
  hability: 50,
  physical: 50,
  rate: 50,
  date: ""
};

const timeElapsed = Date.now();
const today = new Date(timeElapsed);
console.log(today);

export default function Home() {
  let [tennisPlayer, setTennisPlayer] = useState(innitialTennisPlayerState);
  let [age, setAge] = useState(50);
  let [sacks, setSacks] = useState(50);
  let [hability, setHability] = useState(50);
  let [physical, setPhysical] = useState(50);
  let [rate, setRate] = useState(50);
  let [data, setData] = useState("Digitando");
  let [date, setDate] = useState(today);
  
 

  const clean = () => {
    setTennisPlayer(innitialTennisPlayerState);
    // setAge(0),
    // setHand("Escolha a Mão"),
    // setCountry("País Que Representa"),
    // setPlays("Backhand"),
    // setSacks(50),
    // setHability(50),
    // setPhysical(50),
    // setRate(50),
    // setData("Digitando");
  };

  function submitTennisPlayers(event) {
    event.preventDefault();
    const playersObject = {
      name: tennisPlayer.name,
      age: tennisPlayer.age,
      hand: tennisPlayer.hand,
      country: tennisPlayer.country,
      plays: tennisPlayer.plays,
      sacks: tennisPlayer.sacks,
      hability: tennisPlayer.hability,
      physical: tennisPlayer.physical,
      rate: tennisPlayer.rate,
      createdDate: date
    };
    const url = "http://localhost:3000/api/SaveTennisPlayers";
    fetch(url, {
      method: "POST",
      body: JSON.stringify(playersObject),
    })
      .then((response) => response.json())
      .then((result) => setData(result.status));
    // clean();
  }
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="keywords" content="nba,players,produtos"></meta>
        <meta name="description" content="nab, players, franchises"></meta>
        {/* -- essa tag é o título do HTML comum */}
      </Head>

      <div>
        <h1 className={styles.title}>
          Inclua o Jogador, Sua Equipe e Idade, Suas Notas
        </h1>
        <form className={styles.form}>
          <label className={styles.label} type="text">
            Jogador:
            <br />
            <input
              type="text"
              className={styles.input}
              value={tennisPlayer.name}
              onChange={(event) =>
                setTennisPlayer({ ...tennisPlayer, name: event.target.value })
              }
              placeholder="Nome do Jogador"
            ></input>
          </label>

          <label className={styles.label} type="text">
            <br /> Mão:
            <br />
            <select
              name="select"
              type="text"
              className={styles.input}
              value={tennisPlayer.hand}
              onChange={(event) =>
                setTennisPlayer({ ...tennisPlayer, hand: event.target.value })
              }
              placeholder="Escolha a Mão"
            >
              <option value="choiseHand">Escolha a Mão</option>
              <option value="right">Destro</option>
              <option value="left">Canhoto</option>
              <option value="ambidextrous">Ambidestro</option>
            </select>
          </label>
          <br />
          <label className={styles.label} type="text">
            Backhand:
            <br />
            <select
              name="select"
              type="text"
              className={styles.input}
              value={tennisPlayer.plays}
              onChange={(event) =>
                setTennisPlayer({ ...tennisPlayer, plays: event.target.value })
              }
              placeholder="Escolha o Estilo de Jogo"
            >
              <option value="choiseHand">Escolha o Estilo</option>
              <option value="ondeHandBackhandRight">
                One Hand Backhand - Left
              </option>
              <option value="oneHandBackhandLeft">
                One Hand Backhand - Right
              </option>
              <option value="twoHandBackhand">Two Hand Backhand</option>
            </select>
          </label>
          <br />
          <label className={styles.label} type="number">
            Idade:
            <br />
            <input
              type="range"
              min="0"
              max="100"
              className={styles.input}
              value={age}
              onChange={(event) => setAge(event.target.value)
              }
            ></input>
            <div defaultValue={0}>{age}</div>
          </label>
          <br />
          <label className={styles.label} type="number">
            Saque:
            <br />
            <input
              type="range"
              min="0"
              max="100"
              className={styles.input}
              value={sacks}
              onChange={(event) => setSacks(event.target.value)}
            ></input>
            <div defaultValue={50}>{sacks}</div>
          </label>
          <br />
          <label className={styles.label} type="text">
            Habilidade:
            <br />
            <input
              type="range"
              min="0"
              max="100"
              className={styles.input}
              value={hability}
              onChange={(event) => setHability(event.target.value)}
            ></input>
            <div defaultValue={50}>{hability}</div>
          </label>
          <br />
          <label className={styles.label} type="text">
            Físico:
            <br />
            <input
              type="range"
              min="0"
              max="100"
              className={styles.input}
              value={physical}
              onChange={(event) => setPhysical(event.target.value)}
            ></input>
            <div defaultValue={50}>{physical}</div>
          </label>
          <br />

          <label className={styles.label} type="text">
            Nota Geral:
            <br />
            <input
              type="range"
              min="0"
              max="100"
              className={styles.input}
              value={rate}
              onChange={(event) => setRate(event.target.value)}
            ></input>
            <div defaultValue={50}>{rate}</div>
          </label>
          <br />
          <label>
          <input
              
              type="hidden"
              className={styles.input}
              value={date}
              onChange={(event) => setDate(date)}
            ></input>            
          </label>
          <br />

          <label className={styles.label}>{`${data}`}</label>
          <br />
        </form>

        <button
          className={styles.bt}
          type="submit"
          onClick={(event) => submitTennisPlayers(event)}
        >
          Salvar Aqui
        </button>
        {/* 
        <button
          className={styles.bt}
          type="submit"
          onClick={(event) => clean(event)}
        >
          Novo Jogador
        </button> */}
      </div>
    </>
  );
}
