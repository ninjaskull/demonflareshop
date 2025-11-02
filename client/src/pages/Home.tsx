import GlassButton from "@/components/GlassButton";
import SocialIcon from "@/components/SocialIcon";
import { SiInstagram, SiLinkedin, SiPinterest } from 'react-icons/si';

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
            className="mb-12 flex justify-center"
            data-testid="logo-container"
            style={{
              animation: 'fadeIn 0.6s ease-out',
            }}
          >
            <img
              src="https://demonflare.com/cdn/shop/files/DemonFlare_logo_white_190x.png"
              alt="DemonFlare"
              className="h-auto w-40 sm:w-48"
              data-testid="img-logo"
            />
          </div>

          <div 
            className="space-y-4"
            style={{
              animation: 'fadeIn 0.6s ease-out 0.1s backwards',
            }}
          >
            <GlassButton href="https://chat.whatsapp.com/HVZoyQR1SaT4oQ2QcK92Mc?mode=wwt">
              Join WhatsApp Community
            </GlassButton>
            
            <GlassButton href="https://www.instagram.com/channel/AbYPeNm2F0Ss5UE7/?igsh=MWxyMTR2enBkOHNjOA==">
              Join Instagram Community
            </GlassButton>
            
            <GlassButton href="https://demonflare.com">
              Visit DemonFlare Store
            </GlassButton>
          </div>

          <div 
            className="mt-12 flex justify-center gap-4"
            data-testid="social-icons"
            style={{
              animation: 'fadeIn 0.6s ease-out 0.2s backwards',
            }}
          >
            <SocialIcon
              href="https://www.instagram.com/demonflare.shop"
              icon={<SiInstagram className="h-5 w-5" />}
              label="Instagram"
            />
            <SocialIcon
              href="https://www.linkedin.com/company/thedemonflare"
              icon={<SiLinkedin className="h-5 w-5" />}
              label="LinkedIn"
            />
            <SocialIcon
              href="https://in.pinterest.com/thedemonflare/"
              icon={<SiPinterest className="h-5 w-5" />}
              label="Pinterest"
            />
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
