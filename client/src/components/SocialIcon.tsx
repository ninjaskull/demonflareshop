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
      className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.08] transition-all duration-300 hover:-translate-y-1 hover-elevate active-elevate-2"
      style={{
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      }}
    >
      <div 
        className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/0 to-primary/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div className="relative text-white/70 transition-all duration-300 group-hover:scale-110 group-hover:text-white">
        {icon}
      </div>
    </a>
  );
}
