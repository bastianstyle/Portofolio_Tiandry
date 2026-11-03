import {
  IconCode,
  IconDeviceMobile,
  IconLayersIntersect,
  IconSparkles,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";

const icons = [
  <IconCode key="code" />,
  <IconLayersIntersect key="layers" />,
  <IconDeviceMobile key="mobile" />,
  <IconSparkles key="sparkles" />,
];

interface Feature {
  title: string;
  description: string;
}

export function FeaturesSectionWithHoverEffects({
  features,
}: {
  features: Feature[];
}) {
  return (
    <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {features.map((feature, index) => (
        <article
          key={feature.title}
          className={cn(
            "group/feature relative flex flex-col border-white/10 py-8 lg:py-9",
            index < 3 && "lg:border-r",
            index < 2 && "md:border-r",
            index < 2 && "md:border-b lg:border-b-0",
            index < 3 && "border-b md:border-b-0",
            index === 2 && "md:border-b lg:border-b-0",
          )}
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.045] to-transparent opacity-0 transition duration-300 group-hover/feature:opacity-100" />
          <div className="relative z-10 mb-5 px-7 text-accent">
            {icons[index]}
          </div>
          <h3 className="relative z-10 mb-2 px-7 font-display text-base font-semibold text-white">
            <span className="absolute inset-y-0 left-0 h-5 w-0.5 rounded-full bg-white/20 transition-all duration-300 group-hover/feature:h-7 group-hover/feature:bg-accent" />
            <span className="inline-block transition-transform duration-300 group-hover/feature:translate-x-1">
              {feature.title}
            </span>
          </h3>
          <p className="relative z-10 max-w-xs px-7 text-sm leading-6 text-white/50">
            {feature.description}
          </p>
        </article>
      ))}
    </div>
  );
}
