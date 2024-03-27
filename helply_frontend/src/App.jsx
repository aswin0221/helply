// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import NavBarComponent from "./components/navbar_comp";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Home } from "./pages/Home";
// import { Features } from "./pages/Features";
// import { UploadOpportunities } from "./pages/UploadOpportunities";
// import { Landing } from "./pages/Landing";

// function App() {
//   return (
//     <>
//       <NavBarComponent />
//       <Router>
//         <Routes>
//           <Route path="" element={<Home />}>
//             <Route path="" element={<Landing />} />
//             <Route path="features" element={<Features />} />
//             <Route
//               path="uploadopportunities"
//               element={<UploadOpportunities />}
//             />
//           </Route>
//         </Routes>
//       </Router>
//     </>
//   );
// }

// export default App;

import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import { Footer } from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
