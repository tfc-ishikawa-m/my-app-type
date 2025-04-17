// import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Type080101 from "./test/chapter08/chapter08-01-01/page";
import App1 from "./test/chapter08/textbook/App";
import Type080102 from "./test/chapter08/chapter08-01-02/page";
import Type080103 from "./test/chapter08/chapter08-01-03/page";
import Type080104 from "./test/chapter08/chapter08-01-04/page";
import Type080105 from "./test/chapter08/chapter08-01-05/page";
// Homeコンポーネント
function Home() {
  return <h1>Welcome to the Home Page</h1>;
}
// Aboutコンポーネント
function About() {
  return <h1>About This App</h1>;
}
// Contactコンポーネント（追加例）
function Contact() {
  return <h1>Contact Us</h1>;
}
// AppRouterコンポーネント
export default function AppRouter() {
  return (
    <Router>
      {/* <nav style={{ padding: "10px", borderBottom: "1px solid black" }}>
        <Link to="/" style={{ marginRight: "10px" }}>
          Home
        </Link>
        <Link to="/about" style={{ marginRight: "10px" }}>
          About
        </Link>
        <Link to="/contact">Contact</Link>
      </nav> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/app1" element={<App1 />} />
        <Route path="/080101" element={<Type080101 />} />
        <Route path="/080102" element={<Type080102 />} />
        <Route path="/080103" element={<Type080103 />} />
        <Route path="/080104" element={<Type080104 />} />
        <Route path="/080105" element={<Type080105 />} />
      </Routes>
    </Router>
  );
}
