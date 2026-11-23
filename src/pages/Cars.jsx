import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { CarCard } from '@/features/cars/components/CarCard';
import { getAllCars } from '@/features/cars/services/carService';
import { VEHICLE_CATEGORIES } from '@/lib/constants';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { cn } from '@/utils/cn';

export default function Cars() {
  useDocumentTitle('Our Exotic Fleet');
  const [cars, setCars] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllCars().then(data => {
      setCars(data);
      setLoading(false);
    });
  }, []);

  const filteredCars = cars.filter(car => {
    const matchesCategory =
      selectedCategory === 'All' || car.category === selectedCategory;
    const matchesQuery =
      car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.brand.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="pb-16">
      <Container>
        <SectionHeading
          eyebrow="The DriveEase Fleet"
          title="Engineered For Distinction"
          subtitle="Discover our selection of meticulously maintained exotic and luxury vehicles available for daily, weekly, or monthly rental."
        />

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-brand-border/60">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {VEHICLE_CATEGORIES.map(category => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  'px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer',
                  selectedCategory === category
                    ? 'bg-brand-orange text-white shadow-glow-orange'
                    : 'bg-brand-surface text-brand-silver hover:text-white hover:bg-brand-surface-elevated border border-brand-border'
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-brand-silver absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search Lamborghini, Ferrari..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full bg-brand-surface border border-brand-border rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-brand-silver/60 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors"
            />
          </div>
        </div>

        {/* Vehicle Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div
                key={i}
                className="h-96 rounded-2xl bg-brand-surface/40 animate-pulse border border-brand-border"
              />
            ))}
          </div>
        ) : filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map(car => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-brand-surface/30 rounded-2xl border border-brand-border">
            <p className="text-lg font-semibold text-white">No vehicles found</p>
            <p className="text-sm text-brand-silver mt-1">
              Try adjusting your category filter or search terms.
            </p>
          </div>
        )}
      </Container>
    </div>
  );
}
