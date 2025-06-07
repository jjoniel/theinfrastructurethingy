import React, { useState } from "react";
import "./MetricsPanel.css";

const MetricsPanel = () => {
  const [activeTab, setActiveTab] = useState("metrics");

  const renderContent = () => {
    switch (activeTab) {
      case "charts":
        return (
          <div className="panel-content">Charts will be displayed here.</div>
        );
      case "logs":
        return (
          <div className="panel-content log-view">
            <p>
              <span>[11:50:55]</span> Simulation started.
            </p>
          </div>
        );
      case "metrics":
      default:
        return (
          <div className="panel-content">
            <div className="kpi-grid">
              <div className="kpi-card">
                <span className="kpi-value">x mins</span>
                <span className="kpi-label">Avg. Commute Time</span>
              </div>
              <div className="kpi-card">
                <span className="kpi-value">x%</span>
                <span className="kpi-label">Congestion Level</span>
              </div>
              <div className="kpi-card">
                <span className="kpi-value">x</span>
                <span className="kpi-label">Simulated Fatalities</span>
              </div>
              <div className="kpi-card">
                <span className="kpi-value">x%</span>
                <span className="kpi-label">Public Transit Use</span>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="metrics-panel">
      <div className="tabs">
        <button
          onClick={() => setActiveTab("metrics")}
          className={activeTab === "metrics" ? "active" : ""}
        >
          Metrics
        </button>
        <button
          onClick={() => setActiveTab("charts")}
          className={activeTab === "charts" ? "active" : ""}
        >
          Charts
        </button>
        <button
          onClick={() => setActiveTab("logs")}
          className={activeTab === "logs" ? "active" : ""}
        >
          Logs
        </button>
      </div>
      {renderContent()}
    </div>
  );
};

export default MetricsPanel;
