
import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  hideText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", size = 40, hideText = false }) => {
  return (
    <div className={`flex items-center space-x-3 group ${className}`}>
      <div className="relative" style={{ width: size, height: size }}>
        {/* The Outer Orbiting Lines */}
        <div className="absolute inset-0 flex items-center justify-center">
          {[...Array(20)].map((_, i) => (
            <div
              key={`orbit-${i}`}
              className="absolute border border-sky-400/20 rounded-full"
              style={{
                width: '100%',
                height: '70%',
                transform: `rotate(${i * 18}deg)`,
                animation: `rotateOrbit ${15 + i}s linear infinite`,
              }}
            />
          ))}
        </div>
        
        {/* The Inner Core Ball of Lines */}
        <div className="absolute inset-0 flex items-center justify-center scale-50">
          {[...Array(15)].map((_, i) => (
            <div
              key={`core-${i}`}
              className="absolute border border-sky-400 rounded-full"
              style={{
                width: '100%',
                height: '40%',
                transform: `rotate(${i * 24}deg)`,
                animation: `rotateOrbit ${5 + i * 0.5}s linear infinite reverse`,
              }}
            />
          ))}
        </div>
      </div>
      
      {!hideText && (
        <div className="flex flex-col leading-none">
          <span className="text-2xl font-bold tracking-tighter text-white flex items-baseline">
            CTEC<span className="text-sky-400 text-3xl font-black ml-0.5 transform translate-y-0.5">X</span>
          </span>
          <span className="text-[6px] uppercase tracking-[0.2em] text-slate-500 mt-0.5 whitespace-nowrap">
            Engineered Technology • Research • Solutions
          </span>
        </div>
      )}

      <style>{`
        @keyframes rotateOrbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Logo;
