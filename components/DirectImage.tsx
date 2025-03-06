export default function DirectImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <img 
      src={src} 
      alt={alt} 
      className={className} 
      style={{ maxWidth: '100%', height: 'auto' }} 
    />
  );
} 