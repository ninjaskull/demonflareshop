interface GlassButtonProps {
  href: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}

export default function GlassButton({ href, children, icon }: GlassButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-testid={`link-${children?.toString().toLowerCase().replace(/\s+/g, '-')}`}
      className="group relative block w-full"
    >
      <div 
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"
      />
      <div className="relative overflow-visible rounded-2xl border border-white/15 bg-white/[0.08] px-6 py-4 shadow-xl transition-all duration-300 hover-elevate active-elevate-2"
        style={{
          backdropFilter: 'blur(24px) saturate(180%)',
          WebkitBackdropFilter: 'blur(24px) saturate(180%)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        }}
      >
        <div className="flex items-center gap-4">
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center text-xl transition-transform duration-300 group-hover:scale-110">
            {icon}
          </div>
          <span className="text-sm font-semibold text-white/95 transition-colors duration-300 group-hover:text-white">
            {children}
          </span>
        </div>
      </div>
    </a>
  );
}
