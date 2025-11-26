import "./App.css";
import Home from "./pages/Home.jsx";
import AuthPage from "./pages/AuthPage.jsx";
import Onboarding from "./pages/Onboarding.jsx";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/onboard" element={<Onboarding />} />
    </Routes>
  );
}

export default App;
