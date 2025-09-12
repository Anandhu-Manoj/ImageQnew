import About from "@/Components/About";
import Approach from "@/Components/Approach";
import Clients from "@/Components/Clients";
import Consultation from "@/Components/Consultation";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import Impact from "@/Components/Impact";
import ImpactCards from "@/Components/ImpactCards";
import Nav from "@/Components/Nav";

export default function Home() {
  return (
    <div className="h-screen bg-gradient">
      <Nav />

      {/* hero section */}

      <section className="hero flex flex-col">
        <Hero />
        <Clients />
      </section>
      {/* what we do section */}
      <section className="about w-screen flex justify-center items-center  ">
        <About />
      </section>

      {/* imapct section */}
      <section className="impact w-screen flex justify-center flex-col items-center  ">
        <Impact />
        <div className="container">
          <ImpactCards />
        </div>
      </section>

      {/* Approaches section */}
      <section className="Approach w-screen flex justify-center flex-col items-center ">
        <Approach />
      </section>


      {/* Booking consultation */}
      <section className="flex justify-center items-center flex-col m-10">
        <Consultation/>
      </section>
      <Footer />
    </div>
  );
}
