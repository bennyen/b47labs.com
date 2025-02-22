import { Cta11 } from "@/components/ui/block/cta11";

export default function Cta() {
  return (
    <div >
    <Cta11
        heading="Ready to Transform Your Business?"
        description="Let B47 Labs help you save time, reduce costs, and grow with custom software solutions. Schedule a free consultation today!"
        buttons={{
            primary: { text: "Get Started", url: "/contact" },
            secondary: { text: "Learn More", url: "#services" },
        }}
    ></Cta11>
    </div>
  );
}