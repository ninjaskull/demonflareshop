import { useState, useEffect } from 'react';
import GlassButton from "@/components/GlassButton";
import SocialIcon from "@/components/SocialIcon";
import Loader from "@/components/Loader";
import { SiInstagram, SiLinkedin, SiPinterest, SiWhatsapp } from 'react-icons/si';
import { Store } from 'lucide-react';

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader />
    <div 
      className="relative min-h-screen overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a0a0c 0%, #0e0e10 50%, #12080a 100%)',
      }}
    >
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at 50% 20%, rgba(255, 49, 49, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 49, 49, 0.08) 0%, transparent 50%)',
        }}
      />
      <div 
        className="relative flex min-h-screen flex-col items-center justify-center px-6 py-12 transition-opacity duration-500"
        style={{
          opacity: showContent ? 1 : 0,
        }}
      >
        <div className="w-full max-w-md">
          <div 
            className="mb-8 flex flex-col items-center gap-3"
            data-testid="logo-container"
            style={{
              animation: showContent ? 'fadeIn 0.6s ease-out' : 'none',
            }}
          >
            <div className="relative">
              <div 
                className="absolute inset-0 scale-110 blur-2xl opacity-20"
                style={{
                  background: 'radial-gradient(circle, rgba(255, 49, 49, 0.4) 0%, transparent 70%)',
                }}
              />
              <img
                src="https://demonflare.com/cdn/shop/files/DemonFlare_logo_white_190x.png"
                alt="DemonFlare"
                className="relative h-auto w-24 drop-shadow-2xl"
                data-testid="img-logo"
              />
            </div>
            <div className="text-center">
              <p className="text-xs font-medium tracking-wide text-white/70">
                Premium Collectibles and Community
              </p>
            </div>
          </div>

          <div 
            className="space-y-3"
            style={{
              animation: showContent ? 'fadeIn 0.6s ease-out 0.1s backwards' : 'none',
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

          <div 
            className="mt-10 flex justify-center gap-3"
            data-testid="social-icons"
            style={{
              animation: showContent ? 'fadeIn 0.6s ease-out 0.2s backwards' : 'none',
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
    </>
  );
}
