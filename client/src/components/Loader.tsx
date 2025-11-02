import { useEffect, useState } from 'react';

export default function Loader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300"
      style={{
        background: 'linear-gradient(135deg, #0a0a0c 0%, #0e0e10 50%, #12080a 100%)',
        animation: 'fadeOut 0.3s ease-out 0.6s forwards',
      }}
    >
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(255, 49, 49, 0.2) 0%, transparent 50%)',
        }}
      />
      
      <div className="relative">
        <div 
          className="absolute inset-0 scale-150 blur-3xl opacity-40"
          style={{
            background: 'radial-gradient(circle, rgba(255, 49, 49, 0.6) 0%, transparent 70%)',
            animation: 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          }}
        />
        
        <img
          src="https://demonflare.com/cdn/shop/files/DemonFlare_logo_white_190x.png"
          alt="DemonFlare"
          className="relative h-auto w-32 drop-shadow-2xl"
          style={{
            animation: 'logoFloat 1.5s ease-in-out infinite',
          }}
        />
      </div>

      <style>{`
        @keyframes fadeOut {
          to {
            opacity: 0;
            visibility: hidden;
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1.5);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.6);
          }
        }
        
        @keyframes logoFloat {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-10px) scale(1.05);
          }
        }
      `}</style>
    </div>
  );
}
