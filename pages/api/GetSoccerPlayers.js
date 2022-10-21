import client from "../../mongoConnection";
export default async function handler(req, res) {
  const collection = client.db("players").collection("soccerPlayers");

  switch (req.method) {
    case "GET":
      const body = res.body;
      // const location = {
      //   localOfView: "a",
      // };
      const getMongo = await collection.find().forEach();
      // nesse caso vai buscar todos registros que tenham na prop "localOfView: "Netflix"

      res.json({
        status: 200,
        data: getMongo,
        get: "Get Feito Com Sucesso!",
      });
      break;

    default:
      break;
  }
}

//update gitTeste
