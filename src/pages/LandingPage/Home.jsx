import SiteHeader from "../../components/Corporate/SiteHeader";
import Hero from "../../components/Corporate/Hero";
import About from "../../components/Corporate/About";
import Services from "../../components/Corporate/Services";
import Values from "../../components/Corporate/Values";
import Projects from "../../components/Corporate/Projects";
import Testimonial from "../../components/Corporate/Testimonial";
import Team from "../../components/Corporate/Team";
import Contact from "../../components/Corporate/Contact";
import SiteFooter from "../../components/Corporate/SiteFooter";

const Home = () => {
  return (
    <div id="top" className="relative bg-[#f7f4ef] text-slate-900">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(148,163,184,0.12),transparent_30%),linear-gradient(180deg,#f7f4ef_0%,#f3efe7_100%)]" />
      <SiteHeader />
      <Hero />
      <About />
      <Services />
      <Values />
      <Projects />
      <Testimonial />
      <Team />
      <Contact />
      <SiteFooter />
    </div>
  );
};

export default Home;
