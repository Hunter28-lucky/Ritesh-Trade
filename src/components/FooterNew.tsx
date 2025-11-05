import { Mail, Phone, Linkedin, Shield } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import bullLogo from "@/assets/bull-logo.png";

const FooterNew = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-background border-t-2 border-primary/10">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Brand Section */}
          <ScrollReveal direction="up">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="bg-black w-12 h-12 rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
                  <img 
                    src={bullLogo} 
                    alt="Bull Logo" 
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-xl text-foreground">Ritesh</h3>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">SEBI Research Analyst</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground max-w-2xl mx-auto mb-6">
                Professional stock market research and analysis for sophisticated investors in Indian equity markets
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/20 rounded-full">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-xs font-medium text-primary">SEBI Registration: INH000000000</span>
              </div>
            </div>
          </ScrollReveal>

          {/* 2x2 Grid - Quick Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {/* Quick Links */}
            <ScrollReveal direction="left" delay={100}>
              <div className="bg-secondary/50 border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <h4 className="font-bold text-foreground mb-4 text-lg flex items-center gap-2">
                  <div className="w-1 h-6 bg-primary rounded-full"></div>
                  Quick Links
                </h4>
                <ul className="space-y-3">
                  <li>
                    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-200 inline-block">
                      → Home
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection("about")} className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-200 inline-block">
                      → About
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection("services")} className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-200 inline-block">
                      → Services
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection("contact")} className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-200 inline-block">
                      → Contact
                    </button>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Services */}
            <ScrollReveal direction="right" delay={100}>
              <div className="bg-secondary/50 border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <h4 className="font-bold text-foreground mb-4 text-lg flex items-center gap-2">
                  <div className="w-1 h-6 bg-primary rounded-full"></div>
                  Services
                </h4>
                <ul className="space-y-3">
                  <li className="text-sm text-muted-foreground">→ Research Reports</li>
                  <li className="text-sm text-muted-foreground">→ Portfolio Advisory</li>
                  <li className="text-sm text-muted-foreground">→ Market Analysis</li>
                  <li className="text-sm text-muted-foreground">→ Investment Consulting</li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Legal */}
            <ScrollReveal direction="left" delay={200}>
              <div className="bg-secondary/50 border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <h4 className="font-bold text-foreground mb-4 text-lg flex items-center gap-2">
                  <div className="w-1 h-6 bg-primary rounded-full"></div>
                  Legal
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-200 inline-block">
                      → Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-200 inline-block">
                      → Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-200 inline-block">
                      → Disclaimer
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-200 inline-block">
                      → SEBI Compliance
                    </a>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Connect */}
            <ScrollReveal direction="right" delay={200}>
              <div className="bg-secondary/50 border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <h4 className="font-bold text-foreground mb-4 text-lg flex items-center gap-2">
                  <div className="w-1 h-6 bg-primary rounded-full"></div>
                  Connect
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a href="mailto:contact@example.com" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      contact@example.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+919876543210" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      +91 98765 43210
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                      <Linkedin className="w-4 h-4" />
                      LinkedIn Profile
                    </a>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>

          {/* Disclaimer */}
          <ScrollReveal direction="up" delay={300}>
            <div className="border-t border-border pt-8 mb-8">
              <div className="bg-secondary/30 border border-primary/10 p-6 md:p-8 rounded-2xl">
                <div className="flex items-start gap-3 mb-4">
                  <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <h5 className="font-bold text-sm text-foreground">Important Disclaimer</h5>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Investment in securities market are subject to market risks. Read all the related
                  documents carefully before investing. Registration granted by SEBI and certification
                  from NISM in no way guarantee performance of the intermediary or provide any
                  assurance of returns to investors. The securities quoted are for illustration only
                  and are not recommendatory. Stock market investments are subject to market risks.
                  Please read all scheme related documents carefully before investing. Past performance
                  is not indicative of future returns. Please consider your specific investment
                  requirements, risk tolerance, goal, time frame, risk and reward balance and the cost
                  associated with the investment before choosing a fund, or designing a portfolio that
                  suits your needs. Performance related information provided herein is not verified by
                  SEBI.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Bottom Bar with Green Accent */}
          <div className="border-t-2 border-primary/20 pt-6 text-center">
            <p className="text-sm text-muted-foreground mb-2">
              © {new Date().getFullYear()} Ritesh - SEBI Registered Research Analyst. All rights reserved.
            </p>
            <div className="w-16 h-1 bg-primary rounded-full mx-auto"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterNew;
