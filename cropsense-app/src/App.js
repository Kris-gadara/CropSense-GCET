import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={
            <div className="content-container">
              <h1>Welcome to CropSense</h1>
              <p>Your intelligent crop management solution</p>
              <div className="features">
                <div className="feature-card">
                  <h3>Generate</h3>
                  <p>Generate crop recommendations and insights</p>
                </div>
                <div className="feature-card">
                  <h3>Diseases</h3>
                  <p>Detect and manage crop diseases</p>
                </div>
                <div className="feature-card">
                  <h3>Financial</h3>
                  <p>Track financial performance and costs</p>
                </div>
              </div>
            </div>
          } />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
