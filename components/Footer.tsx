import React from 'react';
import { Github, Linkedin, Disc as Discord, Apple, Smartphone } from 'lucide-react'; // Using Smartphone for generic device or similar

// Note: lucide-react doesn't have Windows icon, using Grid or similar as placeholder or simple text
import { Grid } from 'lucide-react';

export default function Footer() {
  return (
    <div className="flex flex-col items-center py-20 w-full max-w-4xl mx-auto">
       <svg className="w-64 h-10 mb-10 text-gray-800" viewBox="0 0 200 20" fill="none">
            <path d="M0 10 Q 100 20 200 10" stroke="currentColor" strokeWidth="1" />
       </svg>

       <div className="flex gap-10 mb-10">
            <a href="#" className="flex flex-col items-center gap-2 hover:scale-110 transition-transform">
                <Discord className="w-8 h-8" />
                <span className="text-sm">Discord</span>
            </a>
            <a href="#" className="flex flex-col items-center gap-2 hover:scale-110 transition-transform">
                <Linkedin className="w-8 h-8" />
                <span className="text-sm">Linkedin</span>
            </a>
            <a href="#" className="flex flex-col items-center gap-2 hover:scale-110 transition-transform">
                <Github className="w-8 h-8" />
                <span className="text-sm">github</span>
            </a>
       </div>

       <div className="flex gap-4 mb-6">
            <Apple className="w-8 h-8" />
            <Grid className="w-8 h-8" /> {/* Placeholder for Windows */}
       </div>

       <button className="w-full max-w-md py-4 text-2xl font-bold bg-purple-200 border-2 border-gray-800 rounded shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all hatched-bg-purple uppercase">
            Download
       </button>
    </div>
  );
}

