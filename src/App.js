import "./App.css";
import Blogs from "./components/Blogs";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Popup from "./components/Popup";
import { Routes, Route, Link } from "react-router-dom";
import reducer from "./context/reducer";
import { useStateValue } from "./context/StateProvider";
import Login from "./pages/Login";
function App() {
  const [user, { dispatch }] = useStateValue();
  useEffect(() => {
    console.log("user", user);
  }, [user]);
  return (
    <div className="App">
      {!user?.user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
            {/* <Blogs /> */}
            <Sidebar />
            {/* <Blogs /> */}
            <Routes>
              <Route path="/blogs/popup/:blogId/:index" element={<Popup />} />
              <Route path="/blogs/:blogId" element={<Blogs />} />
              <Route path="/" element={<h1>welcome</h1>} />
            </Routes>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
