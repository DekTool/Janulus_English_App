import React, { useState, useRef, useEffect } from "react";
import "./MatrixCard.css";

function Tooltip({ en, es }) {
  const [position, setPosition] = useState("top");
  const ref = useRef(null);

  useEffect(() => {
    const handlePosition = () => {
      const rect = ref.current?.getBoundingClientRect();
      if (rect && rect.top < 60) setPosition("bottom");
      else setPosition("top");
    };
    handlePosition();
    window.addEventListener("scroll", handlePosition);
    return () => window.removeEventListener("scroll", handlePosition);
  }, []);

  return (
    <span className="tooltip-wrapper" ref={ref}>
      <span className="tooltip-word">{en}</span>
      <span
        className={`tooltip-text ${position === "bottom" ? "bottom" : "top"}`}
      >
        {es}
      </span>
    </span>
  );
}

function MatrixCard({ matrix }) {
  return (
    <div className="matrix-card">
      <h2>{matrix.title}</h2>
      <table>
        <tbody>
          {matrix.sentences.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>
                  <Tooltip en={cell.en} es={cell.es} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MatrixCard;
