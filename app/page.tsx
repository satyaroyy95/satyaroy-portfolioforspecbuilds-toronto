import Carousel from "./components/Carousel";

export default function Home() {
  return (
    <div
      style={{
        fontFamily: "'Figtree', sans-serif",
        background: "oklch(0.975 0.006 80)",
        color: "oklch(0.15 0.008 75)",
        lineHeight: 1.5,
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
        <a
          href="#top"
          style={{
            fontWeight: 800,
            fontSize: 18,
            color: "oklch(0.15 0.008 75)",
            letterSpacing: "-0.01em",
          }}
        >
          Satya Roy
        </a>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 28,
            fontSize: 15,
            fontWeight: 600,
          }}
        >
          <a href="#work" style={{ color: "oklch(0.35 0.01 75)" }}>
            Work
          </a>
          <a href="#about" style={{ color: "oklch(0.35 0.01 75)" }}>
            About
          </a>
          <a href="#contact" style={{ color: "oklch(0.35 0.01 75)" }}>
            Contact
          </a>
        </div>
      </nav>

      <section
        id="top"
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding:
            "clamp(64px,10vw,120px) clamp(20px,5vw,48px) clamp(60px,8vw,100px)",
          display: "flex",
          flexDirection: "column",
          gap: 28,
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "oklch(0.5 0.1 75)",
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "oklch(0.5 0.1 75)",
            }}
          />
          Live demos, built speculatively, for real Ontario businesses
        </div>
        <h1
          style={{
            fontSize: "clamp(36px,6vw,64px)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            margin: 0,
            maxWidth: 820,
          }}
        >
          Effective solutions for specific business problems.
        </h1>
        <p
          style={{
            fontSize: 20,
            maxWidth: 640,
            color: "oklch(0.4 0.01 75)",
            margin: 0,
          }}
        >
          I build the tool before I ask for the meeting. Three small
          businesses, three real operational problems, three working demos —
          no pitch deck required.
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            marginTop: 8,
          }}
        >
          <a
            href="#work"
            style={{
              background: "oklch(0.15 0.008 75)",
              color: "oklch(0.98 0.005 80)",
              padding: "14px 28px",
              borderRadius: 8,
              fontWeight: 700,
              fontSize: 16,
            }}
          >
            See the work
          </a>
          <a
            href="#contact"
            style={{
              border: "1.5px solid oklch(0.78 0.008 75)",
              color: "oklch(0.15 0.008 75)",
              padding: "14px 28px",
              borderRadius: 8,
              fontWeight: 700,
              fontSize: 16,
            }}
          >
            Get in touch
          </a>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.pexels.com/photos/6177610/pexels-photo-6177610.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          style={{
            marginTop: 24,
            width: "100%",
            maxHeight: 420,
            objectFit: "cover",
            borderRadius: 16,
          }}
        />
      </section>

      <section
        id="work"
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "20px clamp(20px,5vw,48px) clamp(60px,8vw,120px)",
        }}
      >
        <h2
          style={{
            fontSize: 14,
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "oklch(0.48 0.01 75)",
            margin: "0 0 32px",
          }}
        >
          Selected builds
        </h2>

        <Carousel />
      </section>

      <section
        id="about"
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "clamp(64px,10vw,120px) clamp(20px,5vw,48px)",
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
          About
        </span>
        <h2
          style={{
            fontSize: "clamp(28px,4vw,40px)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            margin: "12px 0 32px",
          }}
        >
          Operational problem-solver, now building tools instead of just
          fixing process.
        </h2>
        <div
          style={{
            fontSize: 19,
            color: "oklch(0.3 0.01 75)",
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <p style={{ margin: 0 }}>
            I&apos;ve spent 11+ years managing high-stakes client
            relationships and fixing broken operational systems for brands
            like Kia, Nivea, and Nestlé — diagnosing bottlenecks and replacing
            manual chaos with structured, data-backed systems that actually
            hold up.
          </p>
          <p style={{ margin: 0 }}>
            Local Toronto businesses run into the same problems, just at a
            smaller scale: an inventory that only exists on paper, a quote
            process that&apos;s just a phone number, a catalogue split across
            two outdated websites. I build the tool before I ask for the
            meeting — I&apos;d rather show you exactly what&apos;s possible
            than describe it to you.
          </p>
          <p style={{ margin: 0 }}>
            Currently a Fractional CMO and Project Manager at SolvedAF,
            building AI-driven client workflows and content systems from the
            ground up. Long-term, I&apos;m working toward something bigger:
            building an empire that funds land, care, and dignity for rescued
            dogs everywhere.
          </p>
        </div>
        <div
          style={{
            marginTop: 48,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: 24,
            borderTop: "1px solid oklch(0.89 0.006 80)",
            paddingTop: 32,
          }}
        >
          <div>
            <p
              style={{
                fontSize: 28,
                fontWeight: 800,
                margin: "0 0 6px",
                color: "oklch(0.5 0.1 75)",
              }}
            >
              CAD $500k+
            </p>
            <p style={{ margin: 0, fontSize: 15, color: "oklch(0.45 0.01 75)" }}>
              Campaign budgets managed for national brands
            </p>
          </div>
          <div>
            <p
              style={{
                fontSize: 28,
                fontWeight: 800,
                margin: "0 0 6px",
                color: "oklch(0.5 0.1 75)",
              }}
            >
              4.5x
            </p>
            <p style={{ margin: 0, fontSize: 15, color: "oklch(0.45 0.01 75)" }}>
              Growth on a revenue line over two years
            </p>
          </div>
          <div>
            <p
              style={{
                fontSize: 28,
                fontWeight: 800,
                margin: "0 0 6px",
                color: "oklch(0.5 0.1 75)",
              }}
            >
              3 weeks
            </p>
            <p style={{ margin: 0, fontSize: 15, color: "oklch(0.45 0.01 75)" }}>
              To rebuild a client&apos;s task-management system, agency-wide
            </p>
          </div>
        </div>
      </section>

      <section
        id="contact"
        style={{
          background: "oklch(0.15 0.008 75)",
          color: "oklch(0.96 0.005 80)",
          padding: "clamp(64px,10vw,120px) clamp(20px,5vw,48px)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: 640,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
          }}
        >
          <span
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "oklch(0.72 0.11 75)",
            }}
          >
            Contact
          </span>
          <h2
            style={{
              fontSize: "clamp(28px,4vw,40px)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              margin: 0,
            }}
          >
            Have a problem like these?
          </h2>
          <p style={{ fontSize: 18, color: "oklch(0.75 0.005 80)", margin: 0 }}>
            If your business has a process held together by paper and phone
            calls, I&apos;d like to hear about it.
          </p>
          <a
            href="mailto:satyaroyy95@gmail.com"
            style={{
              marginTop: 12,
              background: "oklch(0.72 0.11 75)",
              color: "oklch(0.15 0.02 75)",
              padding: "16px 36px",
              borderRadius: 8,
              fontWeight: 700,
              fontSize: 17,
            }}
          >
            satyaroyy95@gmail.com
          </a>
        </div>
      </section>

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
