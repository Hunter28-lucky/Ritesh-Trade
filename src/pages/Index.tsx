import Navigation from "@/components/Navigation";
import HeroNew from "@/components/HeroNew";
import AboutNew from "@/components/AboutNew";
import ServicesNew from "@/components/ServicesNew";
import Performance from "@/components/Performance";
import ContactNew from "@/components/ContactNew";
import FooterNew from "@/components/FooterNew";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroNew />
      <AboutNew />
      <ServicesNew />
      <Performance />
      <ContactNew />
      <FooterNew />
    </main>
  );
};

export default Index;
