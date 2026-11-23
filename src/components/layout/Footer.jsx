import { Link } from 'react-router-dom';
import { Shield, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { APP_CONFIG, NAV_LINKS } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy border-t border-brand-border/70 pt-16 pb-12 mt-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-brand-border/50">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-brand-orange flex items-center justify-center shadow-glow-orange">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-extrabold tracking-wider text-white">
                DRIVE<span className="text-brand-orange">EASE</span>
              </span>
            </Link>
            <p className="text-sm text-brand-silver leading-relaxed">
              {APP_CONFIG.description}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-brand-silver font-medium">
                {APP_CONFIG.contact.hours}
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-brand-silver">
              {NAV_LINKS.map(link => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-brand-orange transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/booking"
                  className="hover:text-brand-orange transition-colors inline-flex items-center gap-1 group"
                >
                  <span>VIP Reservation</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Fleet Categories */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Exotic Fleet
            </h4>
            <ul className="space-y-2.5 text-sm text-brand-silver">
              <li>
                <Link to="/cars" className="hover:text-brand-orange transition-colors">
                  Supercars & Hypercars
                </Link>
              </li>
              <li>
                <Link to="/cars" className="hover:text-brand-orange transition-colors">
                  Ultra-Luxury Sedans
                </Link>
              </li>
              <li>
                <Link to="/cars" className="hover:text-brand-orange transition-colors">
                  High-Performance SUVs
                </Link>
              </li>
              <li>
                <Link to="/cars" className="hover:text-brand-orange transition-colors">
                  Bespoke Grand Tourers
                </Link>
              </li>
            </ul>
          </div>

          {/* VIP Concierge Desk */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              VIP Concierge
            </h4>
            <ul className="space-y-3 text-sm text-brand-silver">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <span>{APP_CONFIG.contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-orange shrink-0" />
                <a
                  href={`tel:${APP_CONFIG.contact.phone.replace(/[^0-9+]/g, '')}`}
                  className="hover:text-brand-orange transition-colors"
                >
                  {APP_CONFIG.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-orange shrink-0" />
                <a
                  href={`mailto:${APP_CONFIG.contact.email}`}
                  className="hover:text-brand-orange transition-colors"
                >
                  {APP_CONFIG.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-silver">
          <p>© {currentYear} DriveEase Luxury Car Rental. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white transition-colors cursor-pointer">
              Terms of Rental
            </span>
            <span className="hover:text-white transition-colors cursor-pointer">
              Chauffeur Services
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
