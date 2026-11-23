import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, Car, MapPin } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { REVIEWS_DATA } from '@/data/reviewsData';

export function ReviewSlideshow({ reviews = REVIEWS_DATA }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const total = reviews.length;

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex(prev => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex(prev => (prev - 1 + total) % total);
  }, [total]);

  const goToSlide = index => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Auto-play slideshow every 6 seconds unless hovered or paused
  useEffect(() => {
    if (isPaused || total <= 1) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide, total]);

  // Touch swipe handling
  const handleTouchStart = e => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = e => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const currentReview = reviews[currentIndex];

  const slideVariants = {
    enter: dir => ({
      x: dir > 0 ? 50 : -50,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
    },
    exit: dir => ({
      x: dir > 0 ? -50 : 50,
      opacity: 0,
      scale: 0.98,
      transition: { duration: 0.3, ease: 'easeInOut' },
    }),
  };

  return (
    <section className="relative py-8 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-brand-orange/10 blur-[130px] rounded-full pointer-events-none" />

      <Container>
        <SectionHeading
          eyebrow="Client Testimonials"
          title="Endorsed by Connoisseurs"
          subtitle="Discover what drivers, executives, and automotive collectors experience behind the wheel with DriveEase."
        />

        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main Slide Card Container */}
          <div className="relative min-h-[380px] sm:min-h-[330px] rounded-3xl bg-brand-surface/75 border border-brand-border/90 backdrop-blur-xl p-8 sm:p-12 shadow-luxury-card overflow-hidden">
            {/* Background luxury watermark icon */}
            <Quote className="absolute right-6 bottom-6 w-36 h-36 text-white/[0.03] pointer-events-none select-none" />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="relative z-10 flex flex-col justify-between h-full space-y-6"
              >
                {/* Header: Star Rating & Vehicle Rented Badge */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-1.5" aria-label={`${currentReview.rating} out of 5 stars`}>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < currentReview.rating
                            ? 'text-brand-orange fill-brand-orange'
                            : 'text-brand-border fill-transparent'
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-xs font-semibold text-brand-silver">
                      5.0 Verified Experience
                    </span>
                  </div>

                  {currentReview.carRented && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/25 text-brand-orange text-xs font-medium">
                      <Car className="w-3.5 h-3.5" />
                      <span>{currentReview.carRented}</span>
                    </div>
                  )}
                </div>

                {/* Body: Headline & Quote */}
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    &ldquo;{currentReview.title}&rdquo;
                  </h3>
                  <p className="text-base sm:text-lg text-brand-silver/95 leading-relaxed font-normal">
                    {currentReview.comment}
                  </p>
                </div>

                {/* Footer: Author Info & Location */}
                <div className="flex items-center justify-between pt-4 border-t border-brand-border/60">
                  <div className="flex items-center gap-4">
                    <img
                      src={currentReview.avatar}
                      alt={currentReview.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-brand-orange/40"
                    />
                    <div>
                      <h4 className="text-base font-bold text-white leading-tight">
                        {currentReview.name}
                      </h4>
                      <p className="text-xs text-brand-silver mt-0.5">
                        {currentReview.role}
                      </p>
                    </div>
                  </div>

                  <div className="hidden sm:flex items-center gap-1.5 text-xs text-brand-silver">
                    <MapPin className="w-3.5 h-3.5 text-brand-orange" />
                    <span>{currentReview.location}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Dots Pagination */}
            <div className="flex items-center gap-2.5">
              {reviews.map((rev, index) => {
                const isActive = index === currentIndex;
                return (
                  <button
                    key={rev.id || index}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      isActive
                        ? 'w-8 bg-brand-orange shadow-glow-orange'
                        : 'w-2.5 bg-brand-border hover:bg-brand-silver'
                    }`}
                  />
                );
              })}
            </div>

            {/* Counter and Arrows */}
            <div className="flex items-center gap-4">
              <span className="text-xs font-mono tracking-widest text-brand-silver">
                <span className="text-white font-bold">{String(currentIndex + 1).padStart(2, '0')}</span>
                {' / '}
                {String(total).padStart(2, '0')}
              </span>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous review"
                  className="w-10 h-10 rounded-xl bg-brand-surface border border-brand-border hover:border-brand-orange/50 hover:bg-brand-surface-elevated text-brand-silver hover:text-white flex items-center justify-center transition-all duration-200 active:scale-95"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next review"
                  className="w-10 h-10 rounded-xl bg-brand-surface border border-brand-border hover:border-brand-orange/50 hover:bg-brand-surface-elevated text-brand-silver hover:text-white flex items-center justify-center transition-all duration-200 active:scale-95"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ReviewSlideshow;
