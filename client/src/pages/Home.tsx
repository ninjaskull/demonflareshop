import GlassButton from "@/components/GlassButton";
import SocialIcon from "@/components/SocialIcon";
import { SiInstagram, SiLinkedin, SiPinterest, SiWhatsapp } from 'react-icons/si';
import { Store } from 'lucide-react';

export default function Home() {
  return (
    <div 
      className="relative min-h-screen overflow-hidden"
      style={{
        background: 'radial-gradient(circle at center, rgba(255, 49, 49, 0.05) 0%, #0e0e10 60%)',
      }}
    >
      <div className="relative flex min-h-screen flex-col items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <div 
            className="mb-8 flex flex-col items-center gap-3"
            data-testid="logo-container"
            style={{
              animation: 'fadeIn 0.6s ease-out',
            }}
          >
            <img
              src="https://demonflare.com/cdn/shop/files/DemonFlare_logo_white_190x.png"
              alt="DemonFlare"
              className="h-auto w-24"
              data-testid="img-logo"
            />
            <div className="text-center">
              <p className="text-xs font-medium text-white/60">
                Premium Streetwear & Community
              </p>
            </div>
          </div>

          <div 
            className="mb-8 flex justify-center gap-3"
            data-testid="social-icons"
            style={{
              animation: 'fadeIn 0.6s ease-out 0.1s backwards',
            }}
          >
            <SocialIcon
              href="https://www.instagram.com/demonflare.shop"
              icon={<SiInstagram className="h-4 w-4" />}
              label="Instagram"
            />
            <SocialIcon
              href="https://www.linkedin.com/company/thedemonflare"
              icon={<SiLinkedin className="h-4 w-4" />}
              label="LinkedIn"
            />
            <SocialIcon
              href="https://in.pinterest.com/thedemonflare/"
              icon={<SiPinterest className="h-4 w-4" />}
              label="Pinterest"
            />
          </div>

          <div 
            className="space-y-3"
            style={{
              animation: 'fadeIn 0.6s ease-out 0.2s backwards',
            }}
          >
            <GlassButton 
              href="https://chat.whatsapp.com/HVZoyQR1SaT4oQ2QcK92Mc?mode=wwt"
              icon={<SiWhatsapp className="text-[#25D366]" />}
            >
              Join WhatsApp Community
            </GlassButton>
            
            <GlassButton 
              href="https://www.instagram.com/channel/AbYPeNm2F0Ss5UE7/?igsh=MWxyMTR2enBkOHNjOA=="
              icon={<SiInstagram className="text-[#E4405F]" />}
            >
              Join Instagram Community
            </GlassButton>
            
            <GlassButton 
              href="https://demonflare.com"
              icon={<Store className="h-5 w-5 text-primary" />}
            >
              Visit DemonFlare Store
            </GlassButton>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
