import CtaButton from "@/components/CtaButton";
import { Shield } from "lucide-react";

export default function About() {
  return (
    <>
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl">
          <h1 className="font-display text-3xl sm:text-4xl font-bold mb-6">About Vanguard Signals</h1>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Vanguard Signals is a premium real-time financial market analysis service specializing in cryptocurrencies and stocks. Through daily live broadcasts (livestreams), we deliver continuous market monitoring, actionable insights, and trading strategies to our subscribers.
            </p>
            <p>
              Every day, our team covers the most relevant market movements, breaking news, and emerging opportunities across crypto and equity markets. Subscribers gain access to exclusive content, analysis tools, and a community of informed traders.
            </p>
            <p>
              Our mission is to empower traders and investors with timely, data-driven information so they can make more informed decisions. We believe in transparency, clarity, and providing real value every single day.
            </p>
          </div>

          <div className="mt-10 bg-card border border-border rounded-xl p-6 flex items-start gap-4">
            <Shield className="text-primary shrink-0 mt-1" size={24} />
            <div>
              <h3 className="font-display font-semibold mb-2">Important Notice</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Vanguard Signals provides educational and informational content only. Nothing on this website or in our broadcasts constitutes financial, investment, or trading advice. Trading cryptocurrencies and stocks involves substantial risk of loss. Past performance is not indicative of future results. Always do your own research and consider your financial situation before making any trading decisions.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <CtaButton />
          </div>
        </div>
      </section>
    </>
  );
}
