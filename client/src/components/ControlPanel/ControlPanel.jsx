import React from "react";
import "./ControlPanel.css";
import {
  FaPlay,
  FaPause,
  FaRedo,
  FaPlus,
  FaMinus,
  FaBus,
  FaQuestionCircle,
} from "react-icons/fa";

const ControlPanel = ({ onLearnMoreClick }) => {
  return (
    <div className="control-panel">
      <div className="panel-section">
        <h3 className="panel-title">Simulation Controls</h3>
        <div className="button-group">
          <button className="icon-button">
            <FaPlay /> Play
          </button>
          <button className="icon-button">
            <FaPause /> Pause
          </button>
          <button className="icon-button">
            <FaRedo /> Reset
          </button>
        </div>
        <label htmlFor="sim-speed">Simulation Speed</label>
        <input
          type="range"
          id="sim-speed"
          min="0.5"
          max="5"
          step="0.5"
          defaultValue="1"
        />
      </div>

      <div className="panel-section">
        <h3 className="panel-title">Infrastructure Tools</h3>
        <button className="tool-button">
          <FaPlus /> Add Lane
        </button>
        <button className="tool-button">
          <FaMinus /> Remove Lane
        </button>
        <button className="tool-button">
          <FaBus /> Add Bus Route
        </button>
      </div>

      <div className="panel-section">
        <h3 className="panel-title">Learn</h3>
        <button
          className="learn-button"
          onClick={() => onLearnMoreClick("Induced Demand")}
        >
          What is Induced Demand? <FaQuestionCircle />
        </button>
        <button
          className="learn-button"
          onClick={() => onLearnMoreClick("Braess's Paradox")}
        >
          What is Braess's Paradox? <FaQuestionCircle />
        </button>
      </div>
    </div>
  );
};

export default ControlPanel;
