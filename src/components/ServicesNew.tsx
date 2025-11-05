import { Card } from "@/components/ui/card";
import { FileText, TrendingUp, Users, Bell } from "lucide-react";

const ServicesNew = () => {
  const services = [
    {
      icon: FileText,
      title: "Research Reports",
      description:
        "Comprehensive equity research reports with detailed fundamental and technical analysis",
      features: [
        "Company financials deep-dive",
        "Valuation analysis (DCF, PE, PB)",
        "Management quality assessment",
        "Industry and peer comparison",
      ],
    },
    {
      icon: TrendingUp,
      title: "Market Analysis",
      description:
        "Regular market commentary and sectoral insights to help you make informed decisions",
      features: [
        "Daily market wrap-up",
        "Weekly sector analysis",
        "Macroeconomic impact reports",
        "Technical chart patterns",
      ],
    },
    {
      icon: Users,
      title: "Portfolio Advisory",
      description:
        "Personalized portfolio guidance aligned with your risk profile and investment goals",
      features: [
        "Portfolio construction advice",
        "Asset allocation strategy",
        "Risk assessment",
        "Rebalancing recommendations",
      ],
    },
    {
      icon: Bell,
      title: "Investment Ideas",
      description:
        "Curated investment opportunities based on rigorous research and analysis",
      features: [
        "Long-term investment ideas",
        "Value opportunities",
        "Growth stock picks",
        "Entry and exit levels",
      ],
    },
  ];

  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Research Services
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Professional research and advisory services designed for serious investors
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-6 md:p-8 bg-background border-border hover:shadow-medium transition-all text-center md:text-left"
              >
                <div className="mb-6">
                  <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-4 mx-auto md:mx-0">
                    <service.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                </div>

                <div className="space-y-3">
                  <p className="text-sm font-medium text-foreground">Key Features:</p>
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">{feature}</p>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Legal Notice */}
          <div className="mt-12 p-6 bg-muted/50 rounded-lg border border-border">
            <p className="text-sm text-muted-foreground text-center">
              <strong>Important:</strong> All services are provided as per SEBI Research Analyst
              Regulations, 2014. Past performance is not indicative of future returns. Please
              conduct your own due diligence before making any investment decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesNew;
