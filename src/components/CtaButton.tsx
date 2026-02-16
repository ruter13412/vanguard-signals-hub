const CHECKOUT_URL = "https://vanguard-signals.club/checkout";

interface CtaButtonProps {
  label?: string;
  showMicrotext?: boolean;
  className?: string;
}

export default function CtaButton({ label = "Start Free Trial", showMicrotext = true, className = "" }: CtaButtonProps) {
  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <a
        href={CHECKOUT_URL}
        rel="noopener noreferrer"
        className="inline-block bg-gradient-gold text-primary-foreground px-8 py-3.5 rounded-lg text-base font-bold transition-colors hover:opacity-90"
      >
        {label}
      </a>
      {showMicrotext && (
        <p className="text-xs text-muted-foreground text-center max-w-xs leading-relaxed">
          1st day free. Then $25/day. Daily subscription with automatic renewal. Cancel anytime.
        </p>
      )}
    </div>
  );
}
