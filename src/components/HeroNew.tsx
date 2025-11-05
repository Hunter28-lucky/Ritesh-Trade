import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Play, Shield, CheckCircle } from "lucide-react";
import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const HeroNew = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-background">
      {/* Subtle background pattern - minimal */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="h-full w-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-32 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main content grid */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left column - Text content */}
            <ScrollReveal direction="left">
              <div className="space-y-6 md:space-y-8 text-center md:text-left">
              {/* SEBI Badge - green accent */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-primary/20 bg-primary/5 rounded-full mx-auto md:mx-0">
                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                <span className="text-xs font-medium text-primary tracking-wide uppercase">SEBI Registered Research Analyst</span>
              </div>

              {/* Main Heading - clean and bold */}
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 md:mb-6 leading-[1.15] text-foreground">
                  Professional Stock Market Research
                </h1>
                <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                  Institutional-grade equity analysis combining rigorous fundamentals with technical precision for sophisticated investors in Indian markets
                </p>
              </div>

              {/* Trust Badges - green accents */}
              <div className="flex flex-wrap gap-2 md:gap-3 justify-center md:justify-start">
                <div className="flex items-center gap-1.5 text-xs md:text-sm text-foreground">
                  <div className="w-1 h-1 bg-primary rounded-full" />
                  <span>SEBI Certified</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs md:text-sm text-foreground">
                  <div className="w-1 h-1 bg-primary rounded-full" />
                  <span>NISM Qualified</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs md:text-sm text-foreground">
                  <div className="w-1 h-1 bg-primary rounded-full" />
                  <span>12+ Years Experience</span>
                </div>
              </div>

              {/* CTA Buttons - green primary */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center md:justify-start gap-3 pt-2 md:pt-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6 md:px-8 h-11 md:h-12 w-full sm:w-auto text-sm md:text-base shadow-lg shadow-primary/20"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Get Free Portfolio Review
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-border hover:bg-primary/5 hover:border-primary/30 px-6 md:px-8 h-11 md:h-12 w-full sm:w-auto text-sm md:text-base"
                  onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Learn More
                </Button>
              </div>
            </div>
            </ScrollReveal>

            {/* Right column - Full Banner Video with YouTube Thumbnail */}
            <ScrollReveal direction="right" delay={200}>
              <div className="relative mt-8 md:mt-0">
              {!showVideo ? (
                <Card className="card-3d border overflow-hidden relative group cursor-pointer"
                      onClick={() => setShowVideo(true)}>
                  {/* YouTube Thumbnail as Full Cover */}
                  <div className="aspect-[4/5] relative overflow-hidden">
                    <img 
                      src="https://img.youtube.com/vi/z5ohSutq9Vc/maxresdefault.jpg"
                      alt="Ritesh - Introduction Video"
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Dark overlay for better text/button visibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" />

                    {/* Content overlay at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white z-10">
                      <h3 className="text-xl md:text-2xl font-bold mb-2">Meet Ritesh</h3>
                      <p className="text-white/90 text-xs md:text-sm">
                        SEBI Registered Research Analyst
                      </p>
                    </div>

                    {/* Play button overlay - center - Black in both modes */}
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/95 dark:bg-white/95 flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                        <Play className="w-8 h-8 md:w-10 md:h-10 text-black ml-1" fill="currentColor" />
                      </div>
                    </div>

                    {/* Watch tag */}
                    <div className="absolute top-3 right-3 md:top-4 md:right-4 text-[10px] md:text-xs text-white bg-foreground/80 px-2 py-1 md:px-3 rounded-full z-10">
                      Watch Introduction
                    </div>
                  </div>
                </Card>
              ) : (
                <Card className="border overflow-hidden">
                  <div className="aspect-[4/5]">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/z5ohSutq9Vc?autoplay=1"
                      title="Ritesh Introduction Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </Card>
              )}

              {/* Floating stat cards - clean minimal - hidden on mobile */}
              <div className="absolute -bottom-3 -left-3 md:-bottom-4 md:-left-4 hidden xl:block">
                <Card className="card-3d border bg-background p-3 md:p-4 shadow-medium">
                  <p className="text-xs text-muted-foreground mb-1">Client Retention</p>
                  <p className="text-xl md:text-2xl font-bold text-foreground">98.2%</p>
                </Card>
              </div>
              
              <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 hidden xl:block">
                <Card className="card-3d border bg-background p-3 md:p-4 shadow-medium">
                  <p className="text-xs text-muted-foreground mb-1">AUM Advised</p>
                  <p className="text-xl md:text-2xl font-bold text-foreground">₹500Cr+</p>
                </Card>
              </div>
            </div>
            </ScrollReveal>
          </div>

          {/* Stats Bar - Clean minimal - mobile optimized */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mt-12 md:mt-20 pt-8 md:pt-12 border-t">
            <div className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-1 md:mb-2">₹500Cr+</p>
              <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">AUM Advised</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-1 md:mb-2">5,000+</p>
              <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">Research Reports</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-1 md:mb-2">98.2%</p>
              <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">Client Retention</p>
            </div>
          </div>

          {/* Registration Number */}
          <div className="mt-8 md:mt-12 text-center px-4">
            <p className="text-[10px] md:text-xs text-muted-foreground">
              SEBI Registration No: INH000000000 | Valid till: DD/MM/YYYY
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator - minimal */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-5 h-8 border border-border rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-foreground/30 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroNew;
