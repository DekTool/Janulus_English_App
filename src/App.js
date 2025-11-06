import React, { useState } from "react";
import MatrixCard from "./MatrixCard";
import PhraseGenerator from "./PhraseGenerator";
import { matrices } from "./matrices";
import "./App.css";

function App() {
  const [selectedMatrix, setSelectedMatrix] = useState(0);

  return (
    <div className="App">
      <h1 className="title">Método Janulus – Inglés Diario</h1>

      <div className="matrix-selector">
        <label>Selecciona una matriz:</label>
        <select
          value={selectedMatrix}
          onChange={(e) => setSelectedMatrix(Number(e.target.value))}
        >
          {matrices.map((m, i) => (
            <option key={i} value={i}>
              {m.title}
            </option>
          ))}
        </select>
      </div>

      <MatrixCard matrix={matrices[selectedMatrix]} />
      <PhraseGenerator matrix={matrices[selectedMatrix]} />

      {/* === Pie === */}
      <footer className="app-footer">
        © {new Date().getFullYear()} Todos los derechos reservados —{" "}
        <a
          href="https://github.com/DekTool"
          target="_blank"
          rel="noopener noreferrer"
        >
          DekTool
        </a>
      </footer>
    </div>
  );
}

export default App;
