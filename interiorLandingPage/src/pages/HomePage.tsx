// src/pages/HomePage.tsx
import HeroSlider from '../components/hero/HeroSlider'
import PackageOffers from '../components/home/PackageOffers'
import AboutSection from '../components/home/AboutSection'
import WhyChooseUs from '../components/home/WhyChooseUs'
import ProjectsPreview from '../components/home/ProjectsPreview'
import ServicesDetail from '../components/home/ServicesDetail'
import ProcessSection from '../components/home/ProcessSection'
import GallerySection from '../components/home/GallerySection'
import TestimonialsSlider from '../components/home/TestimonialsSlider'
import ContactCTA from '../components/home/ContactCTA'
// import AudioButton from '../components/home/AudioButton'

export default function HomePage() {
  return (
    <>

        <HeroSlider />
        <PackageOffers />
        <AboutSection />
        <WhyChooseUs />
        <ProjectsPreview />
        <ServicesDetail />
        <ProcessSection />
        <GallerySection />
        <TestimonialsSlider />
        <ContactCTA />
       </>
  )
}