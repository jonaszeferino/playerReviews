import client from "../../mongoConnection";
export default async function handler(req, res) {
  const collection = client.db("players").collection("soccerPlayers");

  switch (req.method) {
    case "POST":
      const body = JSON.parse(req.body);
      const inPutMongo = await collection.insertOne(body); // iserir azar
      res.json({
        status: 'Review Salvo Com Sucesso',
        statusCode:200,
        data: inPutMongo,
      });
      break;

    default:
      break;
  }
}
