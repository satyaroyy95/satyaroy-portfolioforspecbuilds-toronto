import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Muunstone Group — Full landing page redesign | Satya Roy",
  description:
    "Case study: a full landing page redesign for a boutique strategy consulting firm — reworked photography, tightened copy, and two clearly differentiated service offerings.",
};

export default function MuunstonePage() {
  return (
    <div
      style={{
        fontFamily: "'Figtree',sans-serif",
        background: "oklch(0.975 0.006 80)",
        color: "oklch(0.15 0.008 75)",
        lineHeight: 1.5,
        minHeight: "100vh",
      }}
    >
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
          padding: "20px clamp(20px,5vw,48px)",
          background: "oklch(0.975 0.006 80 / 0.9)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid oklch(0.89 0.006 80)",
        }}
      >
        <Link
          href="/"
          style={{
            fontWeight: 800,
            fontSize: 18,
            color: "oklch(0.15 0.008 75)",
            letterSpacing: "-0.01em",
          }}
        >
          Satya Roy
        </Link>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 28,
            fontSize: 15,
            fontWeight: 600,
          }}
        >
          <Link href="/#work" style={{ color: "oklch(0.35 0.01 75)" }}>
            Work
          </Link>
          <Link href="/#about" style={{ color: "oklch(0.35 0.01 75)" }}>
            About
          </Link>
          <Link href="/#contact" style={{ color: "oklch(0.35 0.01 75)" }}>
            Contact
          </Link>
        </div>
      </nav>

      <article
        style={{
          maxWidth: 800,
          margin: "0 auto",
          padding: "clamp(48px,8vw,80px) clamp(20px,5vw,48px) clamp(64px,10vw,120px)",
          display: "flex",
          flexDirection: "column",
          gap: 28,
        }}
      >
        <Link
          href="/#work"
          style={{
            fontSize: 14,
            fontWeight: 700,
            color: "oklch(0.5 0.1 75)",
          }}
        >
          ← Back to work
        </Link>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <span
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "oklch(0.5 0.1 75)",
            }}
          >
            Boutique Strategy Consulting Firm
          </span>
          <h1
            style={{
              margin: 0,
              fontSize: "clamp(32px,5vw,48px)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            Full landing page redesign
          </h1>
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://muunstone.vercel.app/images/hero.webp"
          alt="Macro detail of moonstone with copper veining"
          style={{
            width: "100%",
            maxHeight: 420,
            objectFit: "cover",
            borderRadius: 16,
          }}
        />

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <a
            href="https://muunstone.vercel.app/"
            target="_blank"
            rel="noopener"
            style={{
              background: "oklch(0.15 0.008 75)",
              color: "oklch(0.98 0.005 80)",
              padding: "14px 28px",
              borderRadius: 8,
              fontWeight: 700,
              fontSize: 16,
            }}
          >
            View live demo ↗
          </a>
          <a
            href="https://www.muunstone.com/"
            target="_blank"
            rel="noopener"
            style={{
              border: "1.5px solid oklch(0.78 0.008 75)",
              color: "oklch(0.15 0.008 75)",
              padding: "14px 28px",
              borderRadius: 8,
              fontWeight: 700,
              fontSize: 16,
            }}
          >
            View before ↗
          </a>
        </div>

        <div
          style={{
            fontSize: 19,
            color: "oklch(0.3 0.01 75)",
            display: "flex",
            flexDirection: "column",
            gap: 24,
            marginTop: 8,
            borderTop: "1px solid oklch(0.89 0.006 80)",
            paddingTop: 32,
          }}
        >
          <div>
            <h2
              style={{
                margin: "0 0 8px",
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "oklch(0.15 0.008 75)",
              }}
            >
              Problem
            </h2>
            <p style={{ margin: 0 }}>
              The original landing page used generic corporate-consulting
              visual language — a repeated logo watermark stamped across
              every hero photo, a flat SaaS-blue palette, three templated
              service blocks with near-identical structure, and an
              inconsistent client-logo grid — none of which reflected the
              firm&apos;s actual boutique, high-touch positioning.
            </p>
          </div>
          <div>
            <h2
              style={{
                margin: "0 0 8px",
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "oklch(0.15 0.008 75)",
              }}
            >
              What I built
            </h2>
            <p style={{ margin: 0 }}>
              A full landing page redesign — reworked photography tied to
              the firm&apos;s own identity (mineral/copper imagery echoing
              the name itself) instead of generic stock, tightened editorial
              copy, two clearly differentiated service offerings instead of
              repeated blocks, and removal of the watermark.
            </p>
          </div>
          <div>
            <h2
              style={{
                margin: "0 0 8px",
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "oklch(0.15 0.008 75)",
              }}
            >
              Why this approach
            </h2>
            <p style={{ margin: 0 }}>
              Thought about the redesign from what &quot;boutique&quot;
              actually signals visually — restraint and thematic
              specificity — rather than layering on more generic corporate
              polish.
            </p>
          </div>
          <div>
            <h2
              style={{
                margin: "0 0 8px",
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "oklch(0.15 0.008 75)",
              }}
            >
              What changed
            </h2>
            <p style={{ margin: 0 }}>
              The site now reads as a distinct, considered brand instead of
              a templated consulting site, matching the firm&apos;s premium
              positioning.
            </p>
          </div>
        </div>
      </article>

      <footer
        style={{
          padding: "32px clamp(20px,5vw,48px)",
          textAlign: "center",
          fontSize: 14,
          color: "oklch(0.5 0.01 75)",
        }}
      >
        © 2026 · Built the tool before the meeting.
      </footer>
    </div>
  );
}
