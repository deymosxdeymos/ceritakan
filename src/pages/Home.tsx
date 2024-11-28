import { MainLayout } from "../components/layouts/MainLayout";
import { Hero } from "../components/home/Hero/Hero";
import { BenefitsSection } from "../components/home/BenefitsSection/BenefitsSection";
import { Strategi } from "../components/home/Strategi/Strategi";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <BenefitsSection />
      <Strategi />
    </MainLayout>
  );
}
