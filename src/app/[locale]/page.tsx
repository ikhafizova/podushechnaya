import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import BookingForm from "@/components/BookingForm";
import About from "@/components/About";
import Contacts from "@/components/Contacts";
import OrderSection from "@/components/OrderSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Menu />
        <OrderSection />
        <BookingForm />
        <Contacts />
      </main>
    </>
  );
}
