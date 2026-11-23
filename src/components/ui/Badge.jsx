import { cn } from '@/utils/cn';

/**
 * Reusable Badge component for car tags and feature highlights.
 */
export function Badge({ children, variant = 'orange', className = '', size = 'md' }) {
  const baseStyles =
    'inline-flex items-center font-medium uppercase tracking-wider rounded-full transition-colors';

  const sizeStyles = {
    sm: 'text-[10px] px-2.5 py-0.5',
    md: 'text-xs px-3 py-1',
    lg: 'text-sm px-4 py-1.5',
  };

  const variants = {
    orange: 'bg-brand-orange/15 text-brand-orange border border-brand-orange/30',
    dark: 'bg-brand-surface text-brand-platinum border border-brand-border',
    subtle: 'bg-white/5 text-brand-silver border border-white/10',
    outline: 'border border-brand-orange text-brand-orange bg-transparent',
  };

  return (
    <span
      className={cn(
        baseStyles,
        sizeStyles[size] || sizeStyles.md,
        variants[variant] || variants.orange,
        className
      )}
    >
      {children}
    </span>
  );
}

export default Badge;
