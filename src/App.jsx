import React from "react";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Layout from "./components/Layout";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Welcome /></Layout>}/>
        <Route path="/login" element={<Layout><Login /></Layout>}/>
        <Route path="/register" element={<Layout><Register /></Layout>}/>
        <Route path="/profile" element={<Layout><Profile /></Layout>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;