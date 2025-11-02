import SocialIcon from '../SocialIcon';
import { SiInstagram, SiLinkedin, SiPinterest } from 'react-icons/si';

export default function SocialIconExample() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-8">
      <div className="flex gap-4">
        <SocialIcon 
          href="https://instagram.com" 
          icon={<SiInstagram className="h-4 w-4" />}
          label="Instagram"
        />
        <SocialIcon 
          href="https://linkedin.com" 
          icon={<SiLinkedin className="h-4 w-4" />}
          label="LinkedIn"
        />
        <SocialIcon 
          href="https://pinterest.com" 
          icon={<SiPinterest className="h-4 w-4" />}
          label="Pinterest"
        />
      </div>
    </div>
  );
}
