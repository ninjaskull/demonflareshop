import GlassButton from '../GlassButton';

export default function GlassButtonExample() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-8">
      <div className="w-full max-w-md space-y-4">
        <GlassButton href="https://example.com">
          Join WhatsApp Community
        </GlassButton>
        <GlassButton href="https://example.com">
          Visit DemonFlare Store
        </GlassButton>
      </div>
    </div>
  );
}
