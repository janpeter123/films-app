import "./App.css";
import Filmes from "./Components/Filmes";
import Navbar from "./Components/Navbar";

function Home() {
  return (
      <div className="App">
        <Navbar />
        <Filmes />
      </div>
  );
}

export default Home;
