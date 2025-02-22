import Cta from "@/components/landing/cta";
import Feature from "@/components/landing/feature";
import Hero from "@/components/landing/hero";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <section className="sticky top-0 w-full bg-white shadow-md">
                {/* <Navbar></Navbar> */}
            </section>
            <main className=" items-center sm:items-start">
                <section id="hero">
                    <Hero></Hero>
                </section>

                <section id="services">
                    <Feature></Feature>
                </section>

                <section id="cta">
                    <Cta></Cta>
                </section>
            </main>
        </div>
    );
}
