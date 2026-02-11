import { Radio, TrendingUp, Clock, Lock, Zap, Users, BarChart3, Shield, CheckCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import CtaButton from "@/components/CtaButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CHECKOUT_URL = "https://vanguardsignals.xyz/checkout";

const benefits = [
  { icon: Radio, title: "Daily Livestream", desc: "Live market analysis broadcast every trading day." },
  { icon: TrendingUp, title: "Actionable Insights", desc: "Clear trading strategies and market opportunities." },
  { icon: Clock, title: "Real-Time Updates", desc: "Continuous market monitoring as events unfold." },
  { icon: Lock, title: "Subscriber-Only Tools", desc: "Exclusive content and analysis tools for members." },
];

const steps = [
  { num: "01", title: "Start Your Free Trial", desc: "Sign up and get full access for 1 day at no cost." },
  { num: "02", title: "Access Daily Content", desc: "Watch live streams, get insights and strategies." },
  { num: "03", title: "After Trial: $25/day", desc: "Automatic daily renewal. No long-term commitment." },
  { num: "04", title: "Cancel Anytime", desc: "Stop your subscription whenever you want. No hassle." },
];

const dailyBenefits = [
  "Live market analysis broadcasts",
  "Crypto and stock trading insights",
  "Actionable strategy breakdowns",
  "Real-time market alerts",
  "Exclusive subscriber tools and resources",
  "Community access and Q&A sessions",
];

const audiences = [
  { icon: BarChart3, title: "Active Traders", desc: "Looking for daily market analysis to inform decisions." },
  { icon: Users, title: "Crypto Enthusiasts", desc: "Wanting professional coverage of crypto markets." },
  { icon: Zap, title: "Stock Market Followers", desc: "Seeking real-time commentary on equity markets." },
  { icon: Shield, title: "Informed Investors", desc: "Who value education and data-driven insights." },
];

const faqs = [
  { q: "Is the first day really free?", a: "Yes. You get 1 full day of access at no charge. After the trial period ends, daily billing begins automatically." },
  { q: "How much does it cost after the trial?", a: "$25 per day. Your subscription renews daily and you are charged $25 each day until you cancel." },
  { q: "How does renewal work?", a: "After your 1-day free trial, your subscription automatically renews every day. You will be charged $25/day until you cancel." },
  { q: "When will I be charged?", a: "Your first charge of $25 occurs after the 1-day trial ends. After that, you are charged $25 every day automatically." },
  { q: "Can I cancel anytime?", a: "Yes. You can cancel your subscription at any time through your subscriber dashboard or by contacting our support team. Cancellation stops all future charges." },
  { q: "Is there a refund policy?", a: "Already-billed periods are not refundable. When you cancel, you retain access until the end of your current paid day. No further charges will apply." },
  { q: "Is this financial advice?", a: "No. Vanguard Signals provides educational and informational content only. We do not provide financial, investment, or trading advice. All trading involves risk." },
  { q: "What do I get with the subscription?", a: "Daily live market analysis broadcasts, actionable insights, trading strategies, real-time updates, and exclusive subscriber-only tools and resources." },
  { q: "What markets do you cover?", a: "We cover cryptocurrency and stock markets with real-time analysis and commentary." },
];

export default function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>
        <div className="relative container mx-auto px-4 pt-20 pb-24 sm:pt-28 sm:pb-32 lg:pt-36 lg:pb-40 text-center">
          <div className="flex justify-center gap-3 mb-6 flex-wrap">
            {["Daily Live Broadcasts", "Instant Access", "Easy Cancellation"].map((b) => (
              <span key={b} className="text-xs font-medium px-3 py-1 rounded-full border border-gold bg-muted/60 text-primary">
                {b}
              </span>
            ))}
          </div>
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mx-auto">
            Real-Time Market Analysis for Crypto & Stocks —{" "}
            <span className="text-gradient-gold">Live, Every Day</span>
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Join our daily livestreams for actionable insights, trading strategies, and real-time market updates.
          </p>
          <div className="mt-10">
            <CtaButton label="Start Free Trial (1st Day Free)" />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container mx-auto">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-center mb-12">What You Get</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="bg-card border border-border rounded-xl p-6 hover:border-gold transition-colors glow-gold">
                <b.icon className="text-primary mb-4" size={28} />
                <h3 className="font-display font-semibold text-lg mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-card/50">
        <div className="container mx-auto">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.num} className="text-center">
                <span className="inline-block text-3xl font-display font-bold text-primary mb-3">{s.num}</span>
                <h3 className="font-display font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <CtaButton label="Get Started — 1st Day Free" />
          </div>
        </div>
      </section>

      {/* Daily Benefits */}
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-center mb-10">What You Receive Daily</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {dailyBenefits.map((b) => (
              <div key={b} className="flex items-start gap-3 bg-card border border-border rounded-lg p-4">
                <CheckCircle className="text-primary shrink-0 mt-0.5" size={18} />
                <span className="text-sm text-foreground">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="section-padding bg-card/50">
        <div className="container mx-auto">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-center mb-12">Who Is This For?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {audiences.map((a) => (
              <div key={a.title} className="text-center p-6">
                <a.icon className="text-primary mx-auto mb-4" size={32} />
                <h3 className="font-display font-semibold mb-2">{a.title}</h3>
                <p className="text-sm text-muted-foreground">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding" id="pricing">
        <div className="container mx-auto max-w-lg">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-center mb-10">Daily Subscription</h2>
          <div className="bg-card border-2 border-gold rounded-2xl p-8 text-center glow-gold">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">1-Day Free Trial</span>
            <div className="mt-4 mb-2">
              <span className="text-5xl font-display font-bold text-foreground">$25</span>
              <span className="text-muted-foreground text-lg">/day</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6">after your 1-day free trial</p>
            <ul className="text-left space-y-3 mb-8">
              {["1st day completely free", "Daily live market analysis", "Actionable insights & strategies", "Real-time market updates", "Exclusive subscriber tools", "Cancel anytime — no commitment"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm">
                  <CheckCircle className="text-primary shrink-0" size={16} />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href={CHECKOUT_URL}
              className="block w-full bg-gradient-gold text-primary-foreground py-3.5 rounded-lg font-bold text-base transition-transform hover:scale-105"
            >
              Go to Checkout
            </a>
            <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
              Automatic daily renewal after trial. You will be charged $25 per day until you cancel. Cancel anytime.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-card/50">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-lg px-5 bg-card">
                <AccordionTrigger className="text-sm font-medium text-foreground hover:text-primary">{f.q}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-8">Join Vanguard Signals today and access real-time market analysis.</p>
          <CtaButton label="Start Your Free Trial" />
        </div>
      </section>
    </>
  );
}
