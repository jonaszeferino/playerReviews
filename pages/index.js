import Link from "next/link";
import Head from "next/head";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="keywords" content="nba,franchise,teams"></meta>
        <meta name="description" content="encontre tudo de nba aqui"></meta>
      </Head>
      <h1>Player Reviews</h1>
      <br/>
      <Link href="/addsoccerplayers">
        <a>Adiconar Jogadores de Futebol</a>
      </Link>
      <br/>
      <Link href="/myPlayers">
        <a>Ver as Reviews de Futebol</a>
      </Link>
    </div>
  );
}
// pode ser usar componente direto na pagina <Navbar /> nesse caso
