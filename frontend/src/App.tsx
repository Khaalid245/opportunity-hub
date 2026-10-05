import React from 'react';
import { Briefcase, CheckCircle2 } from 'lucide-react';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white px-4">
      <div className="max-w-md w-full bg-slate-800/80 border border-slate-700 rounded-2xl p-8 shadow-2xl backdrop-blur-sm text-center">
        <div className="w-16 h-16 bg-teal-500/20 text-teal-400 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-teal-500/30 shadow-inner">
          <Briefcase className="w-8 h-8" />
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-white mb-2">
          Verified Opportunity Hub
        </h1>
        <p className="text-slate-400 text-sm mb-6">
          Phase 1 — Frontend scaffolding initialized with React 18, TypeScript, and Tailwind CSS.
        </p>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium border border-emerald-500/20">
          <CheckCircle2 className="w-4 h-4" />
          <span>Stage 1 Infrastructure Ready</span>
        </div>
      </div>
    </div>
  );
};

export default App;
