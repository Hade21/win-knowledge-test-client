import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/homepage/homepage";
import Login from "../pages/login/login";
import Profile from "../pages/profile/profile";
import Register from "../pages/register/register";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile/:id" element={<Profile />} />
      <Route
        path="*"
        element={
          <h1 className="w-screen h-screen flex items-center justify-center">
            404 Not Found
          </h1>
        }
      />
    </Routes>
  );
};

export default Router;
