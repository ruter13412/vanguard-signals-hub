import { useState } from "react";
import { Mail, Clock } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-2xl">
        <h1 className="font-display text-3xl sm:text-4xl font-bold mb-4">Contact & Support</h1>
        <p className="text-muted-foreground mb-8">
          Have questions or need help? Reach out to us and we'll respond within 24–48 hours.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          <div className="bg-card border border-border rounded-xl p-5 flex items-start gap-3">
            <Mail className="text-primary shrink-0 mt-0.5" size={20} />
            <div>
              <h3 className="font-semibold text-sm mb-1">Email</h3>
              <p className="text-sm text-muted-foreground">support@vanguard-signals.club</p>
            </div>
          </div>
          <div className="bg-card border border-border rounded-xl p-5 flex items-start gap-3">
            <Clock className="text-primary shrink-0 mt-0.5" size={20} />
            <div>
              <h3 className="font-semibold text-sm mb-1">Response Time</h3>
              <p className="text-sm text-muted-foreground">24–48 hours, Mon–Fri</p>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-6 mb-8">
          <p className="text-sm text-muted-foreground mb-4">
            <strong>Need to cancel?</strong> You can cancel your subscription at any time through your subscriber dashboard or by contacting our support team via email. Cancellation takes effect immediately and stops all future charges.
          </p>
        </div>

        {submitted ? (
          <div className="bg-card border border-gold rounded-xl p-8 text-center">
            <h3 className="font-display font-semibold text-lg mb-2">Message Sent</h3>
            <p className="text-sm text-muted-foreground">Thank you. We'll get back to you within 24–48 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1.5">Name</label>
              <input required type="text" className="w-full bg-muted border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Email</label>
              <input required type="email" className="w-full bg-muted border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Message</label>
              <textarea required rows={5} className="w-full bg-muted border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none" placeholder="How can we help?" />
            </div>
            <button type="submit" className="bg-gradient-gold text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-semibold transition-transform hover:scale-105">
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
