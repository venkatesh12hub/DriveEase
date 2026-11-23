import { Shield, Sparkles, Check } from 'lucide-react';
import { formatCurrency } from '@/utils/formatters';

export function BookingSummaryCard({ car, estimate }) {
  if (!car || !estimate) return null;

  return (
    <div className="bg-brand-navy rounded-2xl border border-brand-border/80 p-6 shadow-luxury-card sticky top-28">
      <div className="flex items-center gap-3 pb-5 border-b border-brand-border">
        <img
          src={car.images?.[0]}
          alt={car.name}
          className="w-20 h-14 object-cover rounded-lg border border-brand-border"
        />
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-brand-orange">
            {car.brand}
          </span>
          <h4 className="text-base font-bold text-white line-clamp-1">{car.name}</h4>
          <span className="text-xs text-brand-silver">
            {formatCurrency(car.pricePerDay)} / day
          </span>
        </div>
      </div>

      <div className="py-5 space-y-3.5 text-sm border-b border-brand-border">
        <div className="flex justify-between text-brand-silver">
          <span>Rental Duration</span>
          <span className="text-white font-medium">
            {estimate.days} {estimate.days === 1 ? 'Day' : 'Days'}
          </span>
        </div>
        <div className="flex justify-between text-brand-silver">
          <span>Base Rental</span>
          <span className="text-white font-medium">
            {formatCurrency(estimate.rentalSubtotal)}
          </span>
        </div>
        <div className="flex justify-between text-brand-silver">
          <span className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-brand-orange" />
            <span>Insurance Protection</span>
          </span>
          <span className="text-white font-medium">
            {formatCurrency(estimate.insuranceFee)}
          </span>
        </div>
        <div className="flex justify-between text-brand-silver">
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
            <span>VIP White-Glove Handover</span>
          </span>
          <span className="text-white font-medium">
            {formatCurrency(estimate.conciergeServiceFee)}
          </span>
        </div>
      </div>

      <div className="pt-5 pb-2">
        <div className="flex justify-between items-baseline mb-4">
          <div>
            <span className="text-xs uppercase tracking-wider font-semibold text-brand-silver">
              Estimated Total
            </span>
            <p className="text-[11px] text-brand-silver/80">Taxes and fees included</p>
          </div>
          <span className="text-2xl font-extrabold text-brand-orange">
            {formatCurrency(estimate.total)}
          </span>
        </div>

        <ul className="space-y-2 text-xs text-brand-silver pt-2">
          <li className="flex items-center gap-2">
            <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>150 complimentary miles/day included</span>
          </li>
          <li className="flex items-center gap-2">
            <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Full fuel tank on vehicle delivery</span>
          </li>
          <li className="flex items-center gap-2">
            <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Refundable security deposit: {formatCurrency(car.deposit)}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BookingSummaryCard;
