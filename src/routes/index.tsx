import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/portfolio/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ashutosh Sharma — Mechanical Engineer (EIT)" },
      { name: "description", content: "Portfolio of Ashutosh Sharma — CAD, CFD, thermal systems, and computational simulation across Canada, Nepal, and India." },
      { property: "og:title", content: "Ashutosh Sharma — Mechanical Engineer (EIT)" },
      { property: "og:description", content: "Bridging advanced mechanical design, thermal fluid dynamics, and computational simulation." },
    ],
  }),
  component: Portfolio,
});
