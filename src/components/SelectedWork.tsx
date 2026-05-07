import Image from "next/image";

const monoStyle = { fontFamily: "var(--font-geist-mono), monospace" };
const interStyle = { fontFamily: "var(--font-inter-var), Inter, sans-serif" };

const IMG_SURFERS   = "https://www.figma.com/api/mcp/asset/ccd143f1-924c-49f3-8538-f75074842213";
const IMG_CYBERPUNK = "https://www.figma.com/api/mcp/asset/aab47cea-3430-4bcb-ba79-cc3e872541fd";
const IMG_AGENCY    = "https://www.figma.com/api/mcp/asset/ce91d344-6995-4f2d-9c6b-e3b2e67d6342";
const IMG_MINIMAL   = "https://www.figma.com/api/mcp/asset/349eaa96-9569-41c0-83b6-8264a96a72d9";
const ARROW         = "https://www.figma.com/api/mcp/asset/77b25495-e75e-4643-b000-7fc8cdc369a6";

function Corner({ className = "" }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden className={`flex-none origin-center ${className}`}>
      <path d="M0.5 15.5 L0.5 0.5 L15.5 0.5" stroke="#1f1f1f" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  );
}

function Tag({ label }: { label: string }) {
  return (
    <div className="backdrop-blur-[10px] bg-white/30 flex items-center justify-center px-2 py-1 rounded-full">
      <span className="font-medium text-[14px] text-[#111] tracking-[-0.56px] whitespace-nowrap leading-normal" style={interStyle}>
        {label}
      </span>
    </div>
  );
}

function ArrowIcon({ size = 32 }: { size?: number }) {
  return (
    <div className="-rotate-90 flex-none" style={{ width: size, height: size }}>
      <img src={ARROW} alt="" style={{ width: size, height: size }} className="block" />
    </div>
  );
}

function CTABox() {
  return (
    <div className="flex gap-3 items-stretch justify-center w-full">
      <div className="flex flex-col items-start justify-between w-6">
        <Corner />
        <Corner className="-rotate-90" />
      </div>
      <div className="flex flex-1 flex-col gap-[10px] items-start justify-center py-3">
        <p className="italic text-[14px] text-[#1f1f1f] tracking-[-0.56px] leading-[1.3]" style={interStyle}>
          Discover how my creativity transforms ideas into impactful digital
          experiences — schedule a call with me to get started.
        </p>
        <button
          className="bg-black text-white text-[14px] font-medium tracking-[-0.56px] px-4 py-3 rounded-full leading-normal whitespace-nowrap"
          style={interStyle}
        >
          Let&apos;s talk
        </button>
      </div>
      <div className="flex flex-col items-start justify-between w-6">
        <Corner className="rotate-90" />
        <Corner className="rotate-180" />
      </div>
    </div>
  );
}

interface CardProps {
  img: string;
  title: string;
  tags: string[];
  heightPx: number;
}

function ProjectCard({ img, title, tags, heightPx }: CardProps) {
  return (
    <div className="flex flex-col gap-[10px] w-full">
      <div className="relative w-full overflow-hidden flex-none" style={{ height: `${heightPx}px` }}>
        <Image src={img} alt={title} fill className="object-cover" />
        <div className="absolute bottom-4 left-4 flex gap-3 items-center z-10">
          {tags.map((t) => <Tag key={t} label={t} />)}
        </div>
      </div>
      <div className="flex items-center justify-between w-full">
        <p
          className="font-black text-[36px] text-black tracking-[-1.44px] uppercase whitespace-nowrap"
          style={{ ...interStyle, lineHeight: "1.1" }}
        >
          {title}
        </p>
        <ArrowIcon size={32} />
      </div>
    </div>
  );
}

const MOBILE_PROJECTS = [
  { img: IMG_SURFERS,   title: "Surfers paradise",   tags: ["Social Media", "Photography"] },
  { img: IMG_CYBERPUNK, title: "Cyberpunk caffe",    tags: ["Social Media", "Photography"] },
  { img: IMG_AGENCY,    title: "Agency 976",         tags: ["Social Media", "Photography"] },
  { img: IMG_MINIMAL,   title: "Minimal Playground", tags: ["Social Media", "Photography"] },
];

export default function SelectedWork() {
  return (
    <section id="work" className="bg-white">

      {/* ── Desktop ── */}
      <div className="hidden md:flex flex-col gap-[61px] px-8 py-20">

        {/* Header */}
        <div className="flex items-center justify-between w-full">
          <div className="flex gap-[10px] items-start">
            <div className="font-light text-black uppercase" style={{ ...interStyle, fontSize: "96px", letterSpacing: "-7.68px" }}>
              <p style={{ lineHeight: "0.86" }}>Selected</p>
              <p style={{ lineHeight: "0.86" }}>Work</p>
            </div>
            <p className="text-[14px] leading-[1.1] text-[#1f1f1f]" style={monoStyle}>004</p>
          </div>
          <div className="flex h-[110px] w-[15px] items-center justify-center">
            <p className="-rotate-90 text-[14px] leading-[1.1] text-[#1f1f1f] uppercase whitespace-nowrap" style={monoStyle}>
              [ portfolio ]
            </p>
          </div>
        </div>

        {/* Staggered two-column grid */}
        <div className="flex gap-6 items-end w-full">

          {/* Left column — card 1, card 2, CTA */}
          <div className="flex-1 flex flex-col items-start justify-between self-stretch min-w-0 gap-[24px]">
            <ProjectCard img={IMG_SURFERS}   title="Surfers paradise" tags={["Social Media", "Photography"]} heightPx={744} />
            <ProjectCard img={IMG_CYBERPUNK} title="Cyberpunk caffe"  tags={["Social Media", "Photography"]} heightPx={699} />
            <div className="w-[465px]">
              <CTABox />
            </div>
          </div>

          {/* Right column — offset 240px, card 3, card 4 */}
          <div className="flex-1 flex flex-col gap-[117px] pt-[240px] min-w-0">
            <ProjectCard img={IMG_AGENCY}  title="Agency 976"        tags={["Social Media", "Photography"]} heightPx={699} />
            <ProjectCard img={IMG_MINIMAL} title="Minimal Playground" tags={["Social Media", "Photography"]} heightPx={744} />
          </div>

        </div>
      </div>

      {/* ── Mobile ── single column */}
      <div className="md:hidden flex flex-col gap-10 px-4 py-12">

        {/* Header */}
        <div className="flex items-start justify-between w-full">
          <div className="font-light text-black uppercase" style={{ ...interStyle, fontSize: "48px", letterSpacing: "-3.84px" }}>
            <p style={{ lineHeight: "0.86" }}>Selected</p>
            <p style={{ lineHeight: "0.86" }}>Work</p>
          </div>
          <p className="text-[14px] leading-[1.1] text-[#1f1f1f]" style={monoStyle}>004</p>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-10 w-full">
          {MOBILE_PROJECTS.map((p) => (
            <div key={p.title} className="flex flex-col gap-[10px] w-full">
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <Image src={p.img} alt={p.title} fill className="object-cover" />
                <div className="absolute bottom-4 left-4 flex gap-2 items-center z-10">
                  {p.tags.map((t) => <Tag key={t} label={t} />)}
                </div>
              </div>
              <div className="flex items-center justify-between w-full">
                <p
                  className="font-black text-[24px] text-black tracking-[-0.96px] uppercase"
                  style={{ ...interStyle, lineHeight: "1.1" }}
                >
                  {p.title}
                </p>
                <ArrowIcon size={28} />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <CTABox />

      </div>

    </section>
  );
}
