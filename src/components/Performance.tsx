import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

const Performance = () => {
  const recommendations = [
    {
      stock: "Reliance Industries",
      sector: "Energy",
      recommendation: "Buy",
      targetPrice: "₹3,200",
      currentPrice: "₹2,850",
      upside: "+12.3%",
      status: "active",
    },
    {
      stock: "HDFC Bank",
      sector: "Banking",
      recommendation: "Accumulate",
      targetPrice: "₹1,850",
      currentPrice: "₹1,720",
      upside: "+7.6%",
      status: "active",
    },
    {
      stock: "Infosys",
      sector: "IT Services",
      recommendation: "Hold",
      targetPrice: "₹1,680",
      currentPrice: "₹1,650",
      upside: "+1.8%",
      status: "active",
    },
    {
      stock: "TCS",
      sector: "IT Services",
      recommendation: "Buy",
      targetPrice: "₹4,500",
      currentPrice: "₹3,980",
      upside: "+13.1%",
      status: "achieved",
    },
  ];

  const getStatusIcon = (recommendation: string) => {
    if (recommendation === "Buy") return <TrendingUp className="w-4 h-4 text-green-600" />;
    if (recommendation === "Sell") return <TrendingDown className="w-4 h-4 text-red-600" />;
    return <Minus className="w-4 h-4 text-amber-600" />;
  };

  return (
    <section id="performance" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Recent Recommendations
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Sample research calls and recommendations (Illustrative purposes only)
            </p>
          </div>

          {/* Performance Metrics */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center border-border">
              <p className="text-4xl font-bold text-foreground mb-2">72%</p>
              <p className="text-sm text-muted-foreground">Success Rate</p>
            </Card>
            <Card className="p-6 text-center border-border">
              <p className="text-4xl font-bold text-foreground mb-2">+18.5%</p>
              <p className="text-sm text-muted-foreground">Avg. Return (Achieved)</p>
            </Card>
            <Card className="p-6 text-center border-border">
              <p className="text-4xl font-bold text-foreground mb-2">45+</p>
              <p className="text-sm text-muted-foreground">Active Recommendations</p>
            </Card>
          </div>

          {/* Recommendations Table */}
          <Card className="overflow-hidden border-border">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-secondary">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                      Stock
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                      Sector
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                      Recommendation
                    </th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-foreground">
                      Current Price
                    </th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-foreground">
                      Target Price
                    </th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-foreground">
                      Potential
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {recommendations.map((rec, index) => (
                    <tr key={index} className="hover:bg-secondary/50 transition-colors">
                      <td className="px-6 py-4">
                        <p className="font-medium text-foreground">{rec.stock}</p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-muted-foreground">{rec.sector}</p>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          {getStatusIcon(rec.recommendation)}
                          <span className="text-sm font-medium">{rec.recommendation}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right text-foreground">
                        {rec.currentPrice}
                      </td>
                      <td className="px-6 py-4 text-right text-foreground">
                        {rec.targetPrice}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <span className="text-green-600 font-medium">{rec.upside}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Disclaimer */}
          <div className="mt-8 p-6 bg-muted/50 rounded-lg border border-border">
            <p className="text-xs text-muted-foreground text-center">
              <strong>Note:</strong> The above recommendations are for illustrative purposes only
              and should not be construed as investment advice. Past performance is not
              indicative of future results. Please consult with the analyst before making any
              investment decisions. All investments are subject to market risks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Performance;
