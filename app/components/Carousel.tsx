"use client";

import { useRef, useState } from "react";

type Slide = {
  href: string;
  eyebrow: string;
  title: string;
  problem: string;
  built: string;
  why: string;
  changed: string;
  image: string;
  imageAlt: string;
  imageFirst: boolean;
};

const slides: Slide[] = [
  {
    href: "https://greens-antiques-catalog.vercel.app/",
    eyebrow: "Antiques Dealer, Toronto",
    title: "Public catalogue + private upload tool",
    problem:
      "Inventory existed only in-store — no way to see what's in stock before visiting.",
    built:
      "A searchable public catalogue with filters, photos and pricing, plus a simple private upload tool for new arrivals.",
    why: "One core feature matched to the shop's daily rhythm — unpack new stock, get it online, nothing more complex.",
    changed:
      "Customers browse the full current inventory before ever walking in; listing new stock takes minutes, not a developer.",
    image:
      "https://images.pexels.com/photos/6827338/pexels-photo-6827338.jpeg?auto=compress&cs=tinysrgb&w=1600",
    imageAlt: "Antiques dealer",
    imageFirst: false,
  },
  {
    href: "https://99frames-quote-form.vercel.app/",
    eyebrow: "Custom Framing Studio",
    title: "Guided multi-step quote form",
    problem:
      'Every quote request started as a bare "contact us" — size, style, mat and glazing all chased down manually.',
    built:
      "A guided, multi-step quote form — photo upload, dimensions, frame style, mat, glazing, notes, contact details — in one submission.",
    why: "Removes the back-and-forth entirely; every request that lands is already quotable.",
    changed:
      "A vague inquiry becomes a complete, ready-to-quote request in a single submission.",
    image:
      "https://images.pexels.com/photos/5905067/pexels-photo-5905067.jpeg?auto=compress&cs=tinysrgb&w=1600",
    imageAlt: "Custom framing studio",
    imageFirst: true,
  },
  {
    href: "https://web-seven-gold-32.vercel.app/",
    eyebrow: "Rare Book & Fine Art Dealer",
    title: "Unified searchable catalogue, ~21,000 items",
    problem:
      "~21,000 items split across two outdated websites, most without images, no way to search by keyword, category or price.",
    built:
      "One unified, searchable catalogue with category and price-range filtering across the entire inventory.",
    why: "Consolidation into a single link and search experience, instead of two disconnected sites.",
    changed:
      "The whole inventory now lives in one place — searchable and filterable — instead of split across two disjointed systems.",
    image:
      "https://images.pexels.com/photos/18361685/pexels-photo-18361685.jpeg?auto=compress&cs=tinysrgb&w=1600",
    imageAlt: "Rare book and fine art dealer",
    imageFirst: false,
  },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState<boolean[]>(
    slides.map(() => false)
  );
  const trackRef = useRef<HTMLDivElement>(null);

  const goTo = (i: number) => {
    const el = trackRef.current;
    if (el) el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
    setIndex(i);
  };
  const next = () => goTo(Math.min(slides.length - 1, index + 1));
  const prev = () => goTo(Math.max(0, index - 1));

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const i = Math.round(el.scrollLeft / el.clientWidth);
    if (i !== index) setIndex(i);
  };

  const toggleExpand = (i: number, e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setExpanded((prev) => {
      const next = prev.slice();
      next[i] = !next[i];
      return next;
    });
  };

  return (
    <div style={{ position: "relative" }}>
      <div
        ref={trackRef}
        onScroll={handleScroll}
        style={{
          display: "flex",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          borderRadius: 16,
          border: "1px solid oklch(0.89 0.006 80)",
        }}
      >
        {slides.map((slide, i) => (
          <div
            key={slide.href}
            style={{
              width: "100%",
              flexShrink: 0,
              scrollSnapAlign: "start",
              background: "oklch(1 0 0)",
            }}
          >
            <a
              href={slide.href}
              target="_blank"
              rel="noopener"
              style={{
                display: "grid",
                gridTemplateColumns: slide.imageFirst ? "1fr 1.1fr" : "1.1fr 1fr",
                gap: 0,
                color: "inherit",
              }}
            >
              {slide.imageFirst && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={slide.image}
                  alt={slide.imageAlt}
                  style={{
                    width: "100%",
                    height: "100%",
                    minHeight: 280,
                    objectFit: "cover",
                  }}
                />
              )}
              <div
                style={{
                  padding: "clamp(28px,4vw,56px)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "oklch(0.5 0.1 75)",
                  }}
                >
                  {slide.eyebrow}
                </span>
                <h3
                  style={{
                    margin: 0,
                    fontSize: "clamp(22px,2.5vw,28px)",
                    fontWeight: 800,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {slide.title}
                </h3>
                <p style={{ margin: 0, fontSize: 16, color: "oklch(0.4 0.01 75)" }}>
                  <strong>Problem:</strong> {slide.problem}
                </p>
                <p style={{ margin: 0, fontSize: 16, color: "oklch(0.4 0.01 75)" }}>
                  <strong>What I built:</strong> {slide.built}
                </p>
                {expanded[i] && (
                  <>
                    <p
                      style={{
                        margin: 0,
                        fontSize: 16,
                        color: "oklch(0.4 0.01 75)",
                      }}
                    >
                      <strong>Why this approach:</strong> {slide.why}
                    </p>
                    <p
                      style={{
                        margin: 0,
                        fontSize: 16,
                        color: "oklch(0.4 0.01 75)",
                      }}
                    >
                      <strong>What changed:</strong> {slide.changed}
                    </p>
                  </>
                )}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    gap: 20,
                    marginTop: 8,
                  }}
                >
                  <button
                    onClick={(e) => toggleExpand(i, e)}
                    style={{
                      background: "none",
                      border: "none",
                      padding: 0,
                      fontWeight: 700,
                      fontSize: 15,
                      color: "oklch(0.15 0.008 75)",
                      cursor: "pointer",
                      textDecoration: "underline",
                    }}
                  >
                    {expanded[i] ? "Show less" : "Read more"}
                  </button>
                  <span
                    style={{
                      background: "oklch(0.15 0.008 75)",
                      color: "oklch(0.98 0.005 80)",
                      padding: "12px 24px",
                      borderRadius: 8,
                      fontWeight: 700,
                      fontSize: 15,
                    }}
                  >
                    View live demo ↗
                  </span>
                </div>
              </div>
              {!slide.imageFirst && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={slide.image}
                  alt={slide.imageAlt}
                  style={{
                    width: "100%",
                    height: "100%",
                    minHeight: 280,
                    objectFit: "cover",
                  }}
                />
              )}
            </a>
          </div>
        ))}
      </div>

      <button
        onClick={(e) => {
          e.preventDefault();
          prev();
        }}
        aria-label="Previous"
        style={{
          position: "absolute",
          left: -20,
          top: "50%",
          transform: "translateY(-50%)",
          width: 44,
          height: 44,
          borderRadius: "50%",
          border: "1px solid oklch(0.89 0.006 80)",
          background: "oklch(1 0 0)",
          fontSize: 18,
          fontWeight: 700,
          cursor: "pointer",
          boxShadow: "0 4px 12px oklch(0.2 0.01 75 / 0.08)",
        }}
      >
        ←
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          next();
        }}
        aria-label="Next"
        style={{
          position: "absolute",
          right: -20,
          top: "50%",
          transform: "translateY(-50%)",
          width: 44,
          height: 44,
          borderRadius: "50%",
          border: "1px solid oklch(0.89 0.006 80)",
          background: "oklch(1 0 0)",
          fontSize: 18,
          fontWeight: 700,
          cursor: "pointer",
          boxShadow: "0 4px 12px oklch(0.2 0.01 75 / 0.08)",
        }}
      >
        →
      </button>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 10,
          marginTop: 24,
        }}
      >
        {slides.map((slide, i) => (
          <button
            key={slide.href}
            onClick={(e) => {
              e.preventDefault();
              goTo(i);
            }}
            aria-label={`Slide ${i + 1}`}
            style={{
              width: index === i ? 28 : 10,
              height: 10,
              borderRadius: 5,
              border: "none",
              background:
                index === i
                  ? "oklch(0.15 0.008 75)"
                  : "oklch(0.85 0.006 80)",
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </div>
  );
}
