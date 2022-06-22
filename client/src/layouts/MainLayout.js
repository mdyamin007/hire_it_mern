import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const MainLayout = () => {
  return (
    <main className="relative min-h-screen overflow-auto w-full">
      <NavBar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default MainLayout;
