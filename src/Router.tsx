// import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Type080101 from "./test/chapter08/chapter08-01-01/page";
import App1 from "./test/chapter08/textbook/App";
import Type080102 from "./test/chapter08/chapter08-01-02/page";
import Type080103 from "./test/chapter08/chapter08-01-03/page";
import Type080104 from "./test/chapter08/chapter08-01-04/page";
import Type080105 from "./test/chapter08/chapter08-01-05/page";
import Type080106 from "./test/chapter08/chapter08-01-06/page";
import Type080107 from "./test/chapter08/chapter08-01-07/page";
import App2 from "./test/chapter08/textbook2/App2";
import Page0101 from "./test/typescript/chap08-01-01/page";
import Page0102 from "./test/typescript/chap08-01-02/page";
import Page0103 from "./test/typescript/chap08-01-03/page";
import Page0104 from "./test/typescript/chap08-01-04/page";
import Page0106 from "./test/typescript/chap08-01-06/page";
import Page0107 from "./test/typescript/chap08-01-07/page";
import Page0105 from "./test/typescript/chap08-01-05/page";
import Page080201 from "./test/typescript/chap08-02-01/page";
import Page0301 from "./test/typescript/chap08-03-01/page";
import Page0302 from "./test/typescript/chap08-03-02/page";
import Page0303 from "./test/typescript/chap08-03-03/page";
import Page0401 from "./test/typescript/chap08-04-01/page";
import Page0402 from "./test/typescript/chap08-04-02/page";
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
        <Route path="/080106" element={<Type080106 />} />
        <Route path="/080107" element={<Type080107 />} />
        <Route path="/app2" element={<App2 />} />
        <Route path="/page0101" element={<Page0101 />} />
        <Route path="/page0102" element={<Page0102 />} />
        <Route path="/page0103" element={<Page0103 />} />
        <Route path="/page0104" element={<Page0104 />} />
        <Route path="/page0105" element={<Page0105 />} />
        <Route path="/page0106" element={<Page0106 />} />
        <Route path="/page0107" element={<Page0107 />} />
        <Route path="/page0201" element={<Page080201 />} />
        <Route path="/page0301" element={<Page0301 />} />
        <Route path="/page0302" element={<Page0302 />} />
        <Route path="/page0303" element={<Page0303 />} />
        <Route path="/page0401" element={<Page0401 />} />
        <Route path="/page0402" element={<Page0402 />} />
      </Routes>
    </Router>
  );
}
