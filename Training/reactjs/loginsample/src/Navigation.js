import { BrowserRouter, Routes, Route } from "react-router-dom";
import JSONMap from "./JSONMap";
import LoginPage from './LoginPage'
import SignUpPage from "./SignUpPage";

function Navigation() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<JSONMap />}> 
          </Route>
          <Route path="/signup" element={<SignUpPage />}> 
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default Navigation;
