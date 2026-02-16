import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const CHECKOUT_URL = "https://vanguard-signals.space/checkout";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const legalLinks = [
  { to: "/terms", label: "Terms of Service" },
  { to: "/privacy", label: "Privacy Policy" },
  { to: "/cancellation", label: "Cancellation Policy" },
  { to: "/refund", label: "Refund Policy" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <Link to="/" className="font-display text-xl font-bold tracking-tight text-foreground">
            Vanguard<span className="text-primary">Signals</span>
          </Link>

          {/* Desktop */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`text-sm font-medium transition-colors hover:text-primary ${pathname === l.to ? "text-primary" : "text-muted-foreground"}`}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={CHECKOUT_URL}
              rel="noopener noreferrer"
              className="bg-gradient-gold text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold transition-colors hover:opacity-90"
            >
              Subscribe
            </a>
          </nav>

          {/* Mobile toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-foreground">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border bg-background px-4 pb-4">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-sm font-medium text-muted-foreground hover:text-primary"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={CHECKOUT_URL}
              rel="noopener noreferrer"
              className="mt-2 block text-center bg-gradient-gold text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold"
            >
              Subscribe
            </a>
          </div>
        )}
      </header>

      {/* Main */}
      <main className="flex-1">{children}</main>

      {/* Risk Banner */}
      <div className="border-t border-border bg-muted/50">
        <div className="container mx-auto px-4 py-4 text-center">
          <p className="text-xs text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            <strong>Risk Disclaimer:</strong> Trading cryptocurrencies and stocks involves substantial risk of loss and is not suitable for every investor. The content provided by Vanguard Signals is for educational and informational purposes only and does not constitute financial advice. Past performance is not indicative of future results. You could lose some or all of your investment. Only trade with money you can afford to lose.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="font-display font-bold text-lg mb-3">
                Vanguard<span className="text-primary">Signals</span>
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Real-time market analysis for crypto and stocks. Live, every day.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-3 text-foreground">Pages</h4>
              <ul className="space-y-2">
                {navLinks.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-3 text-foreground">Legal</h4>
              <ul className="space-y-2">
                {legalLinks.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-3 text-foreground">Contact</h4>
              <p className="text-sm text-muted-foreground">support@vanguard-signals.space</p>
              <p className="text-sm text-muted-foreground mt-1">Response within 24–48 hours</p>
              <Link to="/contact" className="text-sm text-primary hover:underline mt-2 inline-block">
                Contact Form →
              </Link>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-border space-y-2">
            <p className="text-xs text-muted-foreground text-center leading-relaxed">
              © {new Date().getFullYear()} Vanguard Signals. All rights reserved. Educational and informational content only — not financial advice.
            </p>
            <p className="text-xs text-muted-foreground text-center leading-relaxed">
              Subscription: 1-day free trial, then $25/day with automatic daily renewal. Cancel anytime. See our{" "}
              <Link to="/terms" className="underline hover:text-primary">Terms</Link>,{" "}
              <Link to="/privacy" className="underline hover:text-primary">Privacy Policy</Link>, and{" "}
              <Link to="/refund" className="underline hover:text-primary">Refund Policy</Link>.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
