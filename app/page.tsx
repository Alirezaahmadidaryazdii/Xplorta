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
      <section className="section-scroll">
        <Hero />
      </section>

      <section className="section-scroll" id="products">
        <Socials />
      </section>

      <section className="section-scroll" id="pricing">
        <CardBlogs />
      </section>

      <section className="section-scroll" id="company">
        <ListCard />
      </section>

      <section className="section-scroll" id="blog">
        <Comments />
      </section>

      <section className="section-scroll" id="changelog">
        <AboutUs />
      </section>

      <section className="section-scroll">
        <GlowCurveSection />
      </section>
    </div>
  );
}