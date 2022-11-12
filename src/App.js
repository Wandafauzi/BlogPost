import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomeLog from "./component/home";
import Login from "./component/login";
import Register from "./component/register";
import Post from "./post/post";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HomeLog />} />
        <Route path="/register" element={<Register />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </>
  );
}

export default App;
