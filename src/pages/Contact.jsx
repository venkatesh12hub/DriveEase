import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Button } from '@/components/common/Button';
import { APP_CONFIG } from '@/lib/constants';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

export default function Contact() {
  useDocumentTitle('Contact VIP Concierge');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Fleet Availability & Private Rental Inquiry',
    message: '',
  });

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pb-20">
      <Container>
        <SectionHeading
          eyebrow="VIP Concierge Desk"
          title="Direct Line to Distinction"
          subtitle="Whether planning an exotic weekend escape or arranging corporate fleet bookings, our concierge specialists are at your disposal."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-12">
          {/* Contact Details & Showroom */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-brand-navy rounded-2xl border border-brand-border p-6 sm:p-8 space-y-6 shadow-luxury-card">
              <h3 className="text-xl font-bold text-white">Beverly Hills Showroom</h3>
              <p className="text-sm text-brand-silver leading-relaxed">
                Experience our curated fleet in person at our flagship showroom or request
                private aircraft tarmac delivery across California and Nevada.
              </p>

              <div className="space-y-4 pt-2 text-sm text-brand-silver">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-brand-surface border border-brand-border flex items-center justify-center text-brand-orange shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-white block">
                      Showroom Address
                    </span>
                    <span>{APP_CONFIG.contact.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-brand-surface border border-brand-border flex items-center justify-center text-brand-orange shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-white block">
                      Direct Concierge Line
                    </span>
                    <a
                      href={`tel:${APP_CONFIG.contact.phone.replace(/[^0-9+]/g, '')}`}
                      className="hover:text-brand-orange transition-colors"
                    >
                      {APP_CONFIG.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-brand-surface border border-brand-border flex items-center justify-center text-brand-orange shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-white block">
                      VIP Reservations
                    </span>
                    <a
                      href={`mailto:${APP_CONFIG.contact.email}`}
                      className="hover:text-brand-orange transition-colors"
                    >
                      {APP_CONFIG.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-brand-surface border border-brand-border flex items-center justify-center text-brand-orange shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-white block">
                      Operating Hours
                    </span>
                    <span>{APP_CONFIG.contact.hours}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Inquiry Form */}
          <div className="lg:col-span-7 bg-brand-navy rounded-2xl border border-brand-border p-6 sm:p-8 shadow-luxury-card">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-2xl font-bold text-white">Inquiry Received</h4>
                <p className="text-sm text-brand-silver max-w-md mx-auto">
                  Thank you, <strong className="text-white">{formData.name}</strong>. A
                  senior fleet advisor will reach out to your provided phone number and
                  email within 15 minutes.
                </p>
                <div className="pt-4">
                  <Button
                    variant="secondary"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        subject: 'Fleet Availability & Private Rental Inquiry',
                        message: '',
                      });
                    }}
                  >
                    Send Another Message
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-white mb-2">
                  Send a Direct Message
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-silver">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Richard Hawthorne"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-brand-surface border border-brand-border rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-orange"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-silver">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="client@domain.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-brand-surface border border-brand-border rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-orange"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-silver">
                      Contact Phone
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (310) 555-0144"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-brand-surface border border-brand-border rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-orange"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-silver">
                      Inquiry Type
                    </label>
                    <select
                      value={formData.subject}
                      onChange={e =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full bg-brand-surface border border-brand-border rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-orange"
                    >
                      <option value="Fleet Availability & Private Rental Inquiry">
                        Fleet Availability & Booking
                      </option>
                      <option value="Multi-Vehicle Corporate Event">
                        Corporate & Media Event
                      </option>
                      <option value="Long-term Exotic Lease">
                        Monthly / Long-term Lease
                      </option>
                      <option value="Other VIP Request">Other VIP Request</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-brand-silver">
                    Message / Special Vehicle Requirements
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide details about your desired rental dates, specific model preference, or special delivery logistics..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-brand-surface border border-brand-border rounded-xl p-4 text-sm text-white focus:outline-none focus:border-brand-orange"
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    size="lg"
                    icon={Send}
                    iconPosition="right"
                    className="w-full sm:w-auto"
                  >
                    Dispatch Message
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
