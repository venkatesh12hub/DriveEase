import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Key, ArrowRight, Award } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Button } from '@/components/common/Button';
import { ReviewSlideshow } from '@/components/common/ReviewSlideshow';
import { CarCard } from '@/features/cars/components/CarCard';
import { getFeaturedCars } from '@/features/cars/services/carService';
import { APP_CONFIG } from '@/lib/constants';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

export default function Home() {
  useDocumentTitle('Exotic & Luxury Car Rental Fleet');
  const [featuredCars, setFeaturedCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFeaturedCars(6).then(data => {
      setFeaturedCars(data.slice(0, 6));
      setLoading(false);
    });
  }, []);

  return (
    <div className="space-y-24 md:space-y-32">
      {/* Hero Section with Car Background Image */}
      <section className="relative -mt-24 pt-36 pb-20 overflow-hidden border-b border-brand-border/40">
        {/* Background Car Image Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=2070&q=85"
            alt="Exotic Supercar Background"
            className="w-full h-full object-cover object-center filter brightness-[0.32] contrast-125 scale-105"
          />
          {/* Gradients to blend smoothly with dark theme */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/90 via-brand-dark/70 to-brand-dark" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 via-transparent to-brand-dark/80" />
        </div>

        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-orange/20 blur-[130px] rounded-full pointer-events-none z-[1]" />
        <div className="absolute top-10 right-10 w-[400px] h-[250px] bg-sky-500/10 blur-[100px] rounded-full pointer-events-none z-[1]" />

        <Container className="relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-surface/80 border border-brand-border backdrop-blur-md"
            >
              <Award className="w-4 h-4 text-brand-orange" />
              <span className="text-xs uppercase font-bold tracking-widest text-brand-silver">
                Southern California & Global VIP Service
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] drop-shadow-md"
            >
              Unrivaled Luxury.{' '}
              <span className="text-gradient-orange">Pure Performance.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-xl text-brand-silver max-w-2xl mx-auto leading-relaxed drop-shadow-sm"
            >
              Elevate your journey with our hand-curated fleet of bespoke supercars, grand
              tourers, and ultra-luxury sedans. White-glove delivery straight to your
              private hangar or residence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-4 pt-4"
            >
              <Button to="/cars" size="lg" icon={ArrowRight} iconPosition="right">
                Explore Fleet
              </Button>
              <Button to="/booking" variant="secondary" size="lg">
                Instant Reservation
              </Button>
            </motion.div>
          </div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-2xl bg-brand-surface/75 border border-brand-border/80 backdrop-blur-md max-w-4xl mx-auto"
          >
            {APP_CONFIG.stats.map((stat, idx) => (
              <div key={idx} className="text-center space-y-1">
                <span className="text-2xl sm:text-3xl font-extrabold text-white">
                  {stat.value}
                </span>
                <p className="text-xs uppercase tracking-wider text-brand-silver">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Featured Fleet Section - Limited to 6 Cards */}
      <section>
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <SectionHeading
              align="left"
              eyebrow="Premier Selection"
              title="Featured Vehicles"
              subtitle="Every vehicle in our collection is maintained to concours standards and delivered immaculate."
              className="mb-0"
            />
            <Button
              to="/cars"
              variant="outline"
              size="sm"
              icon={ArrowRight}
              iconPosition="right"
              className="mt-6 md:mt-0 self-start md:self-auto"
            >
              View All Fleet
            </Button>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div
                  key={i}
                  className="h-96 rounded-2xl bg-brand-surface/50 animate-pulse border border-brand-border"
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCars.slice(0, 6).map(car => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          )}
        </Container>
      </section>

      {/* The DriveEase Distinction */}
      <section className="bg-brand-navy/60 border-y border-brand-border/60 py-20">
        <Container>
          <SectionHeading
            eyebrow="The DriveEase Distinction"
            title="Redefining Exotic Car Rental"
            subtitle="Tailored for discerning enthusiasts who demand the highest caliber of service and engineering perfection."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-brand-surface/70 border border-brand-border p-8 rounded-2xl relative overflow-hidden group hover:border-brand-orange/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-brand-orange/15 border border-brand-orange/30 flex items-center justify-center text-brand-orange mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">White-Glove Handover</h3>
              <p className="text-sm text-brand-silver leading-relaxed">
                Direct delivery to airport FBOs, private residences, or luxury hotels with
                a personalized vehicle walkthrough by a certified specialist.
              </p>
            </div>

            <div className="bg-brand-surface/70 border border-brand-border p-8 rounded-2xl relative overflow-hidden group hover:border-brand-orange/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-brand-orange/15 border border-brand-orange/30 flex items-center justify-center text-brand-orange mb-6">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Concours Condition</h3>
              <p className="text-sm text-brand-silver leading-relaxed">
                Our master technicians inspect all systems before each dispatch. Pristine
                interiors, calibrated telemetry, and fresh high-performance tires
                guaranteed.
              </p>
            </div>

            <div className="bg-brand-surface/70 border border-brand-border p-8 rounded-2xl relative overflow-hidden group hover:border-brand-orange/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-brand-orange/15 border border-brand-orange/30 flex items-center justify-center text-brand-orange mb-6">
                <Key className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Transparent & Bespoke</h3>
              <p className="text-sm text-brand-silver leading-relaxed">
                No hidden surcharges or surprise fees. Flexible mileage packages, custom
                multi-day rates, and seamless digital identity verification.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Client Reviews Slideshow Section */}
      <ReviewSlideshow />

      {/* Reservation CTA Banner */}
      <section>
        <Container>
          <div className="relative rounded-3xl bg-gradient-to-r from-brand-navy via-brand-surface to-brand-navy border border-brand-orange/30 p-10 md:p-16 overflow-hidden text-center shadow-luxury-card">
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-brand-orange/20 blur-3xl rounded-full pointer-events-none" />
            <div className="max-w-2xl mx-auto space-y-6 relative z-10">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">
                Ready for the Driver’s Seat?
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Reserve Your Dream Machine Today
              </h2>
              <p className="text-sm sm:text-base text-brand-silver">
                Contact our VIP concierge desk or book online in under 3 minutes.
                Complimentary delivery within a 25-mile radius.
              </p>
              <div className="pt-2">
                <Button to="/booking" size="lg">
                  Book Your Reservation
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
