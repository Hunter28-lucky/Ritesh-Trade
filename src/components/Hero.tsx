import { Button } from "@/components/ui/button";
import { TrendingUp, Shield, Award } from "lucide-react";
import bullLogo from "@/assets/bull-logo.png";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
          {/* Logo */}
          <div className="w-32 h-32 mb-4 animate-scale-in">
            <img 
              src={bullLogo} 
              alt="Bull Trading Logo" 
              className="w-full h-full object-contain drop-shadow-glow"
            />
          </div>

          {/* Main Heading */}
          <div className="space-y-4 max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight">
              <span className="bg-gradient-bull bg-clip-text text-transparent">
                Professional Stock Trading
              </span>
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-muted-foreground">
              SEBI Registered Research Analyst
            </p>
          </div>

          {/* Value Props */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 pt-6">
            <div className="flex items-center gap-2 text-foreground/90">
              <Shield className="w-5 h-5 text-primary" />
              <span className="font-medium">SEBI Certified</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/90">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span className="font-medium">Proven Track Record</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/90">
              <Award className="w-5 h-5 text-primary" />
              <span className="font-medium">Expert Analysis</span>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-8 flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 shadow-glow hover:shadow-glow hover:scale-105 transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 border-2 hover:bg-secondary/50"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 md:gap-16 pt-16 max-w-3xl w-full">
            <div className="space-y-1">
              <p className="text-3xl md:text-4xl font-bold text-primary">5+</p>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl md:text-4xl font-bold text-primary">1000+</p>
              <p className="text-sm text-muted-foreground">Successful Trades</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl md:text-4xl font-bold text-primary">85%</p>
              <p className="text-sm text-muted-foreground">Success Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
