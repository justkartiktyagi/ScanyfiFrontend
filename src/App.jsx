import "./App.css";
import Home from "./pages/Home.jsx";
import AuthPage from "./pages/AuthPage.jsx";
import Onboarding from "./pages/Onboarding.jsx";
import BookingPage from "./pages/BookingPage.jsx";
import Header from "./components/Header.jsx";
import DashboardLayout from "./pages/dashboard/DashboardLayout.jsx";
import Overview from "./pages/dashboard/Overview.jsx";
import Bookings from "./pages/dashboard/Bookings.jsx";
import CalendarPage from "./pages/dashboard/CalendarPage.jsx";
import Analytics from "./pages/dashboard/Analytics.jsx";
import Profile from "./pages/dashboard/Profile.jsx";
import PatientBookings from "./pages/PatientBookings.jsx";
import PatientReports from "./pages/PatientReports.jsx";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/onboard" element={<Onboarding />} />
      <Route path="/booking" element={((<Header />), (<BookingPage />))} />
      <Route path="/patient/bookings" element={<PatientBookings />} />
      <Route path="/patient/reports" element={<PatientReports />} />
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Overview />} />
        <Route path="bookings" element={<Bookings />} />
        <Route path="calendar" element={<CalendarPage />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="profile" element={<Profile />} />
      </Route>
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
}

export default App;
