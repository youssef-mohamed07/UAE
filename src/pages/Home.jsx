import About from "../components/About";
import AppNav from "../components/AppNav";
import Check from "../components/Check";
import Client from "../components/Client";
import Contact from "../components/Contact";
import ContainerCar from "../components/ContainerCar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Questions from "../components/Questions";
import QuotationBtn from "../components/QuotationBtn";
import Services from "../components/Services";
import Sponsors from "../components/Sponsors";
import SubNav from "../components/SubNav";
import Team from "../components/Team";
import Track from "../components/Track";

function Home() {
  return (
    <div>
      <SubNav />
      <AppNav />
      <Hero />
      <Track />
      <About />
      <Services />
      <ContainerCar />
      <Sponsors />
      <Questions />
      <Team />
      <Check />
      <Client />
      <Contact />
      <Footer />
      <QuotationBtn />
    </div>
  );
}

export default Home;
