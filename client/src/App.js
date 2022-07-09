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
import JobPosts from "./pages/job_posts";
import JobDetails from "./pages/job_details";
import PrivateRouteUser from "./components/PrivateRouteUser";
import Submit_cv from "./pages/submit_cv";
import Applications from "./pages/applications";
import ApplicationDetails from "./pages/application_details";
import ApplyJob from "./pages/applyJob";
import JobPosts2 from "./pages/job_posts_2";
import CVPerJob from "./pages/cv_per_job";

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
            <Route path="/job_details/:jobPostId" element={<JobDetails />} />
            <Route element={<PrivateRouteUser />} >
              <Route path="submit_cv" element={<Submit_cv />} />
              <Route path="apply/:jobId" element={<ApplyJob />} />
            </Route>
            <Route element={<PrivateRouteAdmin />} >
              <Route path="/admin_dashboard" element={<AdminDashboard />} />
              <Route path="/companies" element={<Companies />} />
              <Route path="/job_posts" element={<JobPosts />} />
              <Route path="/applications" element={<Applications />} />
              <Route path="/applications/:applicationId" element={<ApplicationDetails />} />
              <Route path="/applications_per_job" element={<JobPosts2 />} />
              <Route path="/job/:jobId/applications" element={<CVPerJob />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
