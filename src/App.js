import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import { HomePage, MovieDetail, Movie } from "./pages";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies/:category" element={<Movie />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </>
  );
}

export default App;
