import Image from "next/image";

const PORTRAIT_DESKTOP =
  "https://www.figma.com/api/mcp/asset/4af24581-ce98-47de-85e9-af99dc236559";
const PORTRAIT_MOBILE =
  "https://www.figma.com/api/mcp/asset/86f544ab-6272-4bab-b196-a9cbdb572a24";

function Corner({ className = "" }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      className={`flex-none origin-center ${className}`}
    >
      <path
        d="M0.5 15.5 L0.5 0.5 L15.5 0.5"
        stroke="#1f1f1f"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
}

const bioText =
  "Placeholder paragraph one. This is where you introduce yourself — your background, your passion for your craft, and what drives you creatively. Two to three sentences work best here. Placeholder paragraph two. Here you can describe your technical approach, how you collaborate with clients, or what sets your work apart from others in your field.";

export default function About() {
  return (
    <section id="about" className="bg-white">

      {/* ── Desktop (1:51) ── */}
      <div className="hidden md:flex flex-col px-8 py-20">
        <div className="flex items-start justify-between w-full">

          {/* [ About ] — pinned top-left */}
          <p
            className="flex-none font-mono text-[14px] leading-[1.1] text-[#1f1f1f] uppercase whitespace-nowrap"
            style={{ fontFamily: "var(--font-geist-mono), monospace" }}
          >
            [ About ]
          </p>

          {/* Right column: bio text + portrait */}
          <div className="flex gap-8 items-end w-[min(983px,82%)]">

            {/* Bracketed bio text */}
            <div className="flex flex-1 gap-3 items-center justify-center min-w-0">
              <div className="flex items-center self-stretch flex-none">
                <div className="flex flex-col h-full justify-between w-6">
                  <Corner />
                  <Corner className="-rotate-90" />
                </div>
              </div>
              <p
                className="flex-1 py-3 text-[14px] leading-[1.3] tracking-[-0.04em] text-[#1f1f1f]"
                style={{ fontFamily: "var(--font-inter-var), Inter, sans-serif" }}
              >
                {bioText}
              </p>
              <div className="flex items-center self-stretch flex-none">
                <div className="flex flex-col h-full justify-between w-6">
                  <Corner className="rotate-90" />
                  <Corner className="rotate-180" />
                </div>
              </div>
            </div>

            {/* 002 + portrait */}
            <div className="flex gap-6 items-start flex-none">
              <p
                className="font-mono text-[14px] leading-[1.1] text-[#1f1f1f] uppercase"
                style={{ fontFamily: "var(--font-geist-mono), monospace" }}
              >
                002
              </p>
              <div className="relative w-[436px] h-[614px] overflow-hidden flex-none">
                <Image
                  src={PORTRAIT_DESKTOP}
                  alt="Portrait"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Mobile (1:317) ── */}
      <div className="md:hidden px-4 py-12">
        <div className="flex flex-col gap-5 w-full">

          {/* Labels */}
          <p
            className="font-mono text-[14px] leading-[1.1] text-[#1f1f1f] uppercase"
            style={{ fontFamily: "var(--font-geist-mono), monospace" }}
          >
            002
          </p>
          <p
            className="font-mono text-[14px] leading-[1.1] text-[#1f1f1f] uppercase"
            style={{ fontFamily: "var(--font-geist-mono), monospace" }}
          >
            [ About ]
          </p>

          {/* Bracketed bio text */}
          <div className="flex items-center justify-between gap-0 w-full">
            <div className="flex items-center self-stretch flex-none">
              <div className="flex flex-col h-full justify-between w-6">
                <Corner />
                <Corner className="-rotate-90" />
              </div>
            </div>
            <p
              className="flex-1 py-3 text-[14px] leading-[1.3] tracking-[-0.04em] text-[#1f1f1f]"
              style={{ fontFamily: "var(--font-inter-var), Inter, sans-serif" }}
            >
              {bioText}
            </p>
            <div className="flex items-center self-stretch flex-none">
              <div className="flex flex-col h-full justify-between w-6">
                <Corner className="rotate-90" />
                <Corner className="rotate-180" />
              </div>
            </div>
          </div>

          {/* Portrait — full width, aspect 422/594 */}
          <div
            className="relative w-full overflow-hidden"
            style={{ aspectRatio: "422 / 594" }}
          >
            <Image
              src={PORTRAIT_MOBILE}
              alt="Portrait"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </div>

    </section>
  );
}
