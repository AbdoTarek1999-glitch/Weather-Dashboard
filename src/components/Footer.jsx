import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-6 bg-black/20 backdrop-blur-md border-t border-white/10 mt-auto">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white/60 text-sm font-medium">
          © 2025 WeatherDash | Developed by <span className="text-blue-400">Abdulrahman Tarek</span>
        </p>
        
        <div className="flex items-center gap-6">
          <a 
            href="https://www.linkedin.com/in/abdulrahman-tarek-your-profile" // ضع رابط بروفايلك الحقيقي هنا
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/80 hover:text-blue-400 transition-all group"
          >
            <span className="bg-white/10 p-2 rounded-lg group-hover:bg-blue-600/20">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </span>
            <span className="font-bold text-sm">LinkedIn</span>
          </a>
          
          <div className="h-4 w-[1px] bg-white/20"></div>

          <button 
            onClick={() => window.location.href = 'mailto:your-email@example.com'}
            className="text-white/80 hover:text-red-400 transition-all font-bold text-sm"
          >
            Contact Me
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;