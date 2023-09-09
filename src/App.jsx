import { Routes, Route } from "react-router-dom";
import Footer from "./sections/Footer";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";

const App = () => (
  <main className="relative">
    <Nav />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="products/:productName" element={<ProductPage />} />
    </Routes>
    <section className="padding-x padding-t pb-8 bg-black ">
      <Footer />
    </section>
  </main>
);

export default App;
