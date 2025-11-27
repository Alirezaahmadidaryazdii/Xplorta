import ScrollNavigator from "./components/ScrollNavigator";
import AboutUs from "./sections/about-us";
import CardBlogs from "./sections/CardBlogs";
import Comments from "./sections/Comments";
import { GlowCurveSection } from "./sections/GlowCurveSection";
import Hero from "./sections/Hero";
import ListCard from "./sections/ListCard";
import Socials from "./sections/Socials";

export default function Home() {
  return (
    <div className="bg-background text-text-primary relative">
      <ScrollNavigator />      
      <section className="section-scroll" id="overview">
        <Hero />
      </section>

      <section className="section-scroll" id="platforms">
        <Socials />
      </section>

      <section className="section-scroll" id="insights">
        <CardBlogs />
      </section>

      <section className="section-scroll" id="usecases">
        <ListCard />
      </section>

      <section className="section-scroll" id="comments">
        <Comments />
      </section>

      <section className="section-scroll" id="blogs">
        <AboutUs />
      </section>

      <section className="section-scroll" id="getstarted">
        <GlowCurveSection />
      </section>
    </div>
  );
}