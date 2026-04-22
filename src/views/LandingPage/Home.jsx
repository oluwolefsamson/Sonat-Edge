import Hero from "../../components/Corporate/Hero";
import About from "../../components/Corporate/About";
import Services from "../../components/Corporate/Services";
import Values from "../../components/Corporate/Values";
import Projects from "../../components/Corporate/Projects";
import Team from "../../components/Corporate/Team";
import Testimonials from "../../components/Corporate/Testimonials";
import FAQ from "../../components/Corporate/FAQ";
import Contact from "../../components/Corporate/Contact";

const Home = () => {
  return (
    <div id="top" className="relative bg-[#f7f4ef] text-slate-900">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(148,163,184,0.12),transparent_30%),linear-gradient(180deg,#f7f4ef_0%,#f3efe7_100%)]" />
      <Hero />
      <About />
      <Services />
      <Values />
      <Projects />
      <Team />
      <Testimonials />
      <FAQ />
      <Contact />
    </div>
  );
};

export default Home;
