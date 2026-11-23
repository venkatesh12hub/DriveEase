import { Shield, Award, Users, Compass, CheckCircle } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Button } from '@/components/common/Button';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

export default function About() {
  useDocumentTitle('About Us — The DriveEase Story');

  const pillars = [
    {
      icon: Shield,
      title: 'Flawless Fleet Standards',
      desc: 'Each supercar undergoes a rigorous 110-point inspection before every rental. We only source the latest model years with factory performance packages.',
    },
    {
      icon: Award,
      title: 'Bespoke Concierge Care',
      desc: 'Your dedicated concierge orchestrates vehicle delivery to private airport tarmac, residence, or track day facility at your command.',
    },
    {
      icon: Users,
      title: 'Discreet & Professional',
      desc: 'Trusted by world leaders, executives, and discerning enthusiasts. Strict privacy protection and seamless digital onboarding.',
    },
    {
      icon: Compass,
      title: 'Curated Driving Routes',
      desc: 'Complimentary GPS coordinates for breathtaking coastal canyons and mountain passes pre-programmed into your cockpit navigation.',
    },
  ];

  return (
    <div className="pb-20 space-y-24">
      <Container>
        <SectionHeading
          eyebrow="Our Heritage & Vision"
          title="Passion for the Extraordinary"
          subtitle="DriveEase was born out of an obsession for automotive excellence and an uncompromising vision for white-glove hospitality."
        />

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-brand-navy rounded-3xl border border-brand-border p-8 sm:p-12 shadow-luxury-card">
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">
              The DriveEase Legacy
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              More than a rental. An unforgettable driving experience.
            </h3>
            <p className="text-sm sm:text-base text-brand-silver leading-relaxed">
              Founded in Southern California, DriveEase bridges the gap between raw
              supercar exhilaration and seamless luxury hospitality. We believe that
              stepping into a 700-horsepower cockpit should be an effortless,
              unforgettable event.
            </p>
            <p className="text-sm sm:text-base text-brand-silver leading-relaxed">
              Whether you require a Rolls-Royce Ghost for high-profile executive meetings,
              an open-top Lamborghini for a Pacific Coast Highway escape, or a Porsche GT3
              RS for weekend apexes, our fleet is at your beck and call.
            </p>

            <div className="pt-2">
              <Button to="/cars">View Our Complete Fleet</Button>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-brand-border">
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
              alt="Porsche Cockpit"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="pt-16">
          <SectionHeading
            eyebrow="What Sets Us Apart"
            title="The Four Pillars of Excellence"
            subtitle="Engineered to guarantee satisfaction at every turn."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {pillars.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-brand-navy p-6 rounded-2xl border border-brand-border hover:border-brand-orange/40 transition-colors space-y-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-orange/15 border border-brand-orange/30 flex items-center justify-center text-brand-orange">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">{item.title}</h4>
                  <p className="text-xs text-brand-silver leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Fleet Guarantees */}
        <div className="mt-16 bg-brand-surface rounded-2xl border border-brand-border p-8 text-center max-w-3xl mx-auto space-y-6">
          <h3 className="text-xl font-bold text-white">The DriveEase Fleet Guarantee</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            <div className="flex items-center gap-3 text-sm text-brand-silver">
              <CheckCircle className="w-4 h-4 text-brand-orange shrink-0" />
              <span>Exact model and color guaranteed</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-brand-silver">
              <CheckCircle className="w-4 h-4 text-brand-orange shrink-0" />
              <span>Zero cancellation fees up to 48 hours</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-brand-silver">
              <CheckCircle className="w-4 h-4 text-brand-orange shrink-0" />
              <span>Comprehensive 24/7 roadside telemetry</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-brand-silver">
              <CheckCircle className="w-4 h-4 text-brand-orange shrink-0" />
              <span>Pristine showroom detailing prior to dispatch</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
