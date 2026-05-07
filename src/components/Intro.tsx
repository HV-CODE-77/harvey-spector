export default function Intro() {
  const bigTextStyle = {
    fontFamily: "var(--font-inter-var), Inter, sans-serif",
  };

  const ampStyle = {
    fontFamily:
      "var(--font-playfair), 'Playfair Display', Georgia, serif",
    fontStyle: "italic" as const,
    fontWeight: 400,
    textTransform: "none" as const,
  };

  return (
    <section id="intro" className="bg-white">
      {/* ── Desktop (1:33) ── */}
      <div className="hidden md:block px-8 py-[120px]">
        <div className="flex flex-col gap-6 w-full">

          {/* [ 8+ years in industry ] + rule */}
          <div className="flex flex-col gap-3 items-end">
            <p
              className="font-mono text-[14px] leading-[1.1] text-[#1f1f1f] uppercase text-right"
              style={{ fontFamily: "var(--font-geist-mono), monospace" }}
            >
              [ 8+ years in industry ]
            </p>
            <div className="w-full h-px bg-[#1f1f1f]" />
          </div>

          {/* Staggered big type */}
          <div className="flex flex-col gap-2 items-start w-full">

            {/* Row 1 — A CREATIVE DIRECTOR   / + 001 */}
            <div className="flex items-start gap-3 w-full uppercase">
              <p
                className="font-light leading-[0.84] tracking-[-0.08em] uppercase whitespace-pre text-black"
                style={{ ...bigTextStyle, fontSize: "clamp(40px,6.67vw,96px)" }}
              >
                {`A creative director   /`}
              </p>
              <p
                className="font-mono text-[14px] leading-[1.1] text-[#1f1f1f] flex-none pt-1"
                style={{ fontFamily: "var(--font-geist-mono), monospace" }}
              >
                001
              </p>
            </div>

            {/* Row 2 — PHOTOGRAPHER */}
            <div className="pl-[15.5%] uppercase">
              <p
                className="font-light leading-[0.84] tracking-[-0.08em] uppercase whitespace-nowrap text-black"
                style={{ ...bigTextStyle, fontSize: "clamp(40px,6.67vw,96px)" }}
              >
                Photographer
              </p>
            </div>

            {/* Row 3 — BORN & RAISED */}
            <div className="pl-[44%] uppercase">
              <p
                className="font-light leading-[0.84] tracking-[-0.08em] uppercase whitespace-nowrap text-black"
                style={{ ...bigTextStyle, fontSize: "clamp(40px,6.67vw,96px)" }}
              >
                Born <span style={ampStyle}>&amp;</span> raised
              </p>
            </div>

            {/* Row 4 — ON THE SOUTH SIDE */}
            <div className="uppercase">
              <p
                className="font-light leading-[0.84] tracking-[-0.08em] uppercase whitespace-nowrap text-black"
                style={{ ...bigTextStyle, fontSize: "clamp(40px,6.67vw,96px)" }}
              >
                on the south side
              </p>
            </div>

            {/* Row 5 — OF CHICAGO. + [ creative freelancer ] */}
            <div className="pl-[44%] relative uppercase w-full">
              <p
                className="font-light leading-[0.84] tracking-[-0.08em] uppercase whitespace-nowrap text-black"
                style={{ ...bigTextStyle, fontSize: "clamp(40px,6.67vw,96px)" }}
              >
                of chicago.
              </p>
              <p
                className="absolute font-mono text-[14px] leading-[1.1] text-[#1f1f1f] whitespace-nowrap"
                style={{ fontFamily: "var(--font-geist-mono), monospace", left: "78.4%", top: "26px" }}
              >
                [ creative freelancer ]
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* ── Mobile (1:299) ── */}
      <div className="md:hidden px-4 py-12">
        <div className="flex flex-col gap-6 w-full">

          {/* [ 8+ years in industry ] + rule */}
          <div className="flex flex-col gap-3 items-end">
            <p
              className="font-mono text-[14px] leading-[1.1] text-[#1f1f1f] uppercase text-right"
              style={{ fontFamily: "var(--font-geist-mono), monospace" }}
            >
              [ 8+ years in industry ]
            </p>
            <div className="w-full h-px bg-[#1f1f1f]" />
          </div>

          {/* Centered role title */}
          <div className="flex flex-col gap-3 items-center uppercase w-full">
            <p
              className="font-mono text-[14px] leading-[1.1] text-[#1f1f1f]"
              style={{ fontFamily: "var(--font-geist-mono), monospace" }}
            >
              001
            </p>
            <p
              className="font-light text-[32px] text-black tracking-[-0.08em] leading-[0.84] uppercase text-center"
              style={bigTextStyle}
            >
              A creative director&nbsp;&nbsp;/
              <br />Photographer
              <br />Born <span style={ampStyle}>&amp;</span> raised
              <br />on the south side
              <br />of chicago.
            </p>
            <p
              className="font-mono text-[14px] leading-[1.1] text-[#1f1f1f] uppercase"
              style={{ fontFamily: "var(--font-geist-mono), monospace" }}
            >
              [ creative freelancer ]
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
