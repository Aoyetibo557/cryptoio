import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/registerpage/RegisterPage';
import HomePage from './pages/homepage/HomePage';
import MarketPage from './pages/marketspage/MarketPage';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/onboarding/login" element={<LoginPage />} />
          <Route path="/onboarding/register" element={<RegisterPage />} />
          <Route path="/markets" element={<MarketPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
