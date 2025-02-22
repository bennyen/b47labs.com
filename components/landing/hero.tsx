import { Hero1 } from "@/components/ui/block/hero1";

export default function Hero() {
    return (
        <Hero1
            badge="✨💕 Serving Cleveland Heights since 2024"
            heading="Software Solutions by B47 Labs"
            description="At B47 Labs, we specialize in custom software development, mobile apps, and IT solutions tailored to your needs. Let us help you save time, reduce costs, and grow your business."
            buttons={{
                primary: { text: "Get a Free Consultation", url: "/contact" },
                secondary: { text: "View Our Services", url: "#services" },
            }}
            image={{
                src: "/images/sumup-z6NLKuIFkqE-unsplash.jpg",
                alt: "B47 Labs - Custom Software Solutions",
            }}
        ></Hero1>
    );
}
