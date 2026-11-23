import { Compass, ArrowRight } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

export default function NotFound() {
  useDocumentTitle('404 — Page Not Found');

  return (
    <Container className="py-24 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="w-20 h-20 rounded-2xl bg-brand-surface border border-brand-border flex items-center justify-center text-brand-orange mx-auto shadow-glow-orange">
          <Compass
            className="w-10 h-10 animate-spin"
            style={{ animationDuration: '10s' }}
          />
        </div>

        <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">
          404 Error • Navigation Route Missing
        </span>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-white">Off the Map</h1>

        <p className="text-sm text-brand-silver leading-relaxed">
          The road you are looking for does not exist or has been relocated. Re-align your
          navigation and explore our current fleet.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
          <Button to="/" variant="secondary">
            Return Home
          </Button>
          <Button to="/cars" icon={ArrowRight} iconPosition="right">
            Browse All Fleet
          </Button>
        </div>
      </div>
    </Container>
  );
}
