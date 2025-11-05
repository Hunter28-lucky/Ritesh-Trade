import { useEffect, useState } from 'react';
import bullLogo from '@/assets/bull-logo.png';
import { useTheme } from '@/contexts/ThemeContext';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    // Start fade out animation after 2.5 seconds
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2500);

    // Remove loading screen completely after fade animation
    const removeTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-all duration-1000 ${
        theme === 'dark' ? 'bg-black' : 'bg-slate-900'
      } ${fadeOut ? 'opacity-0 scale-110' : 'opacity-100 scale-100'}`}
      style={{
        backdropFilter: fadeOut ? 'blur(20px)' : 'blur(0px)',
      }}
    >
      {/* Animated background gradient with red accent */}
      <div className={`absolute inset-0 animate-pulse ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-red-950/20 via-black to-red-900/20'
          : 'bg-gradient-to-br from-red-900/30 via-slate-900 to-red-800/30'
      }`} />
      
      {/* Radial glow effect - red theme */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-red-600/20 rounded-full blur-[150px] animate-pulse" />
      </div>

      {/* Logo container with animations */}
      <div className={`relative z-10 transition-all duration-1000 ${
        fadeOut ? 'scale-150 opacity-0' : 'scale-100 opacity-100'
      }`}>
        {/* Outer ring - rotating */}
        <div className="absolute inset-0 -m-16 flex items-center justify-center">
          <div className="w-64 h-64 border-2 border-red-500/20 rounded-full animate-spin-slow" />
        </div>

        {/* Middle ring - counter rotating */}
        <div className="absolute inset-0 -m-8 flex items-center justify-center">
          <div className="w-48 h-48 border-2 border-red-500/30 rounded-full animate-spin-reverse" />
        </div>

        {/* Bull Logo - pulsing */}
        <div className="relative w-32 h-32 flex items-center justify-center animate-logo-pulse">
          <img 
            src={bullLogo} 
            alt="Bull Logo" 
            className="w-full h-full object-contain drop-shadow-[0_0_40px_rgba(239,68,68,0.8)]"
          />
        </div>

        {/* Glow effect behind logo */}
        <div className="absolute inset-0 bg-red-600/40 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Loading text */}
      <div className={`absolute bottom-32 text-center transition-all duration-700 ${
        fadeOut ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
      }`}>
        <p className="text-sm font-medium text-red-500 mb-2 tracking-wider uppercase">
          Loading
        </p>
        <div className="flex gap-1 justify-center">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
