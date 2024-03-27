import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarComponent from "./components/navbar_comp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Features } from "./pages/Features";
import { UploadOpportunities } from "./pages/UploadOpportunities";
import { Landing } from "./pages/Landing";

function App() {
  return (
    <>
      <NavBarComponent />
      <Router>
        <Routes>
          <Route path="/" Component={Home}>
            <Route path="" element={<Landing />} />
            <Route path="features" element={<Features />} />
            <Route
              path="uploadopportunities"
              element={<UploadOpportunities />}
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
