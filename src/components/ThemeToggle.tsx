import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-8 rounded-full bg-secondary border-2 border-border transition-all duration-300 hover:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
      aria-label="Toggle theme"
    >
      {/* Track */}
      <div className={`absolute inset-1 rounded-full transition-colors duration-300 ${
        theme === 'dark' ? 'bg-slate-700' : 'bg-primary/10'
      }`} />
      
      {/* Sliding circle */}
      <div className={`absolute top-1 transition-all duration-300 ease-in-out ${
        theme === 'dark' ? 'left-[26px]' : 'left-1'
      }`}>
        <div className="w-6 h-6 rounded-full bg-background border-2 border-border flex items-center justify-center shadow-lg">
          {theme === 'dark' ? (
            <Moon className="w-4 h-4 text-primary" strokeWidth={2.5} />
          ) : (
            <Sun className="w-4 h-4 text-primary" strokeWidth={2.5} />
          )}
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;
