import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Zap,
  Gauge,
  Users,
  ShieldCheck,
  ChevronLeft,
  Fuel,
  Settings2,
  Calendar,
  Sparkles,
} from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/common/Button';
import { getCarById } from '@/features/cars/services/carService';
import { formatCurrency } from '@/utils/formatters';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

export default function CarDetails() {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);

  useDocumentTitle(car ? `${car.name} — Luxury Rental` : 'Vehicle Details');

  useEffect(() => {
    getCarById(id).then(data => {
      setCar(data);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return (
      <Container className="py-20 text-center">
        <div className="w-10 h-10 border-2 border-brand-orange border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-sm text-brand-silver">Loading vehicle specifications...</p>
      </Container>
    );
  }

  if (!car) {
    return (
      <Container className="py-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Vehicle Not Found</h2>
        <p className="text-brand-silver text-sm mb-6">
          The requested vehicle does not exist or has been relocated in our fleet.
        </p>
        <Button to="/cars" variant="primary">
          Back to Fleet
        </Button>
      </Container>
    );
  }

  return (
    <div className="pb-20">
      <Container>
        {/* Breadcrumb / Back Link */}
        <div className="mb-6">
          <Link
            to="/cars"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-silver hover:text-brand-orange transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back to Fleet Overview</span>
          </Link>
        </div>

        {/* Vehicle Header Info */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-brand-border/60 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Badge variant="orange">{car.category}</Badge>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-silver">
                {car.brand} • {car.year}
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white">{car.name}</h1>
            <p className="text-brand-silver text-sm sm:text-base mt-2">{car.tagline}</p>
          </div>

          <div className="flex items-baseline gap-2 lg:text-right">
            <span className="text-3xl sm:text-4xl font-extrabold text-white">
              {formatCurrency(car.pricePerDay)}
            </span>
            <span className="text-brand-silver text-sm font-medium">/ 24h rental</span>
          </div>
        </div>

        {/* Main Grid: Image & Key Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Vehicle Media & Overview */}
          <div className="lg:col-span-8 space-y-8">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-brand-border/80 shadow-luxury-card bg-brand-surface">
              <img
                src={car.images?.[0]}
                alt={car.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="bg-brand-navy rounded-2xl border border-brand-border p-6 sm:p-8 space-y-4">
              <h3 className="text-xl font-bold text-white">Vehicle Overview</h3>
              <p className="text-sm sm:text-base text-brand-silver leading-relaxed">
                {car.description}
              </p>
            </div>

            {/* Performance Specifications */}
            <div className="bg-brand-navy rounded-2xl border border-brand-border p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-bold text-white">Technical Specifications</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-brand-surface/70 border border-brand-border">
                  <div className="flex items-center gap-2 text-xs text-brand-silver mb-1">
                    <Zap className="w-4 h-4 text-brand-orange" />
                    <span>Horsepower</span>
                  </div>
                  <span className="text-base sm:text-lg font-bold text-white">
                    {car.specs.horsepower} HP
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-brand-surface/70 border border-brand-border">
                  <div className="flex items-center gap-2 text-xs text-brand-silver mb-1">
                    <Gauge className="w-4 h-4 text-brand-orange" />
                    <span>Acceleration</span>
                  </div>
                  <span className="text-base sm:text-lg font-bold text-white">
                    {car.specs.zeroToSixty} (0-60)
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-brand-surface/70 border border-brand-border">
                  <div className="flex items-center gap-2 text-xs text-brand-silver mb-1">
                    <Settings2 className="w-4 h-4 text-brand-orange" />
                    <span>Top Speed</span>
                  </div>
                  <span className="text-base sm:text-lg font-bold text-white">
                    {car.specs.topSpeed}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-brand-surface/70 border border-brand-border">
                  <div className="flex items-center gap-2 text-xs text-brand-silver mb-1">
                    <Settings2 className="w-4 h-4 text-brand-orange" />
                    <span>Engine</span>
                  </div>
                  <span className="text-sm font-bold text-white">{car.specs.engine}</span>
                </div>

                <div className="p-4 rounded-xl bg-brand-surface/70 border border-brand-border">
                  <div className="flex items-center gap-2 text-xs text-brand-silver mb-1">
                    <Fuel className="w-4 h-4 text-brand-orange" />
                    <span>Fuel Type</span>
                  </div>
                  <span className="text-sm font-bold text-white">
                    {car.specs.fuelType}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-brand-surface/70 border border-brand-border">
                  <div className="flex items-center gap-2 text-xs text-brand-silver mb-1">
                    <Users className="w-4 h-4 text-brand-orange" />
                    <span>Seating</span>
                  </div>
                  <span className="text-sm font-bold text-white">
                    {car.specs.seats} Passengers
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Reservation Card Sidebar */}
          <div className="lg:col-span-4">
            <div className="bg-brand-navy rounded-2xl border border-brand-border p-6 sm:p-7 shadow-luxury-card sticky top-28 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-brand-orange">
                  Instant VIP Reservation
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {formatCurrency(car.pricePerDay)}{' '}
                  <span className="text-xs font-normal text-brand-silver">/ day</span>
                </h3>
              </div>

              <div className="p-4 rounded-xl bg-brand-surface border border-brand-border space-y-2 text-xs text-brand-silver">
                <div className="flex justify-between">
                  <span>Security Deposit</span>
                  <span className="text-white font-semibold">
                    {formatCurrency(car.deposit)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Minimum Driver Age</span>
                  <span className="text-white font-semibold">25+</span>
                </div>
                <div className="flex justify-between">
                  <span>Included Miles</span>
                  <span className="text-white font-semibold">150 miles/day</span>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <Button
                  to={`/booking?car=${car.id}`}
                  size="lg"
                  className="w-full justify-center"
                  icon={Calendar}
                  iconPosition="left"
                >
                  Reserve This Car
                </Button>

                <Button
                  to="/contact"
                  variant="secondary"
                  size="md"
                  className="w-full justify-center text-xs"
                >
                  Speak with VIP Concierge
                </Button>
              </div>

              <div className="pt-4 border-t border-brand-border space-y-2 text-xs text-brand-silver">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Comprehensive collision damage waiver available</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-brand-orange shrink-0" />
                  <span>Complimentary airport handover</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
