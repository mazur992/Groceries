import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Store } from "./pages/Store";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
