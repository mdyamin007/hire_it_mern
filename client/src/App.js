import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Register from "./pages/register";
import Login from "./pages/login";
import MainLayout from "./layouts/MainLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Verification from "./pages/verification";
import PrivateRouteAdmin from "./components/PrivateRouteAdmin";
import AdminDashboard from "./pages/admin_dashboard";
import Companies from "./pages/companies";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/verify/:userId/:tokenId" element={<Verification />} />
            <Route element={<PrivateRouteAdmin />} >
              <Route path="/admin_dashboard" element={<AdminDashboard />} />
              <Route path="/companies" element={<Companies />} />

            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
