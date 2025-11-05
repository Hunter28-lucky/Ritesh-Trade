import { Card } from "@/components/ui/card";
import { Shield, Award, TrendingUp, BarChart3, Users, Target, LineChart, CheckCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const AboutNew = () => {
  const credentials = [
    {
      icon: Shield,
      title: "SEBI Registered",
      description: "Research Analyst (INH000000000)",
      color: "text-accent"
    },
    {
      icon: Award,
      title: "Professional Certification",
      description: "NISM Certified Research Analyst",
      color: "text-primary"
    },
    {
      icon: TrendingUp,
      title: "Market Expertise",
      description: "12+ Years in Indian Equity Markets",
      color: "text-accent"
    },
    {
      icon: BarChart3,
      title: "Research Focus",
      description: "Fundamental & Technical Analysis",
      color: "text-primary"
    },
  ];

  const achievements = [
    {
      icon: Users,
      number: "500+",
      label: "Satisfied Clients"
    },
    {
      icon: Target,
      number: "78%",
      label: "Success Rate"
    },
    {
      icon: LineChart,
      number: "₹500Cr+",
      label: "AUM Managed"
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Minimal background pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="h-full w-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header - minimal */}
          <ScrollReveal direction="up">
            <div className="text-center mb-12 md:mb-20">
              <p className="text-xs md:text-sm uppercase tracking-wider text-muted-foreground mb-3 md:mb-4">About</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground px-4">
                Meet Your Research Analyst
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                Professional research-driven approach combining years of market experience with institutional-grade analysis
              </p>
            </div>
          </ScrollReveal>

          {/* Main Profile Section - Clean minimal grid */}
          <div className="grid md:grid-cols-5 gap-8 md:gap-16 mb-12 md:mb-20 items-center">
            {/* Profile Image Column */}
            <div className="md:col-span-2">
              <Card className="card-3d overflow-hidden border">
                {/* Ritesh's Professional Photo - Full Cover */}
                <div className="aspect-[3/4] relative overflow-hidden">
                  <img 
                    src="https://scontent.cdninstagram.com/v/t51.82787-15/566034316_18403017073190302_2725364578352719460_n.jpg?stp=dst-jpegr_e35_tt6&_nc_cat=101&ig_cache_key=Mzc0NTk3MzA1Mzg0NDI2ODk0OQ%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5oZHIuQzMifQ%3D%3D&_nc_ohc=lE_DqBVJ6MsQ7kNvwH1Adve&_nc_oc=AdmcrPvtP5cKC4S47PUBiRsMArpLICUyFKXLJYQz3L2DMYe3Ykcz3WbMDZlqb33tLRllVZp-DPYBi_-8Nxz7gGuX&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=MnhNrG8nLOmPYpwyVvYYXw&oh=00_AfjbvI9gOqmS5Cf60ERANQ9QZItNaIRPQMDUcSFCzVMWOQ&oe=6910F3BC"
                    alt="Ritesh - SEBI Registered Research Analyst"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>

              {/* Quick Stats under photo - minimal */}
              <div className="grid grid-cols-3 gap-3 mt-4">
                {achievements.map((item, index) => (
                  <Card key={index} className="p-4 text-center border">
                    <item.icon className="w-4 h-4 mx-auto mb-2 text-foreground" />
                    <p className="text-xl font-bold text-foreground">{item.number}</p>
                    <p className="text-xs text-muted-foreground mt-1">{item.label}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Profile Content Column */}
            <div className="md:col-span-3 space-y-6 md:space-y-8 text-center md:text-left">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-2 md:mb-3 text-foreground">Ritesh</h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">SEBI Registered Research Analyst</p>
                <div className="space-y-3 md:space-y-4 text-sm md:text-base leading-relaxed text-muted-foreground">
                  <p>
                    With over 12 years of experience in the Indian equity markets, I specialize in providing research-driven investment insights that combine rigorous fundamental analysis with technical market indicators.
                  </p>
                  <p>
                    My approach emphasizes capital preservation, disciplined risk management, and long-term wealth creation through carefully researched investment opportunities in quality businesses. As a SEBI-registered Research Analyst, I adhere to the highest standards of professional conduct and regulatory compliance.
                  </p>
                </div>
              </div>

              {/* Education/Qualifications - minimal badges */}
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <span className="px-3 py-1.5 border text-foreground text-xs font-medium rounded-full">
                  SEBI Registered
                </span>
                <span className="px-3 py-1.5 border text-foreground text-xs font-medium rounded-full">
                  NISM Certified
                </span>
                <span className="px-3 py-1.5 border text-foreground text-xs font-medium rounded-full">
                  12+ Years Experience
                </span>
              </div>
            </div>
          </div>

          {/* Credentials Grid - Minimal cards */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-20">
            {credentials.map((item, index) => (
              <ScrollReveal key={index} direction="scale" delay={index * 100}>
                <Card
                  className="card-3d p-4 md:p-6 text-center hover:shadow-medium transition-all border bg-background"
                >
                <div className="mb-3 md:mb-4 flex justify-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-muted/50 rounded-lg flex items-center justify-center">
                    <item.icon className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
                  </div>
                </div>
                <h3 className="font-semibold text-foreground mb-1 md:mb-2 text-xs md:text-sm">{item.title}</h3>
                <p className="text-[10px] md:text-xs text-muted-foreground leading-snug">{item.description}</p>
              </Card>
              </ScrollReveal>
            ))}
          </div>

          {/* Investment Philosophy - Clean minimal */}
          <Card className="card-3d p-8 md:p-12 border relative overflow-hidden">
            <div className="max-w-4xl mx-auto">
              <div className="mb-10">
                <p className="text-sm uppercase tracking-wider text-muted-foreground mb-3">Philosophy</p>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                  Investment Approach
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h4 className="text-lg font-semibold text-foreground">
                    Our Approach
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    We believe in disciplined, research-driven investing that prioritizes capital preservation and consistent long-term returns over short-term speculation.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm text-muted-foreground">
                      <div className="w-1 h-1 bg-foreground rounded-full mt-2 flex-shrink-0" />
                      <span>Deep fundamental analysis of business quality</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-muted-foreground">
                      <div className="w-1 h-1 bg-foreground rounded-full mt-2 flex-shrink-0" />
                      <span>Technical indicators for optimal entry/exit timing</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-muted-foreground">
                      <div className="w-1 h-1 bg-foreground rounded-full mt-2 flex-shrink-0" />
                      <span>Risk-adjusted position sizing and portfolio construction</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-6">
                  <h4 className="text-lg font-semibold text-foreground">
                    Core Principles
                  </h4>
                  <div className="space-y-4">
                    <div className="pb-4 border-b">
                      <p className="font-medium text-foreground mb-2">Integrity First</p>
                      <p className="text-sm text-muted-foreground">Full SEBI compliance with transparent, unbiased research</p>
                    </div>
                    <div className="pb-4 border-b">
                      <p className="font-medium text-foreground mb-2">Client-Centric</p>
                      <p className="text-sm text-muted-foreground">Personalized strategies aligned with your goals and risk appetite</p>
                    </div>
                    <div className="pb-4">
                      <p className="font-medium text-foreground mb-2">Continuous Learning</p>
                      <p className="text-sm text-muted-foreground">Staying ahead of market trends and regulatory changes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Disclaimer - minimal */}
          <div className="mt-12 p-6 border rounded-lg">
            <p className="text-xs text-muted-foreground text-center leading-relaxed">
              <strong className="text-foreground">Disclaimer:</strong> All research and analysis provided is for educational
              purposes only. Investment in securities market are subject to market risks. Please
              read all the related documents carefully before investing. Registration granted by
              SEBI does not imply that SEBI has verified the accuracy or adequacy of the content
              or that it has been approved by SEBI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutNew;
