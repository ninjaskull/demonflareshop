interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

export default function SocialIcon({ href, icon, label }: SocialIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      data-testid={`social-${label.toLowerCase()}`}
      className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.08] transition-all duration-300 hover:-translate-y-1 hover-elevate active-elevate-2"
      style={{
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
      }}
    >
      <div className="text-white/70 transition-all duration-300 group-hover:text-white">
        {icon}
      </div>
    </a>
  );
}
