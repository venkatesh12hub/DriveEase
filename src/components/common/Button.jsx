import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

/**
 * Luxury Button component with interactive motion and versatile styling variants.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  to,
  href,
  icon: Icon,
  iconPosition = 'left',
  disabled = false,
  isLoading = false,
  onClick,
  type = 'button',
  ...props
}) {
  const baseStyles =
    'relative inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-orange/50 active:scale-[0.98] select-none disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5 tracking-wide',
    md: 'text-sm px-5 py-2.5 gap-2 tracking-wide',
    lg: 'text-base px-7 py-3.5 gap-2.5 tracking-wider',
  };

  const variants = {
    primary:
      'bg-brand-orange text-white hover:bg-brand-orange-hover shadow-glow-orange border border-transparent',
    secondary:
      'bg-brand-surface text-brand-platinum hover:bg-brand-surface-elevated hover:text-white border border-brand-border',
    outline:
      'bg-transparent text-brand-orange hover:bg-brand-orange hover:text-white border border-brand-orange transition-colors',
    ghost:
      'bg-transparent text-brand-silver hover:text-white hover:bg-white/5 border border-transparent',
  };

  const content = (
    <>
      {isLoading ? (
        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
      ) : Icon && iconPosition === 'left' ? (
        <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />
      ) : null}
      <span>{children}</span>
      {!isLoading && Icon && iconPosition === 'right' ? (
        <Icon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
      ) : null}
    </>
  );

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size] || sizeStyles.md,
    variants[variant] || variants.primary,
    'group',
    className
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <motion.button
      type={type}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={combinedClasses}
      disabled={disabled || isLoading}
      onClick={onClick}
      {...props}
    >
      {content}
    </motion.button>
  );
}

export default Button;
