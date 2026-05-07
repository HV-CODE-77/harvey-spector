const interStyle = { fontFamily: "var(--font-inter-var), Inter, sans-serif" };

/* ─── data ──────────────────────────────────────────────────────────────── */

const TESTIMONIALS = [
  {
    key: "marko",
    logo: "https://www.figma.com/api/mcp/asset/3feacc86-78e1-4a24-89e1-db4f397f84e5",
    logoW: 143, logoH: 19,
    quote:
      "A brilliant creative partner who transformed our vision into a unique, high-impact brand identity. Their ability to craft everything from custom mascots to polished logos is truly impressive.",
    name: "Marko Stojković",
    // desktop
    left: "50px", top: 112, rotate: "-6.85deg",
    // mobile
    mobileRotate: "-3.5deg",
  },
  {
    key: "lukas",
    logo: "https://www.figma.com/api/mcp/asset/7cd01b69-43f8-447f-ab17-33ad59be7c70",
    logoW: 138, logoH: 19,
    quote:
      "Professional, precise, and incredibly fast at handling complex product visualizations and templates.",
    name: "Lukas Weber",
    left: "calc(46.9% + 55px)", top: 222, rotate: "2.9deg",
    mobileRotate: "2deg",
  },
  {
    key: "sarah",
    logo: "https://www.figma.com/api/mcp/asset/25d959d1-01c8-4934-923d-f32e907aac81",
    logoW: 109, logoH: 31,
    quote:
      "A strategic partner who balances stunning aesthetics with high-performance UX for complex platforms. They don't just make things look good; they solve business problems through visual clarity.",
    name: "Sarah Jenkins",
    left: "21.2%", top: 553, rotate: "2.23deg",
    mobileRotate: "-2.5deg",
  },
  {
    key: "sofia",
    logo: "https://www.figma.com/api/mcp/asset/4fda7514-0b4e-428b-987a-541bd0cfbdaf",
    logoW: 81, logoH: 36,
    quote:
      "An incredibly versatile designer who delivers consistent quality across a wide range of styles and formats.",
    name: "Sofia Martínez",
    left: "68.5%", top: 546, rotate: "-4.15deg",
    mobileRotate: "2deg",
  },
];

/* ─── shared card ────────────────────────────────────────────────────────── */

function Card({
  logo, logoW, logoH, quote, name, width = 353,
}: {
  logo: string; logoW: number; logoH: number;
  quote: string; name: string; width?: number;
}) {
  return (
    <div
      className="bg-[#f1f1f1] border border-[#ddd] flex flex-col gap-4 items-start p-6 rounded-[4px] flex-none"
      style={{ width }}
    >
      <img src={logo} alt="" style={{ width: logoW, height: logoH }} className="block flex-none" />
      <p className="text-[18px] text-[#1f1f1f] tracking-[-0.72px] leading-[1.3]" style={interStyle}>
        {quote}
      </p>
      <p className="font-black text-[16px] text-black tracking-[-0.64px] uppercase whitespace-nowrap leading-[1.1]" style={interStyle}>
        {name}
      </p>
    </div>
  );
}

/* ─── component ──────────────────────────────────────────────────────────── */

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white">

      {/* ── Desktop — giant heading with scattered tilted cards ── */}
      <div className="hidden md:block relative overflow-hidden" style={{ minHeight: 880 }}>

        {/* Lukas renders BEFORE the heading — heading text overlays on top of it */}
        {TESTIMONIALS.filter((t) => t.key === "lukas").map((t) => (
          <div key={t.key} className="absolute" style={{ left: t.left, top: t.top }}>
            <div style={{ transform: `rotate(${t.rotate})` }}>
              <Card logo={t.logo} logoW={t.logoW} logoH={t.logoH} quote={t.quote} name={t.name} />
            </div>
          </div>
        ))}

        {/* Heading sits above Lukas, below the remaining cards */}
        <div className="absolute inset-0 flex items-center justify-center px-8">
          <p
            className="font-medium text-black text-center capitalize leading-[1.1]"
            style={{
              ...interStyle,
              fontSize: "clamp(80px, 13.75vw, 198px)",
              letterSpacing: "-0.07em",
            }}
          >
            Testimonials
          </p>
        </div>

        {/* Remaining cards render AFTER heading — they sit on top of the text */}
        {TESTIMONIALS.filter((t) => t.key !== "lukas").map((t) => (
          <div key={t.key} className="absolute" style={{ left: t.left, top: t.top }}>
            <div style={{ transform: `rotate(${t.rotate})` }}>
              <Card logo={t.logo} logoW={t.logoW} logoH={t.logoH} quote={t.quote} name={t.name} />
            </div>
          </div>
        ))}
      </div>

      {/* ── Mobile — heading + horizontal scroll of tilted cards ── */}
      <div className="md:hidden flex flex-col gap-8 px-4 py-16 overflow-hidden">

        {/* Heading */}
        <p
          className="font-medium text-black capitalize leading-[0.8]"
          style={{ ...interStyle, fontSize: "64px", letterSpacing: "-4.48px" }}
        >
          Testimonials
        </p>

        {/* Horizontal scroll strip */}
        <div
          className="flex items-center overflow-x-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" } as React.CSSProperties}
        >
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.key}
              className="flex-none"
              style={{ marginRight: i < TESTIMONIALS.length - 1 ? -10 : 0 }}
            >
              <div style={{ transform: `rotate(${t.mobileRotate})` }}>
                <Card
                  logo={t.logo}
                  logoW={t.logoW}
                  logoH={t.logoH}
                  quote={t.quote}
                  name={t.name}
                  width={260}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
