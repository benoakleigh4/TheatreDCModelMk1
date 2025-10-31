import React from "react";
import { Info } from "lucide-react";

export default function ChartHeader({
  title,
  subtitle,
  timeframe,
  onTimeframeChange,
}) {
  const options = [
    { key: "3m", label: "3m" },
    { key: "6m", label: "6m" },
    { key: "1y", label: "1y" },
  ];

  return (
    <div className="chart-header">
      <div>
        <div className="chart-title">
          {title}{" "}
          <Info size={16} style={{ marginLeft: "6px", color: "#94a3b8" }} />
        </div>
        <div className="chart-subtitle">{subtitle}</div>
      </div>
      <div className="timeframe-toggle">
        {options.map((opt) => (
          <button
            key={opt.key}
            className={timeframe === opt.key ? "active" : ""}
            onClick={() => onTimeframeChange(opt.key)}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
