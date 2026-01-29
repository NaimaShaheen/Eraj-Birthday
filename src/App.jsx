import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

const App = () => {
  const [step, setStep] = useState('terminal');
  const [logs, setLogs] = useState([]);

  const personalLogs = [
    "> Initializing eraj-session-2026...",
    "> Loading Semester_3_Resources...",
    "> Searching for 'Career_Path'...",
    "> Found: 'Emerging Developer'...",
    "> Memory_Check: Found 1M shared laughs...",
    "> Status: Ready to level up!",
    "> Executing: Surprise_Package.sh"
  ];

  useEffect(() => {
    personalLogs.forEach((line, i) => {
      setTimeout(() => {
        setLogs(prev => [...prev, line]);
        if (i === personalLogs.length - 1) {
          setTimeout(() => {
            setStep('final');
            confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
          }, 1500);
        }
      }, i * 1000);
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-mono p-4 flex items-center justify-center">
      
      {step === 'terminal' ? (
        <div className="w-full max-w-lg bg-black/50 p-6 rounded-lg border border-blue-900/30 shadow-2xl">
          <div className="flex gap-2 mb-4 border-b border-white/5 pb-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
            <span className="text-[10px] text-slate-500 ml-2">guest@eraj-pc: ~</span>
          </div>
          <div className="space-y-2 text-sm md:text-base text-blue-400">
            {logs.map((log, i) => <p key={i}>{log}</p>)}
            <span className="w-2 h-5 bg-blue-500 inline-block animate-pulse"></span>
          </div>
        </div>
      ) : (
        <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in zoom-in duration-700">
          
          {/* Side Info */}
          <div className="md:col-span-1 space-y-4">
            <div className="bg-slate-900/80 p-6 rounded-2xl border border-white/5 shadow-xl text-center">
              <div className="w-20 h-20 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl shadow-lg">👩‍💻</div>
              <h2 className="text-xl font-bold text-white uppercase tracking-tighter">Eraj</h2>
              <p className="text-[10px] text-blue-400 font-bold tracking-widest uppercase">Future Dev</p>
              <p className="text-[9px] text-slate-500 mt-1 uppercase italic font-bold tracking-widest">Semester 3 / SE Student</p>
            </div>
            
            {/* --- CRITICAL TREAT TRACKER --- */}
            <div className="bg-slate-900/80 p-5 rounded-2xl border-2 border-red-500/30 shadow-[0_0_20px_rgba(239,68,68,0.1)] relative overflow-hidden">
              <div className="flex justify-between items-end mb-2">
                <p className="text-[10px] text-red-400 uppercase font-black tracking-widest">Treat Tracker</p>
                <p className="text-[10px] text-red-500 font-black animate-pulse bg-red-500/10 px-2 py-0.5 rounded">CRITICAL 0%</p>
              </div>
              <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden border border-white/5 shadow-inner">
                <div className="bg-red-600 w-[4%] h-full rounded-full animate-pulse shadow-[0_0_15px_rgba(220,38,38,0.8)]"></div>
              </div>
              <p className="text-[9px] text-slate-400 mt-3 leading-tight italic">
                "System waiting for Biryani to update status. Error: Hunger_404"
              </p>
            </div>

            <div className="bg-slate-900/80 p-4 rounded-2xl border border-white/5">
              <p className="text-[10px] text-slate-500 uppercase font-bold">Friendship Uptime</p>
              <p className="text-lg font-bold text-green-400 tracking-tighter">99.9% (Always Available)</p>
            </div>
          </div>

          {/* Main Card */}
          <div className="md:col-span-2 bg-gradient-to-br from-blue-600/10 via-slate-900 to-purple-600/10 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 text-8xl font-black italic">HB</div>
            
            <h1 className="text-5xl font-black text-white mb-2 leading-tight tracking-tight">
              Happy <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Birthday!</span>
            </h1>
            
            <p className="text-slate-400 mb-8 max-w-sm text-sm leading-relaxed">
              In a world full of <span className="text-orange-400 font-semibold italic">temporary variables</span>, 
              thanks for being my <span className="text-green-400 font-bold uppercase tracking-wider">constant</span>. 
              <span className="block mt-3 text-blue-400 font-medium">
                Here's to another year of shared bugs and solved problems! 🚀
              </span>
            </p>

            <div className="bg-black/60 p-5 rounded-xl border border-white/5 font-mono text-xs sm:text-sm">
                <p className="text-pink-400">{"{"}</p>
                <p className="pl-6"><span className="text-blue-300">"brain_status"</span>: <span className="text-orange-300">"3rd Sem Trauma"</span>,</p>
                <p className="pl-6"><span className="text-blue-300">"gift_status"</span>: <span className="text-yellow-400">"Waiting (Loading... ⏳)"</span>,</p>
                <p className="pl-6"><span className="text-blue-300">"semester_survival"</span>: <span className="text-orange-300 font-bold">"100% (Chae-Powered ☕)"</span>,</p>
                <p className="pl-6"><span className="text-blue-300">"error_log"</span>: <span className="text-red-400">"404: Treat Not Found"</span>,</p>
                <p className="pl-6"><span className="text-blue-300">"priority_task"</span>: <span className="text-green-400 font-bold">"Stay Awesome & Shine"</span>,</p>
                <p className="pl-6"><span className="text-blue-300">"next_version"</span>: <span className="text-orange-300">"Eraj_v2.1_Legend"</span></p>
                <p className="text-pink-400">{"}"}</p>
            </div>

            <button 
              onClick={() => confetti()}
              className="mt-8 w-full py-4 bg-white text-black font-black rounded-xl hover:scale-[1.02] transition-transform active:scale-95 shadow-xl"
            >
              LAUNCH_PARTY() 🚀
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;