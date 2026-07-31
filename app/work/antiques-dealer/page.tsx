import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Antiques Dealer, Toronto — Public catalogue + private upload tool | Satya Roy",
  description:
    "Case study: a searchable public catalogue with filters, photos and pricing, plus a simple private upload tool for new arrivals, built for a Toronto antiques dealer.",
};

export default function AntiquesDealerPage() {
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
            Antiques Dealer, Toronto
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
            Public catalogue + private upload tool
          </h1>
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.pexels.com/photos/6827338/pexels-photo-6827338.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Antiques dealer"
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
            href="https://greens-antiques-catalog.vercel.app/"
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
              Inventory existed only in-store — no way to see what&apos;s in
              stock before visiting.
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
              A searchable public catalogue with filters, photos and
              pricing, plus a simple private upload tool for new arrivals.
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
              One core feature matched to the shop&apos;s daily rhythm —
              unpack new stock, get it online, nothing more complex.
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
              Customers browse the full current inventory before ever
              walking in; listing new stock takes minutes, not a developer.
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
