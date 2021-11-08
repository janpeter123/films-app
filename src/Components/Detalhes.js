import { useParams } from "react-router-dom";
import EventIcon from "@mui/icons-material/Event";
import CircularProgress from '@mui/material/CircularProgress';
// Route, Link, BrowserRouter ,
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "../Styles/Detalhes.css";

function Detalhes() {
  let { id } = useParams();
  const [movie, setMovie] = useState({});
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function defineDate(date) {
      var newDate = "";
      newDate = newDate = newDate.concat([
        date.slice(8, 10),
        "/",
        date.slice(5, 7),
        "/",
        date.slice(0, 4),
      ]);
      newDate = newDate.replaceAll(",", "");
      setDate(newDate);
    }

    async function getMovie() {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=c9680c5e8dedd8ce95289c14748165f9`
      );
      const data = await res.json();
      await defineDate(data.release_date);
      setMovie(data);
      await setLoading(false);
    }
    getMovie();
  }, []);

  if (loading === false) {
    return (
      <section>
        <div
          id="background"
          style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
            opacity: "0.1",
            position:'absolute',
            width: "100%",
            height: "100%",
            backgroundSize:"cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <Navbar />
        <section className="content">
          <div
            id="poster"
            style={{
              backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.poster_path}")`,
              opacity: "0.9",
              width: "30rem",
              height: "38rem",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <section className="info">
            <h1>{movie.original_title}</h1>
            <div className="date">
              <EventIcon style={{ color: "white", opacity: 0.8 }} />
              <h5>{date}</h5>
            </div>
            <p className="overview">{movie.overview}</p>
          </section>
        </section>
      </section>
    );
  } else {
    return (
      <section className="loading">
        <CircularProgress size={200}/>
        <h1>Obtendo dados...</h1>
      </section>
    );
  }
}

export default Detalhes;
