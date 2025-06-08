import React from "react";
import "./WelcomeScreen.css";

const WelcomeScreen = ({ onCitySelect }) => {
  const cities = ["Springfield", "Metropolis", "Arkham City"];

  return (
    <div className="welcome-overlay">
      <div className="welcome-content">
        <h1 className="welcome-title">The Infrastructure Impact Project</h1>
        <div className="welcome-description">
          <p>
            This project is an interactive simulation designed to explore the
            complex relationship between urban infrastructure, traffic
            congestion, and community well-being. By visualizing how changes
            like road expansion or the introduction of public transit affect key
            metrics, we aim to educate users on the principles of sustainable
            urban planning.
          </p>
          <p>
            Engage with different scenarios, experiment with infrastructure
            modifications, and observe the real-time impact on commute times,
            safety, and environmental factors. Our goal is to foster a deeper
            understanding of the trade-offs involved in building the cities of
            the future and to highlight concepts like induced demand and
            Braess's paradox in a tangible way.
          </p>
        </div>
        <div className="welcome-actions">
          <h3>Choose a Scenario to Begin:</h3>
          <div className="city-buttons">
            {cities.map((city) => (
              <button key={city} onClick={() => onCitySelect(city)}>
                {city}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
