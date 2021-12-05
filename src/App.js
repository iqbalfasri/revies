import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import { HomePage, MovieDetail, Movie, TvDetail } from "./pages";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies/:category" element={<Movie />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/tv/:id" element={<TvDetail />} />
      </Routes>
    </>
  );
}

export default App;
