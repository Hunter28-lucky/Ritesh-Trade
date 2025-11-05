import { Card } from "@/components/ui/card";
import { CheckCircle, TrendingUp, BarChart3, Target } from "lucide-react";

const About = () => {
  const credentials = [
    "SEBI Registered Research Analyst (INH000000000)",
    "Specialized in Indian Equity Markets",
    "Technical & Fundamental Analysis Expert",
    "Risk Management Specialist",
  ];

  const expertise = [
    {
      icon: TrendingUp,
      title: "Market Analysis",
      description: "In-depth technical and fundamental analysis of stocks and market trends"
    },
    {
      icon: BarChart3,
      title: "Portfolio Strategy",
      description: "Custom portfolio construction aligned with risk appetite and goals"
    },
    {
      icon: Target,
      title: "Risk Management",
      description: "Advanced risk assessment and mitigation strategies for optimal returns"
    },
  ];

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="bg-gradient-bull bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional trader with SEBI certification and a proven track record in the Indian stock market
            </p>
          </div>

          {/* Credentials */}
          <Card className="p-8 mb-12 bg-card border-border shadow-card">
            <h3 className="text-2xl font-bold mb-6">Credentials & Qualifications</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {credentials.map((credential, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground/90">{credential}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Expertise Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {expertise.map((item, index) => (
              <Card 
                key={index} 
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow hover:-translate-y-1"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>

          {/* Professional Statement */}
          <div className="mt-12 text-center max-w-3xl mx-auto">
            <p className="text-lg text-foreground/80 leading-relaxed">
              With years of experience navigating the complexities of the Indian stock market, 
              I provide strategic insights and professional guidance to help investors achieve 
              their financial goals through disciplined trading and informed decision-making.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
