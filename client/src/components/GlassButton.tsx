import { ArrowRight } from "lucide-react";

interface GlassButtonProps {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
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
      <div className="relative overflow-visible rounded-2xl border border-white/15 bg-white/10 px-8 py-5 shadow-lg transition-all duration-300 hover-elevate active-elevate-2"
        style={{
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        }}
      >
        <div className="flex items-center justify-between">
          <span className="text-base font-semibold text-white sm:text-lg">
            {children}
          </span>
          <div className="flex-shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-1">
            {icon || <ArrowRight className="h-5 w-5" />}
          </div>
        </div>
      </div>
    </a>
  );
}
