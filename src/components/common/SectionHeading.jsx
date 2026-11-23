import { cn } from '@/utils/cn';

/**
 * SectionHeading component establishing luxury typography hierarchy across pages.
 */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
}) {
  const alignMap = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  return (
    <div
      className={cn(
        'flex flex-col max-w-3xl mb-12',
        alignMap[align] || alignMap.center,
        className
      )}
    >
      {eyebrow && (
        <span className="text-xs uppercase font-bold tracking-widest text-brand-orange mb-3 px-3 py-1 bg-brand-orange/10 rounded-full border border-brand-orange/20">
          {eyebrow}
        </span>
      )}
      {title && (
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="text-base sm:text-lg text-brand-silver font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
