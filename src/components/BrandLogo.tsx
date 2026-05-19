const LOGO_SRC = '/logo.png';

const logoSizes = {
  header: 'h-14 w-14 sm:h-16 sm:w-16',
  footer: 'h-24 w-24',
  inline: 'h-10 w-10',
};

type BrandLogoProps = {
  className?: string;
  imageClassName?: string;
  size?: keyof typeof logoSizes;
};

export function BrandLogo({
  className = '',
  imageClassName = '',
  size = 'inline',
}: BrandLogoProps) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <img
        src={LOGO_SRC}
        alt="OTSEF logo"
        className={`block shrink-0 object-contain ${logoSizes[size]} ${imageClassName}`} />
    </span>
  );
}
