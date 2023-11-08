import { Link, Route, Routes } from "react-router-dom";
import AboutUs from "./AboutUs";
import Mission from "./Mission";


export default function About() {
  return (
    <>
      <h2>About Page</h2>
      <nav>
      <Link to="us">About US</Link>
      <Link to="mission">Mission</Link>
      <Link to="values">Our Values</Link>
      </nav>

    <Routes>
      <Route path="/us" element={<AboutUs />} />
      <Route path="/mission" element={<Mission />} />
    </Routes>
    </>
  );
}
