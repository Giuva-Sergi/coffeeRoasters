import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import CreatePlan from "./pages/plan/CreatePlan";

function App() {
  return (
    <Wrapper>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="create-plan" element={<CreatePlan />} />
      </Routes>
      {/* <Footer /> */}
    </Wrapper>
  );
}

export default App;
