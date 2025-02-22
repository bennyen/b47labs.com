import { Feature43 } from "@/components/ui/block/feature43";
import { Globe, Smartphone, Settings, Headphones, Shield, Zap } from "lucide-react";

export default function Hero() {
  return (
    <Feature43
      heading="What Could We Do For Your Business?"
      reasons={[
        {
          title: "Custom Website Development",
          description:
            "Build a stunning, mobile-friendly website that attracts customers and boosts sales. Perfect for e-commerce stores, portfolios, or business sites.",
          icon: <Globe className="size-6" />,
        },
        {
          title: "Mobile App Creation",
          description:
            "Create a custom app to engage customers, streamline orders, or manage loyalty programs. Ideal for restaurants, retailers, and service providers.",
          icon: <Smartphone className="size-6" />,
        },
        {
          title: "Business Process Automation",
          description:
            "Automate repetitive tasks like invoicing, inventory tracking, or customer follow-ups. Save hours every week and reduce errors.",
          icon: <Settings className="size-6" />,
        },
        {
          title: "IT Consulting & Support",
          description:
            "Get expert advice on tech upgrades, system migrations, or ongoing IT support. We’ll keep your business running smoothly.",
          icon: <Headphones className="size-6" />,
        },
        {
          title: "Cybersecurity Solutions",
          description:
            "Protect your business from hackers, data breaches, and ransomware. We’ll secure your systems and give you peace of mind.",
          icon: <Shield className="size-6" />,
        },
        {
          title: "Efficiency",
          description:
            "Optimize your workflows and tools to save time and money. Focus on growing your business while we handle the tech.",
          icon: <Zap className="size-6" />,
        },
      ]}
    ></Feature43>
  );
}