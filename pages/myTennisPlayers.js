import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
let url = "http://localhost:3000/api/GetTennisPlayers";

export default function Home() {
  let [name, setName] = useState();
  let [franchise, setFranchise] = useState();
  let [position, setPosition] = useState();
  let [foot, setFoot] = useState();
  let [age, setAge] = useState();
  let [speeding, setSpeeding] = useState();
  let [defending, setDefending] = useState();
  let [physical, setPhysical] = useState();
  let [hability, setHability] = useState();
  let [shooting, setShooting] = useState();
  let [rate, setRate] = useState(50);

  useEffect(() => {
    
    fetch(url)
      .then((response) => response.json())
      .then(
        (result) => (
          setName(result.data[1].name),
          setFranchise(result.data[1].franchise),
          setPosition(result.data[1].position),
          setFoot(result.data[1].foot),
          setAge(result.data[1].age),
          setSpeeding(result.data[1].speeding),
          setDefending(result.data[1].defending),
          setPhysical(result.data[1].physical),
          setHability(result.data[1].hability),
          setShooting(result.data[1].shooting),
          setRate(result.data[1].rate),
          console.log(result)
        )
        
      );
      
  });
  

  return (
    <div>
      <h1 style={{ color: "black" }}>
        <strong>Meus Jogadores de Futebol</strong>
      </h1>
      <br />
      <div
        style={{
          border: "2px",
          borderRadius: "10px",
          width: "300px",
          border: "3px solid",
          backgroundColor: "#ced2f3",
          float: "left",
        }}
      >
        <div style={{ textAlign: "left", margin: "4px", fontWeight: "bold" }}>
          Nome:
        </div>
        <span>{name}</span>
        <div style={{ textAlign: "left", margin: "4px", fontWeight: "bold" }}>
          Time:
        </div>
        <span>{franchise}</span>
        <div style={{ textAlign: "left", margin: "4px", fontWeight: "bold" }}>
          Posição:
        </div>
        <span>{position}</span>
        <div style={{ textAlign: "left", margin: "4px", fontWeight: "bold" }}>
          Pé:
        </div>
        <span>{foot}</span>
        <div style={{ textAlign: "left", margin: "4px", fontWeight: "bold" }}>
          Idade:
        </div>
        <span>{age}</span>
        <div style={{ textAlign: "left", margin: "4px", fontWeight: "bold" }}>
          Velocidade:
        </div>
        <span>{speeding}</span>
        <div style={{ textAlign: "left", margin: "4px", fontWeight: "bold" }}>
          Defesa:
        </div>
        <span>{defending}</span>
        <div style={{ textAlign: "left", margin: "4px", fontWeight: "bold" }}>
          Físico:
        </div>
        <span>{physical}</span>
        <div style={{ textAlign: "left", margin: "4px", fontWeight: "bold" }}>
          Habilidade:
        </div>
        <span>{hability}</span>
        <div style={{ textAlign: "left", margin: "4px", fontWeight: "bold" }}>
          Chute:
        </div>
        <span>{shooting}</span>
        <div style={{ textAlign: "left", margin: "4px", fontWeight: "bold" }}>
          Nota Geral:
        </div>
        <span>{rate}</span>
      </div>
    </div>
  );
}
