import React from 'react';
import './Results.css';
import { useLocation, useNavigate } from 'react-router-dom';

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { searchResults } = location.state || {};

  if (!searchResults) {
    return (
      <div className="results-container">
        <div className="no-results">
          <h2>No Analysis Data Found</h2>
          <p>Please go back to the home page and search for a city.</p>
          <button 
            className="back-button"
            onClick={() => navigate('/')}
          >
            Go Back to Search
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="results-container">
      <div className="results-header">
        <button 
          className="back-button"
          onClick={() => navigate('/')}
        >
          ← Back to Search
        </button>
        <h1 className="results-title">Agricultural Analysis for {searchResults.city}</h1>
      </div>

      <div className="results-content">
        {/* Overview Cards */}
        <div className="overview-cards">
          <div className="overview-card">
            <div className="card-icon climate-icon">🌡️</div>
            <div className="card-content">
              <h4>Climate</h4>
              <p>{searchResults.climate}</p>
            </div>
          </div>
          <div className="overview-card">
            <div className="card-icon soil-icon">🌱</div>
            <div className="card-content">
              <h4>Soil Type</h4>
              <p>{searchResults.soilType}</p>
            </div>
          </div>
          <div className="overview-card">
            <div className="card-icon season-icon">🌾</div>
            <div className="card-content">
              <h4>Best Season</h4>
              <p>{searchResults.season}</p>
            </div>
          </div>
          <div className="overview-card">
            <div className="card-icon irrigation-icon">💧</div>
            <div className="card-content">
              <h4>Irrigation</h4>
              <p>{searchResults.irrigation}</p>
            </div>
          </div>
        </div>

        <div className="results-grid">
          {/* Climate Details */}
          <div className="result-card">
            <h3>Climate Conditions</h3>
            <div className="result-item">
              <span className="label">Temperature:</span>
              <span className="value">{searchResults.temperature}</span>
            </div>
            <div className="result-item">
              <span className="label">Humidity:</span>
              <span className="value">{searchResults.humidity}</span>
            </div>
            <div className="result-item">
              <span className="label">Annual Rainfall:</span>
              <span className="value">{searchResults.rainfall}</span>
            </div>
          </div>

          {/* Crop Yield Chart */}
          <div className="result-card chart-card">
            <h3>Crop Yield Potential (%)</h3>
            <div className="chart-container">
              {Object.entries(searchResults.cropYield).map(([crop, yieldValue]) => (
                <div key={crop} className="bar-chart-item">
                  <div className="bar-label">{crop.charAt(0).toUpperCase() + crop.slice(1)}</div>
                  <div className="bar-container">
                    <div 
                      className="bar-fill" 
                      style={{width: `${yieldValue}%`}}
                      data-value={`${yieldValue}%`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soil Health Pie Chart */}
          <div className="result-card chart-card">
            <h3>Soil Health Indicators</h3>
            <div className="soil-health-grid">
              {Object.entries(searchResults.soilHealth).map(([nutrient, value]) => (
                <div key={nutrient} className="soil-indicator">
                  <div className="circular-progress" style={{'--progress': value}}>
                    <span className="progress-value">{typeof value === 'number' ? `${value}%` : value}</span>
                  </div>
                  <span className="indicator-label">{nutrient.charAt(0).toUpperCase() + nutrient.slice(1)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Monthly Rainfall Chart */}
          <div className="result-card chart-card full-width">
            <h3>Monthly Rainfall Distribution (mm)</h3>
            <div className="rainfall-chart">
              {searchResults.monthlyRainfall.map((rainfall, index) => (
                <div key={index} className="rainfall-bar">
                  <div 
                    className="rainfall-fill" 
                    style={{height: `${(rainfall / Math.max(...searchResults.monthlyRainfall)) * 100}%`}}
                    data-value={`${rainfall}mm`}
                  ></div>
                  <span className="month-label">
                    {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][index]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Crops */}
          <div className="result-card">
            <h3>Recommended Crops</h3>
            <div className="crops-list">
              {searchResults.recommendedCrops.map((crop, index) => (
                <span key={index} className="crop-tag">{crop}</span>
              ))}
            </div>
          </div>

          {/* Fertilizer Recommendations */}
          <div className="result-card">
            <h3>Fertilizer Recommendations</h3>
            <div className="fertilizers-list">
              {searchResults.fertilizers.map((fertilizer, index) => (
                <span key={index} className="fertilizer-tag">{fertilizer}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <button 
            className="action-btn primary"
            onClick={() => navigate('/', { state: { searchAgain: true } })}
          >
            Search Another City
          </button>
          <button 
            className="action-btn secondary"
            onClick={() => window.print()}
          >
            Print Report
          </button>
          <button 
            className="action-btn secondary"
            onClick={() => {
              const data = JSON.stringify(searchResults, null, 2);
              const blob = new Blob([data], { type: 'application/json' });
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = `${searchResults.city}_agriculture_report.json`;
              a.click();
              URL.revokeObjectURL(url);
            }}
          >
            Download Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default Results;
