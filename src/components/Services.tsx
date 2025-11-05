import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, BookOpen, Users, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: LineChart,
      title: "Market Research & Analysis",
      description: "Comprehensive research reports with actionable insights on stock movements and market trends",
      features: [
        "Daily market analysis",
        "Technical chart patterns",
        "Fundamental valuations",
        "Sector-wise breakdowns"
      ]
    },
    {
      icon: BookOpen,
      title: "Trading Education",
      description: "Learn professional trading strategies and techniques used by successful traders",
      features: [
        "Technical analysis training",
        "Risk management basics",
        "Trading psychology",
        "Portfolio management"
      ]
    },
    {
      icon: Users,
      title: "One-on-One Consultation",
      description: "Personalized guidance tailored to your investment goals and risk profile",
      features: [
        "Portfolio review",
        "Strategy development",
        "Risk assessment",
        "Performance tracking"
      ]
    },
    {
      icon: Zap,
      title: "Real-Time Alerts",
      description: "Stay ahead with timely market alerts and trading opportunities",
      features: [
        "Entry/exit signals",
        "Breaking news updates",
        "Price action alerts",
        "Market sentiment analysis"
      ]
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Professional <span className="bg-gradient-bull bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive trading solutions designed to elevate your investment journey
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-bull rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-glow">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-foreground/80">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="outline" 
                  className="w-full border-primary/50 hover:bg-primary hover:text-primary-foreground"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn More
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
