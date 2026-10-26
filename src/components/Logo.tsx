import { cn } from "@/lib/utils";
import { SITE } from "@/content/site";

/**
 * Shared brand logo — colorful equalizer bars + wordmark.
 * tone: "light" (on dark bg), "dark" (on light bg), "gradient" (intro screen)
 */
export default function Logo({
  tone = "light",
  className,
  tagline = true,
}: {
  tone?: "light" | "dark" | "gradient";
  className?: string;
  tagline?: boolean;
}) {
  const bars = [10, 16, 22, 14, 7];
  const barColors = ["#38bdf8", "#6366f1", "#a855f7", "#ec4899", "#f59e0b"];

  return (
    <div className={cn("flex flex-col items-start gap-1", className)}>
      <div className="flex items-center gap-2.5">
        <div className="flex items-end gap-[3px]">
          {bars.map((h, i) => (
            <span
              key={i}
              className="w-[3px] rounded-full"
              style={{ height: `${h}px`, backgroundColor: barColors[i] }}
            />
          ))}
        </div>
        <span
          className={cn(
            "font-display  text-lg font-extrabold leading-none tracking-[0.12em]",
            tone === "light" && "text-white",
            tone === "dark" && "text-white",
            tone === "gradient" && "text-gradient-brand",
          )}
        >
          {SITE.brand.name}
        </span>
      </div>
      {tagline && (
        <span
          className={cn(
            "pl-[calc(12px+2.5px+0.4rem)] text-[8px] font-semibold tracking-[0.32em] uppercase",
            tone === "light" ? "text-white/80" : tone === "dark" ? "text-muted-foreground" : "text-white/70",
          )}
        >
          {SITE.brand.tagline}
        </span>
      )}
    </div>
  );
}
