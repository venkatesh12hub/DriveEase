import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CheckCircle2, Calendar, MapPin, User, Mail, Phone } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Button } from '@/components/common/Button';
import { BookingSummaryCard } from '@/features/bookings/components/BookingSummaryCard';
import {
  calculateRentalEstimate,
  createBookingRequest,
} from '@/features/bookings/services/bookingService';
import { getAllCars } from '@/features/cars/services/carService';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

export default function Booking() {
  useDocumentTitle('VIP Reservation');
  const [searchParams] = useSearchParams();
  const preselectedCarId = searchParams.get('car');

  const [cars, setCars] = useState([]);
  const [selectedCarId, setSelectedCarId] = useState(preselectedCarId || '');
  const [days, setDays] = useState(3);
  const [insurance, setInsurance] = useState('premium');
  const [pickupLocation, setPickupLocation] = useState('Beverly Hills VIP Showroom');

  // Customer form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmation, setConfirmation] = useState(null);

  useEffect(() => {
    getAllCars().then(data => {
      setCars(data);
      if (!selectedCarId && data.length > 0) {
        setSelectedCarId(preselectedCarId || data[0].id);
      }
    });
  }, [preselectedCarId, selectedCarId]);

  const selectedCar = useMemo(() => {
    return cars.find(c => c.id === selectedCarId) || cars[0] || null;
  }, [cars, selectedCarId]);

  const estimate = useMemo(() => {
    if (!selectedCar) return null;
    return calculateRentalEstimate({
      pricePerDay: selectedCar.pricePerDay,
      days: Number(days) || 1,
      insurance,
    });
  }, [selectedCar, days, insurance]);

  const handleSubmit = async e => {
    e.preventDefault();
    if (!selectedCar || !estimate) return;

    setIsSubmitting(true);
    const result = await createBookingRequest({
      car: selectedCar,
      estimate,
      pickupLocation,
      customer: formData,
    });

    setConfirmation(result);
    setIsSubmitting(false);
  };

  if (confirmation) {
    return (
      <Container className="py-16">
        <div className="max-w-2xl mx-auto bg-brand-navy rounded-3xl border border-brand-orange/40 p-8 sm:p-12 text-center shadow-luxury-card space-y-6">
          <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">
            Reservation Confirmed
          </span>

          <h2 className="text-3xl font-extrabold text-white">
            Welcome to the DriveEase Circle
          </h2>

          <p className="text-sm text-brand-silver leading-relaxed">
            Your reservation request for the{' '}
            <strong className="text-white">{confirmation.booking.car.name}</strong> has
            been received. A dedicated VIP concierge specialist will contact you shortly
            to verify credentials and arrange bespoke delivery.
          </p>

          <div className="p-4 rounded-xl bg-brand-surface border border-brand-border text-center">
            <span className="text-xs uppercase tracking-wider text-brand-silver">
              Reservation Reference
            </span>
            <p className="text-xl font-mono font-bold text-brand-orange mt-1">
              {confirmation.confirmationNumber}
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
            <Button to="/cars" variant="secondary">
              Explore More Fleet
            </Button>
            <Button to="/">Return Home</Button>
          </div>
        </div>
      </Container>
    );
  }

  return (
    <div className="pb-20">
      <Container>
        <SectionHeading
          eyebrow="VIP Concierge Booking"
          title="Reserve Your Exotic Vehicle"
          subtitle="Configure your preferred dates, delivery logistics, and coverage tier for an effortless driving experience."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Booking Configuration Form */}
          <div className="lg:col-span-7 bg-brand-navy rounded-2xl border border-brand-border p-6 sm:p-8 space-y-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Select Vehicle */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-brand-silver">
                  Select Vehicle
                </label>
                <select
                  value={selectedCarId}
                  onChange={e => setSelectedCarId(e.target.value)}
                  className="w-full bg-brand-surface border border-brand-border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                >
                  {cars.map(c => (
                    <option key={c.id} value={c.id} className="bg-brand-dark">
                      {c.name} — ${c.pricePerDay}/day ({c.category})
                    </option>
                  ))}
                </select>
              </div>

              {/* Rental Duration & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-brand-silver flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-brand-orange" />
                    <span>Duration (Days)</span>
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="30"
                    value={days}
                    onChange={e => setDays(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-full bg-brand-surface border border-brand-border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-orange"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-brand-silver flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-brand-orange" />
                    <span>Delivery Location</span>
                  </label>
                  <select
                    value={pickupLocation}
                    onChange={e => setPickupLocation(e.target.value)}
                    className="w-full bg-brand-surface border border-brand-border rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-orange"
                  >
                    <option value="Beverly Hills VIP Showroom" className="bg-brand-dark">
                      Beverly Hills VIP Showroom
                    </option>
                    <option
                      value="LAX Signature Flight Support FBO"
                      className="bg-brand-dark"
                    >
                      LAX Signature Flight Support (FBO)
                    </option>
                    <option
                      value="Bespoke Private Residence Delivery"
                      className="bg-brand-dark"
                    >
                      Bespoke Residence / Hotel Delivery
                    </option>
                  </select>
                </div>
              </div>

              {/* Protection Package */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-brand-silver">
                  Protection Package
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    {
                      id: 'basic',
                      title: 'Basic',
                      price: '+$49/day',
                      desc: 'Standard collision',
                    },
                    {
                      id: 'premium',
                      title: 'Premium',
                      price: '+$99/day',
                      desc: 'Zero deductible & glass',
                    },
                    {
                      id: 'vip',
                      title: 'VIP Diamond',
                      price: '+$179/day',
                      desc: 'Full liability & concierge',
                    },
                  ].map(tier => (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => setInsurance(tier.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                        insurance === tier.id
                          ? 'border-brand-orange bg-brand-orange/10 ring-1 ring-brand-orange'
                          : 'border-brand-border bg-brand-surface hover:border-brand-border-light'
                      }`}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs font-bold text-white">{tier.title}</span>
                        <span className="text-[11px] font-semibold text-brand-orange">
                          {tier.price}
                        </span>
                      </div>
                      <p className="text-[11px] text-brand-silver">{tier.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Driver Details */}
              <div className="pt-4 border-t border-brand-border space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                  Driver & Contact Details
                </h4>

                <div className="space-y-2">
                  <label className="text-xs text-brand-silver flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-brand-orange" />
                    <span>Full Legal Name (as shown on license)</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jonathan Sterling"
                    value={formData.fullName}
                    onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-brand-surface border border-brand-border rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-orange"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs text-brand-silver flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-brand-orange" />
                      <span>Email Address</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="client@luxury.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-brand-surface border border-brand-border rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-orange"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs text-brand-silver flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-brand-orange" />
                      <span>Phone Number</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (310) 555-0199"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-brand-surface border border-brand-border rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-orange"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full justify-center"
                  isLoading={isSubmitting}
                >
                  Submit Reservation Request
                </Button>
              </div>
            </form>
          </div>

          {/* Pricing & Summary Sidebar */}
          <div className="lg:col-span-5">
            <BookingSummaryCard car={selectedCar} estimate={estimate} />
          </div>
        </div>
      </Container>
    </div>
  );
}
