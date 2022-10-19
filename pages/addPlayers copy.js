import styles from "../styles/Home.module.css";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  let [name, setName] = useState();
  let [age, setAge] = useState();
  let [franchise, setfranchise] = useState();
  let [rate, setRate] = useState();
  let [data, setData] = useState();
  let [data2, setData2] = useState();

  function submitPlayers(event) {
    event.preventDefault();
    const playersObject = {
      name: name,
      age: age,
      franchise: franchise,
      rate: rate
    };
    // const responseObjetc = {
    //   data: data
    // }
    const url = "http://localhost:3000/api/SaveSoccerPlayers";

    fetch(url, {
      method: "POST",
      body: JSON.stringify(playersObject),
      // aqui abaixo seria colocado as credenciais
      // ,headers: {
      //   'Content-Type': 'apllication/json'
      // }
    })
      .then((response) => response.json())
      .then(
        (result) => (setData(result.status), setData2(result.data.acknowledged))
      );
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
            <input
              className={styles.input}
              value={name}
              onChange={(event) => setName(event.target.value)}
              id="input1"
            ></input>
          </label>
          <br />
          <label className={styles.label} type="text">
            Franquia:
            <input
              className={styles.input}
              value={franchise}
              onChange={(event) => setfranchise(event.target.value)}
            ></input>
          </label>
          <br />
          <label className={styles.label} type="text">
            Idade:
            <input
              className={styles.input}
              value={age}
              onChange={(event) => setAge(event.target.value)}
            ></input>
          </label>
          <br />
          <label className={styles.label} type="text">
            Nota Geral:
            <input
              className={styles.input}
              value={rate}
              onChange={(event) => setRate(event.target.value)}
            ></input>
          </label>
          <br />


          <label className={styles.label}>{`Status: ${data}`}</label>
          <br />
          <label className={styles.label}>{`Retorno: ${data2}`}</label>

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
          onClick={(event1) => clean(event1)}
        >
          Novo Jogador
        </button>
      </div>
    </>
  );
}
