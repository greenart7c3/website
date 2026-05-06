import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { AmberSection } from '@/components/AmberSection';
import { CitrineSection } from '@/components/CitrineSection';
import { MorganiteSection } from '@/components/MorganiteSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { ReleasesSection } from '@/components/ReleasesSection';
import { DownloadSection } from '@/components/DownloadSection';
import { Footer } from '@/components/Footer';

export function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AmberSection />
        <CitrineSection />
        <MorganiteSection />
        <FeaturesSection />
        <ReleasesSection />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}
