import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Asidebar from "./components/Asidebar/Asidebar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div className="flex">
        <Asidebar />
        <div className="flex-1 ">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
