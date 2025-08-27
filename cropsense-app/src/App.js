import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
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
      </main>
      <Footer />
    </div>
  );
}

export default App;
