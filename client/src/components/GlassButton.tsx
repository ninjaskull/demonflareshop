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
      <div className="relative overflow-visible rounded-2xl border border-white/10 bg-white/[0.08] px-6 py-4 shadow-lg transition-all duration-300 hover-elevate active-elevate-2"
        style={{
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        }}
      >
        <div className="flex items-center gap-4">
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center text-xl">
            {icon}
          </div>
          <span className="text-sm font-medium text-white/95">
            {children}
          </span>
        </div>
      </div>
    </a>
  );
}
