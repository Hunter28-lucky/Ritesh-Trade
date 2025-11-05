import bullLogo from "@/assets/bull-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img src={bullLogo} alt="Bull Logo" className="w-12 h-12" />
                <span className="text-xl font-bold">Pro Trader</span>
              </div>
              <p className="text-muted-foreground text-sm">
                SEBI Registered Stock Trading Professional delivering expert market analysis and trading strategies.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Disclaimer */}
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                SEBI Registration No: INH000000000. All investments involve risk. Past performance is not indicative of future results. Please consult with a financial advisor before making investment decisions.
              </p>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Professional Stock Trader. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
