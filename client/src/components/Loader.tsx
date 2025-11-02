import { useEffect, useState } from 'react';

export default function Loader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500"
      style={{
        background: 'linear-gradient(135deg, #0a0a0c 0%, #0e0e10 50%, #12080a 100%)',
        animation: 'fadeOut 0.5s ease-out 1.2s forwards',
      }}
    >
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(255, 49, 49, 0.2) 0%, transparent 50%)',
        }}
      />
      
      <div className="relative flex flex-col items-center gap-6">
        <div className="relative">
          <div 
            className="absolute inset-0 scale-150 blur-3xl opacity-40"
            style={{
              background: 'radial-gradient(circle, rgba(255, 49, 49, 0.6) 0%, transparent 70%)',
              animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            }}
          />
          
          <div 
            className="relative flex h-24 w-24 items-center justify-center rounded-full border border-white/20 bg-white/10"
            style={{
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              animation: 'spin 3s linear infinite',
            }}
          >
            <div 
              className="absolute h-20 w-20 rounded-full border-2 border-transparent border-t-primary"
              style={{
                animation: 'spin 1s linear infinite',
              }}
            />
            
            <svg 
              className="h-10 w-10 text-primary"
              fill="none" 
              viewBox="0 0 24 24"
              style={{
                animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
              }}
            >
              <path 
                stroke="currentColor" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
        </div>
        
        <div className="flex flex-col items-center gap-2">
          <div 
            className="flex gap-1.5"
            style={{
              animation: 'fadeIn 0.6s ease-out',
            }}
          >
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="h-2 w-2 rounded-full bg-primary"
                style={{
                  animation: `bounce 1.4s ease-in-out ${i * 0.15}s infinite`,
                  boxShadow: '0 0 10px rgba(255, 49, 49, 0.5)',
                }}
              />
            ))}
          </div>
          <p 
            className="text-sm font-medium text-white/60"
            style={{
              animation: 'fadeIn 0.6s ease-out 0.2s backwards',
            }}
          >
            Loading DemonFlare
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fadeOut {
          to {
            opacity: 0;
            visibility: hidden;
          }
        }
        
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        
        @keyframes bounce {
          0%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
