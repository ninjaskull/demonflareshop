import GlassButton from '../GlassButton';
import { SiWhatsapp } from 'react-icons/si';
import { Store } from 'lucide-react';

export default function GlassButtonExample() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-8">
      <div className="w-full max-w-md space-y-4">
        <GlassButton 
          href="https://example.com"
          icon={<SiWhatsapp className="text-[#25D366]" />}
        >
          Join WhatsApp Community
        </GlassButton>
        <GlassButton 
          href="https://example.com"
          icon={<Store className="h-5 w-5 text-primary" />}
        >
          Visit DemonFlare Store
        </GlassButton>
      </div>
    </div>
  );
}
