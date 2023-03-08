import './App.css';
import AppNavbar from './components/App/AppNavbar';
import HomeView from './views/HomeView';
import AboutView from './views/AboutView';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <AppNavbar />
        <Routes>
          <Route path="/about" element={<AboutView />} />
          <Route path="/" element={<HomeView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
