import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Shield, PhoneCall, ChevronRight } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { NAV_LINKS, APP_CONFIG } from '@/lib/constants';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { cn } from '@/utils/cn';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollY = useScrollPosition();
  const isScrolled = scrollY > 20;

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-brand-dark/90 backdrop-blur-md border-b border-brand-border/60 py-3.5 shadow-luxury-card'
          : 'bg-transparent py-5'
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-orange to-brand-orange-hover flex items-center justify-center shadow-glow-orange transition-transform duration-300 group-hover:scale-105">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-wider text-white">
                DRIVE<span className="text-brand-orange">EASE</span>
              </span>
              <span className="text-[9px] uppercase tracking-widest text-brand-silver font-semibold -mt-1">
                Luxury Fleet
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_LINKS.map(link => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  cn(
                    'px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200',
                    isActive
                      ? 'text-brand-orange bg-brand-orange/10 font-semibold'
                      : 'text-brand-silver hover:text-white hover:bg-white/5'
                  )
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${APP_CONFIG.contact.phone.replace(/[^0-9+]/g, '')}`}
              className="flex items-center gap-2 text-xs font-semibold text-brand-silver hover:text-brand-orange transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-brand-orange" />
              <span>{APP_CONFIG.contact.phone}</span>
            </a>
            <Button to="/booking" size="sm" icon={ChevronRight} iconPosition="right">
              Reserve Fleet
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(prev => !prev)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-lg text-brand-silver hover:text-white hover:bg-brand-surface focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-brand-border bg-brand-navy/95 backdrop-blur-xl rounded-2xl p-4 shadow-luxury-card animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-1.5">
              {NAV_LINKS.map(link => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    cn(
                      'px-4 py-2.5 text-base font-medium rounded-lg transition-colors',
                      isActive
                        ? 'text-brand-orange bg-brand-orange/10 font-semibold'
                        : 'text-brand-silver hover:text-white hover:bg-white/5'
                    )
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="pt-3 mt-2 border-t border-brand-border">
                <Button
                  to="/booking"
                  onClick={closeMenu}
                  className="w-full justify-center"
                  size="md"
                >
                  Reserve Fleet
                </Button>
              </div>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}

export default Navbar;
