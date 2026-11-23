import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, Gauge, Users, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/common/Button';
import { formatCurrency } from '@/utils/formatters';

export function CarCard({ car }) {
  if (!car) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="group relative bg-brand-navy rounded-2xl overflow-hidden border border-brand-border/70 hover:border-brand-orange/40 transition-all duration-300 shadow-luxury-card flex flex-col"
    >
      {/* Image Container with Badges */}
      <div className="relative aspect-[16/10] overflow-hidden bg-brand-surface">
        <img
          src={car.images?.[0]}
          alt={car.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent opacity-80" />

        <div className="absolute top-3 left-3 flex gap-2">
          <Badge variant="dark" size="sm">
            {car.category}
          </Badge>
          {car.featured && (
            <Badge variant="orange" size="sm">
              Featured
            </Badge>
          )}
        </div>

        <div className="absolute bottom-3 left-3 right-3 flex items-baseline justify-between text-white">
          <span className="text-xs uppercase font-medium tracking-wider text-brand-silver">
            {car.brand}
          </span>
          <div className="text-right">
            <span className="text-xl font-bold text-white">
              {formatCurrency(car.pricePerDay)}
            </span>
            <span className="text-xs text-brand-silver"> / day</span>
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex flex-col flex-grow">
        <Link to={`/cars/${car.id}`} className="focus:outline-none">
          <h3 className="text-lg font-bold text-white group-hover:text-brand-orange transition-colors line-clamp-1">
            {car.name}
          </h3>
        </Link>
        <p className="text-xs text-brand-silver mt-1 mb-4 line-clamp-2">
          {car.tagline || car.description}
        </p>

        {/* Specs Highlights */}
        <div className="grid grid-cols-3 gap-2 py-3 px-3 bg-brand-surface/70 rounded-xl border border-brand-border/50 text-center mb-5 mt-auto">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-[11px] text-brand-silver mb-0.5">
              <Zap className="w-3 h-3 text-brand-orange" />
              <span>Power</span>
            </div>
            <span className="text-xs font-bold text-white">
              {car.specs?.horsepower} HP
            </span>
          </div>

          <div className="flex flex-col items-center border-x border-brand-border/60">
            <div className="flex items-center gap-1 text-[11px] text-brand-silver mb-0.5">
              <Gauge className="w-3 h-3 text-brand-orange" />
              <span>0-60</span>
            </div>
            <span className="text-xs font-bold text-white">{car.specs?.zeroToSixty}</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-[11px] text-brand-silver mb-0.5">
              <Users className="w-3 h-3 text-brand-orange" />
              <span>Seats</span>
            </div>
            <span className="text-xs font-bold text-white">{car.specs?.seats}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2.5">
          <Button
            to={`/cars/${car.id}`}
            variant="secondary"
            size="sm"
            className="w-full text-xs"
          >
            Details
          </Button>
          <Button
            to={`/booking?car=${car.id}`}
            variant="primary"
            size="sm"
            icon={ArrowRight}
            iconPosition="right"
            className="w-full text-xs"
          >
            Book
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export default CarCard;
