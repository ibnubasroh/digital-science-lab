import React, { useState } from 'react';

export default function App() {
  const [phValue, setPhValue] = useState(7);

  const getPHColor = (val) => {
    if (val < 3) return '#ef4444'; 
    if (val < 6) return '#f97316'; 
    if (val < 8) return '#22c55e'; 
    if (val < 11) return '#3b82f6'; 
    return '#a855f7';
  };
  const getAIExplanation = (val) => {
  if (val == 7) return "Ini adalah air murni. Konsentrasi ion hidrogen (H+) dan hidroksida (OH-) seimbang. Sangat aman bagi makhluk hidup!";
  if (val < 3) return "Waspada! Ini adalah asam kuat. Cairan ini bisa sangat korosif dan sering ditemukan pada asam lambung atau baterai.";
  if (val < 7) return "Ini adalah asam lemah. Contohnya adalah jus lemon atau kopi. Rasanya biasanya masam.";
  if (val > 11) return "Ini adalah basa kuat. Biasanya digunakan sebagai pembersih saluran air atau pemutih pakaian. Licin dan berbahaya jika terkena kulit.";
  return "Ini adalah larutan basa. Biasanya ditemukan pada sabun atau deterjen. Basa memiliki kecenderungan untuk menetralisir asam.";
};

  return (
    <div className="min-h-screen bg- [#020617] text-slate-50 flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold text-cyan-400 mb-8 tracking-widest">AgriSim AI</h1>
      
      <div className="bg-slate-900 border border-cyan-500/30 rounded-3xl p-10 shadow-2xl w-full max-w-md text-center">
        <h2 className="text-xl mb-6">Simulasi Kualitas Tanah & Air 🧪</h2>
        
        <div className="w-20 h-48 border-4 border-slate-700 rounded-b-full mx-auto relative bg-slate-800 mb-6 overflow-hidden">
          <div 
            className="absolute bottom-0 w-full transition-all duration-500"
            style={{ height: '70%', backgroundColor: getPHColor(phValue) }}
          ></div>
        </div>

        <div className="text-5xl font-black mb-4 text-white">{phValue}</div>
        
        <input 
          type="range" min="0" max="14" step="0.1" 
          value={phValue}
          onChange={(e) => setPhValue(parseFloat(e.target.value))}
          className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
        />
        
        <div className="mt-8 p-6 bg-cyan-950/30 rounded-2xl border border-cyan-500/20 text-left">
  <div className="flex items-center gap-2 mb-3">
    <span className="text-2xl">🤖</span>
    <h4 className="font-bold text-cyan-400">Agronomis Digital:</h4>
  </div>
  <p className="text-slate-300 text-sm italic">
    {getAIExplanation(phValue)}
  </p>
</div>
      </div>
    </div>
  );
}