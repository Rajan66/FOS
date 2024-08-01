// app/(main)/layout.tsx
import "../globals.css";
import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Footer/Footer";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </section>
  );
}
