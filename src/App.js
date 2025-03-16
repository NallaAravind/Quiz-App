import './App.css';
import NavBar from './components/NavBar/NavBar';
import QuizState from './context/QuizState';
import Home from './pages/Home/Home';
import {
  Routes,
  Route
} from "react-router-dom";
import About from './pages/About/About';
import ReviewAnswer from './pages/Review/ReviewAnswer';
import AdminLogin from './components/AdminLogin';
import AdminPage from './pages/AdminPage';
import Quiz from './pages/Quiz';

function App() {

  return (
    <>
      <QuizState>
        <div className="App">
          <NavBar />
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/about" element={<About />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/review" element={<ReviewAnswer />} />
          </Routes>
        </div>
      </QuizState>
    </>
  );
}

export default App;
