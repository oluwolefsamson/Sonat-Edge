import SiteHeader from "../../components/Corporate/SiteHeader";
import Hero from "../../components/Corporate/Hero";
import About from "../../components/Corporate/About";
import Services from "../../components/Corporate/Services";
import Values from "../../components/Corporate/Values";
import Projects from "../../components/Corporate/Projects";
import Team from "../../components/Corporate/Team";
import Contact from "../../components/Corporate/Contact";
import SiteFooter from "../../components/Corporate/SiteFooter";

const Home = () => {
  return (
    <div id="top" className="relative bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.12),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.06),transparent_24%),linear-gradient(180deg,#020617_0%,#0f172a_56%,#111827_100%)]" />
      <SiteHeader />
      <Hero />
      <About />
      <Services />
      <Values />
      <Projects />
      <Team />
      <Contact />
      <SiteFooter />
    </div>
  );
};

export default Home;
