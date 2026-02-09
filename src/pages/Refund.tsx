export default function Refund() {
  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-3xl">
        <h1 className="font-display text-3xl font-bold mb-8">Refund Policy</h1>
        <div className="space-y-6 text-muted-foreground leading-relaxed text-sm">
          <p><strong className="text-foreground">Last updated:</strong> February 2026</p>

          <h2 className="text-lg font-display font-semibold text-foreground">Subscription Model</h2>
          <p>Vanguard Signals operates on a daily subscription basis: 1-day free trial, followed by $25/day with automatic daily renewal until cancelled.</p>

          <h2 className="text-lg font-display font-semibold text-foreground">Refund Terms</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong className="text-foreground">Free Trial:</strong> If you cancel during the 1-day free trial, no charges will apply and no refund is necessary.</li>
            <li><strong className="text-foreground">After Trial:</strong> Once a daily billing period has been charged, that charge is non-refundable. Each $25 daily charge covers one day of access to the service.</li>
            <li><strong className="text-foreground">Cancellation:</strong> When you cancel, no further charges will occur. You retain access until the end of your current paid day.</li>
          </ul>

          <h2 className="text-lg font-display font-semibold text-foreground">Exceptions</h2>
          <p>In cases of accidental duplicate charges, billing errors, or technical issues that prevented you from accessing the service, please contact our support team. We will review your case and may issue a refund at our discretion.</p>

          <h2 className="text-lg font-display font-semibold text-foreground">How to Request a Refund</h2>
          <p>If you believe you are eligible for a refund, please contact us at <strong className="text-foreground">support@vanguard-signals.xyz</strong> with:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Your account email address</li>
            <li>The date(s) of the charge(s) in question</li>
            <li>A description of the issue</li>
          </ul>
          <p>We aim to respond to all refund requests within 24–48 hours.</p>

          <h2 className="text-lg font-display font-semibold text-foreground">Contact</h2>
          <p>For any billing questions, reach out to <strong className="text-foreground">support@vanguard-signals.xyz</strong>.</p>
        </div>
      </div>
    </section>
  );
}
