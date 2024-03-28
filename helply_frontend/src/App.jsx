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
