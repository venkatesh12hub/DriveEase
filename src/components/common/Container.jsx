import { cn } from '@/utils/cn';

/**
 * Standard container component to constrain max-width and center content.
 */
export function Container({
  children,
  className = '',
  size = 'default',
  as: Component = 'div',
}) {
  const sizes = {
    sm: 'max-w-4xl',
    default: 'max-w-7xl',
    lg: 'max-w-[1400px]',
    full: 'max-w-full',
  };

  return (
    <Component
      className={cn(
        'mx-auto w-full px-4 sm:px-6 lg:px-8',
        sizes[size] || sizes.default,
        className
      )}
    >
      {children}
    </Component>
  );
}

export default Container;
