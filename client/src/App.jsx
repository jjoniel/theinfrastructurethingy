import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import ControlPanel from "./components/ControlPanel/ControlPanel.jsx";
import MapWindow from "./components/MapWindow/MapWindow.jsx";
import MetricsPanel from "./components/MetricsPanel/MetricsPanel.jsx";
import EducationalModal from "./components/EducationalModal/EducationalModal.jsx";
import WelcomeScreen from "./components/WelcomeScreen/WelcomeScreen.jsx";

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [selectedCity, setSelectedCity] = useState(null);

  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", content: "" });

  const openEducationalModal = (topic) => {
    setModalContent({
      title: "About " + topic,
      content: `This is where the detailed explanation for ${topic} would go. You can explain the concept with text, images, and diagrams here.`,
    });
    setModalOpen(true);
  };

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setShowWelcome(false);
  };

  return (
    <>
      <div className="dashboard-layout">
        <div className="header-grid-area">
          <Header />
        </div>
        <div className="control-panel-grid-area panel">
          <ControlPanel onLearnMoreClick={openEducationalModal} />
        </div>
        <div className="map-window-grid-area panel">
          <MapWindow city={selectedCity} />
        </div>
        <div className="metrics-panel-grid-area panel">
          <MetricsPanel />
        </div>
      </div>

      <EducationalModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        title={modalContent.title}
      >
        <p>{modalContent.content}</p>
      </EducationalModal>

      {showWelcome && <WelcomeScreen onCitySelect={handleCitySelect} />}
    </>
  );
}

export default App;
