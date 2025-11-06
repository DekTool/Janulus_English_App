// src/PhraseGenerator.js
import React, { useState } from "react";
import "./PhraseGenerator.css"; // estilos opcionales

function PhraseGenerator({ matrix }) {
  const [phraseEn, setPhraseEn] = useState("");
  const [phraseEs, setPhraseEs] = useState("");
  const [showEs, setShowEs] = useState(false);

  const generatePhrase = () => {
    if (!matrix || !matrix.sentences) return;
    const partsEn = [];
    const partsEs = [];

    matrix.sentences.forEach((row) => {
      // filter out empty cells
      const options = row.filter((c) => c && c.en && c.en.trim() !== "");
      if (options.length === 0) return;
      const pick = options[Math.floor(Math.random() * options.length)];
      partsEn.push(pick.en);
      partsEs.push(pick.es);
    });

    setPhraseEn(partsEn.join(" "));
    setPhraseEs(partsEs.filter(Boolean).join(" "));
    setShowEs(false);
  };

  return (
    <div className="phrase-generator">
      <div className="controls">
        <button className="btn-generate" onClick={generatePhrase}>Generar frase</button>
        <button
          className="btn-toggle"
          onClick={() => setShowEs((s) => !s)}
          disabled={!phraseEn}
        >
          {showEs ? "Ocultar traducción" : "Mostrar traducción"}
        </button>
      </div>

      {phraseEn && (
        <div className="generated-block">
          <p className="generated-en">{phraseEn}</p>
          {showEs && <p className="generated-es">{phraseEs || "(sin traducción completa)"}</p>}
        </div>
      )}

      {!phraseEn && <p className="small-note">Haz clic en "Generar frase" para crear una frase usando la matriz.</p>}
    </div>
  );
}

export default PhraseGenerator;


