import React from "react";
import { List, User } from "lucide-react";
import InfoTooltip from "./InfoTooltip"; // Assuming InfoTooltip is available

// NOTE: This component does NOT render the outer .slicer-row or .slicer-container
// It expects App.jsx to provide that wrapper to allow for easy grid placement.

export default function Slicers({
  specialtyOptions,
  selectedSpecialty,
  onSpecialtyChange,
  surgeonOptions,
  selectedSurgeons, // Now expects array
  onSurgeonChange,
}) {
  return (
    <>
      {/* Specialty Slicer */}
      <div className="slicer-container">
        <div className="slicer-header">
          <List size={16} /> Filter by Specialty
          <InfoTooltip text="Filter the entire model (calculations, KPIs, forecast) by a specific specialty." />
        </div>
        <div className="slicer-items">
          {(specialtyOptions || []).map((spec) => (
            <button
              key={spec}
              className={`slicer-item ${
                selectedSpecialty === spec ? "selected" : ""
              }`}
              onClick={() => onSpecialtyChange(spec)}
            >
              {spec}
            </button>
          ))}
        </div>
      </div>

      {/* Surgeon Slicer */}
      <div className="slicer-container">
        <div className="slicer-header">
          <User size={16} /> Filter by Surgeon
          <InfoTooltip text="Filter the model by a specific surgeon. This filter only affects data where the surgeon name is explicitly captured." />
        </div>
        <div className="slicer-items">
          {(surgeonOptions || []).map((surgeon) => (
            <button
              key={surgeon}
              className={`slicer-item ${
                selectedSurgeons.includes(surgeon) ? "selected" : ""
              }`}
              // We maintain the single-select functionality you intended
              onClick={() => {
                onSurgeonChange(
                  surgeon === "All Surgeons" ? ["All Surgeons"] : [surgeon]
                );
              }}
            >
              {surgeon}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
