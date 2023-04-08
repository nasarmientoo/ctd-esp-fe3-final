import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";

import "./index.css";

function App() {
  return (
      <div className= {`App `}>
          <Navbar/>
          <main>
          <Outlet/>
          </main>
          <Footer/>
      </div>
  );
}

export default App;