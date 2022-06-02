import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Bikes from "./Bikes";
import Shop from "./Shop";
import Cinematique from "./Cinematique";
import LifeStyle from "./LifeStyle";
import About from "./About";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/bikes" element={<Bikes />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/Cinematique" element={<Cinematique />}></Route>
        <Route path="/LifeStyle" element={<LifeStyle />}></Route>
        <Route path="/About" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Navigation;
