import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import { HomePage, MovieDetail } from "./pages";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </>
  );
}

export default App;
