export default function Cancellation() {
  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-3xl">
        <h1 className="font-display text-3xl font-bold mb-8">Cancellation Policy</h1>
        <div className="space-y-6 text-muted-foreground leading-relaxed text-sm">
          <p><strong className="text-foreground">Last updated:</strong> February 2026</p>

          <h2 className="text-lg font-display font-semibold text-foreground">Subscription Overview</h2>
          <p>Vanguard Signals operates on a daily subscription model:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong className="text-foreground">1-Day Free Trial:</strong> Your first day is free with full access to all features.</li>
            <li><strong className="text-foreground">After Trial:</strong> $25 per day, billed automatically every day.</li>
            <li><strong className="text-foreground">Renewal:</strong> Your subscription renews automatically each day until you cancel.</li>
          </ul>

          <h2 className="text-lg font-display font-semibold text-foreground">How to Cancel</h2>
          <p>You can cancel your subscription at any time using any of the following methods:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong className="text-foreground">Subscriber Dashboard:</strong> Log in to your account and navigate to your subscription settings to cancel.</li>
            <li><strong className="text-foreground">Email Support:</strong> Send a cancellation request to <strong className="text-foreground">support@vanguard-signals.space</strong>. Include your account email address.</li>
          </ul>

          <h2 className="text-lg font-display font-semibold text-foreground">What Happens After Cancellation</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Your cancellation takes effect immediately.</li>
            <li>No further daily charges will be made after cancellation.</li>
            <li>You will retain access to the service until the end of your current paid period.</li>
            <li>Already-billed periods are not refundable (see our Refund Policy).</li>
          </ul>

          <h2 className="text-lg font-display font-semibold text-foreground">During the Free Trial</h2>
          <p>If you cancel during your 1-day free trial, you will not be charged at all. Your access will end when the trial period expires.</p>

          <h2 className="text-lg font-display font-semibold text-foreground">Contact</h2>
          <p>For any questions about cancellation, contact us at <strong className="text-foreground">support@vanguard-signals.space</strong>. We typically respond within 24–48 hours.</p>
        </div>
      </div>
    </section>
  );
}
