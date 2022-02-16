import { Route,BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import BlogDetails from "./pages/BlogDetails";
import Create from "./pages/Create";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
