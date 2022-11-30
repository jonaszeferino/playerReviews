import styles from "../styles/Home.module.css";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  let [name, setName] = useState();
  let [franchise, setFranchise] = useState();
  let [position, setPosition] = useState();
  let [foot, setFoot] = useState();
  let [age, setAge] = useState(0);
  let [speeding, setSpeeding] = useState(50);
  let [defending, setDefending] = useState(50);
  let [physical, setPhysical] = useState(50);
  let [hability, setHability] = useState(50);
  let [shooting, setShooting] = useState(50);
  let [rate, setRate] = useState(50);
  let [data, setData] = useState("Digitando");

  const clean = () => {
    setName(""),
      setFranchise(""),
      setSpeeding(50),
      setDefending(50),
      setPhysical(50),
      setHability(50),
      setShooting(50),
      setRate(50);
    setAge(0);
    setPosition("choise"), setFoot("choiseFoot");
    setData("Digitando");
  };

  function submitPlayers(event) {
    event.preventDefault();
    const playersObject = {
      name: name,
      franchise: franchise,
      position: position,
      foot: foot,
      age: age,
      speeding: speeding,
      defending: defending,
      physical: physical,
      hability: hability,
      shooting: shooting,
      rate: rate,
    };
    const url = "http://localhost:3000/api/SaveSoccerPlayers";
    fetch(url, {
      method: "POST",
      body: JSON.stringify(playersObject),
    })
      .then((response) => response.json())
      .then((result) => setData(result.status));
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
              required="true"
              type="text"
              className={styles.input}
              value={name}
              onChange={(event) => setName(event.target.value)}
            ></input>
          </label>

          <label className={styles.label} type="text">
            Posição:
            <select
              name="select"
              type="text"
              className={styles.input}
              value={position}
              onChange={(event) => setPosition(event.target.value)}
            >
              <option value="choiseFoot">Escolha a Posição</option>
              <option value="goalkeeper">Goleiro</option>
              <option value="attacking">Atacante</option>
              <option value="midfielder">Meio Campo</option>
              <option value="back">Defensor</option>
              <option value="winger">Lateral/Ala</option>
            </select>
          </label>

          <label className={styles.label} type="text">
            <br /> Pé:
            <br />
            <select
              name="select"
              type="text"
              className={styles.input}
              value={foot}
              onChange={(event) => setFoot(event.target.value)}
            >
              <option value="choise">Escolha o Pé</option>
              <option value="right">Destro</option>
              <option value="left">Canhoto</option>
              <option value="ambidextrous">Ambidestro</option>
            </select>
          </label>
          <br />
          <label className={styles.label} type="text">
            Time:
            <br />
            <input
              type="text"
              className={styles.input}
              value={franchise}
              onChange={(event) => setFranchise(event.target.value)}
            ></input>
          </label>
          <br />
          <label className={styles.label} type="text">
            Idade:
            <br />
            <input
              defaultValue={50}
              placeholder="teste"
              type="range"
              min="0"
              max="100"
              className={styles.input}
              style={{
                background:
                  "linear-gradient(to right, blue 50%, yellow 50%, yellow 100%)",
              }}
              value={age}
              onChange={(event) => setAge(event.target.value)}
            ></input>
            <div defaultValue={50}>{age}</div>
          </label>
          <br />

          <label className={styles.label} type="number">
            Velocidade:
            <br />
            <input
              type="range"
              min="0"
              max="100"
              className={styles.input}
              value={speeding}
              onChange={(event) => setSpeeding(event.target.value)}
            ></input>
            <div defaultValue={50}>{speeding}</div>
          </label>
          <br />
          <label className={styles.label} type="text">
            Defesa:
            <br />
            <input
              type="range"
              min="0"
              max="100"
              className={styles.input}
              value={defending}
              onChange={(event) => setDefending(event.target.value)}
            ></input>
            <div defaultValue={50}>{defending}</div>
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
            Chute:
            <br />
            <input
              type="range"
              min="0"
              max="100"
              className={styles.input}
              value={shooting}
              onChange={(event) => setShooting(event.target.value)}
            ></input>
            <div defaultValue={50}>{shooting}</div>
          </label>
          <br />

          <label className={styles.label}>
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

          <label className={styles.label}>{`${data}`}</label>
          <br />
          <br />

          <br />
        </form>

        <button
          className={styles.bt}
          type="submit"
          onClick={(event) => submitPlayers(event)}
        >
          Salvar Aqui
        </button>

        <button
          className={styles.bt}
          type="submit"
          onClick={(event) => clean(event)}
        >
          Novo Jogador
        </button>
      </div>
    </>
  );
}
