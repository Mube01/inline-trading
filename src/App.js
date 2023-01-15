import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import Products from "./views/Products";
import Four from "./views/Four";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/products" element={<Products />} />
        <Route path="*" element={<Four />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
