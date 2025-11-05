import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import bullLogo from "@/assets/bull-logo.png";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-sm"
            : "bg-background/0"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo - Bull Logo */}
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-3 group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-red-600/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative bg-black w-10 h-10 rounded-lg flex items-center justify-center shadow-lg overflow-hidden">
                  <img 
                    src={bullLogo} 
                    alt="Bull Logo" 
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-foreground tracking-tight">Ritesh</span>
                <span className="text-[9px] text-muted-foreground uppercase tracking-widest font-medium">Research Analyst</span>
              </div>
            </button>

            {/* Desktop Navigation - Modern pill style with green accents */}
            <div className="hidden md:flex items-center gap-2">
              <div className={`flex items-center gap-1 p-1.5 rounded-full transition-all duration-300 ${
                scrolled ? 'bg-secondary/50' : 'bg-secondary/30'
              }`}>
                <button
                  onClick={() => scrollToSection("about")}
                  className="px-5 py-2 text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary rounded-full transition-all duration-200"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="px-5 py-2 text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary rounded-full transition-all duration-200"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("performance")}
                  className="px-5 py-2 text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary rounded-full transition-all duration-200"
                >
                  Performance
                </button>
              </div>
              
              <Button
                onClick={() => scrollToSection("contact")}
                className="ml-2 bg-primary hover:bg-primary/90 text-primary-foreground h-11 px-7 text-sm font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Get Started
              </Button>
              
              {/* Theme Toggle - Desktop */}
              <div className="ml-3">
                <ThemeToggle />
              </div>
            </div>

            {/* Right side - Mobile */}
            <div className="flex md:hidden items-center gap-3">
              <ThemeToggle />
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg hover:bg-secondary/50 transition-colors"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-foreground" />
                ) : (
                  <Menu className="w-6 h-6 text-foreground" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Modern slide-in */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          mobileMenuOpen ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-foreground/50 backdrop-blur-sm transition-opacity duration-300 ${
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />
        
        {/* Menu Panel */}
        <div
          className={`absolute top-20 left-4 right-4 bg-background border border-border rounded-2xl shadow-2xl transition-all duration-300 ${
            mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <div className="p-6 space-y-2">
            <button
              onClick={() => scrollToSection("about")}
              className="w-full text-left px-5 py-3.5 text-base font-medium text-foreground hover:bg-primary/10 hover:text-primary rounded-xl transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="w-full text-left px-5 py-3.5 text-base font-medium text-foreground hover:bg-primary/10 hover:text-primary rounded-xl transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("performance")}
              className="w-full text-left px-5 py-3.5 text-base font-medium text-foreground hover:bg-primary/10 hover:text-primary rounded-xl transition-colors"
            >
              Performance
            </button>
            <div className="pt-2">
              <Button
                onClick={() => scrollToSection("contact")}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-base font-medium rounded-xl"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
