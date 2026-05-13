import Image from "next/image";
import { sanityFetch } from "@/sanity/lib/live";
import { urlFor } from "@/sanity/lib/image";

const monoStyle = { fontFamily: "var(--font-geist-mono), monospace" };
const interStyle = { fontFamily: "var(--font-inter-var), Inter, sans-serif" };

const ARROW = "https://www.figma.com/api/mcp/asset/77b25495-e75e-4643-b000-7fc8cdc369a6";

const SELECTED_WORK_QUERY = `
  *[_type == "portfolio" && featured == true] | order(order asc)[0...4] {
    _id,
    title,
    slug,
    coverImage,
    tags,
    year,
    externalUrl
  }
`;

type PortfolioItem = {
  _id: string;
  title: string;
  slug: { current: string };
  coverImage?: { asset: { _ref: string }; hotspot?: object };
  tags?: string[];
  year?: number;
  externalUrl?: string;
};

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

function CardImage({ item, heightPx, aspectRatio }: { item: PortfolioItem; heightPx?: number; aspectRatio?: string }) {
  const imageUrl = item.coverImage ? urlFor(item.coverImage).width(900).url() : null;
  const sizeStyle = heightPx
    ? { height: `${heightPx}px` }
    : { aspectRatio };

  if (imageUrl) {
    return (
      <div className="relative w-full overflow-hidden flex-none" style={sizeStyle}>
        <Image src={imageUrl} alt={item.title} fill className="object-cover" />
        <div className="absolute bottom-4 left-4 flex gap-3 items-center z-10">
          {item.tags?.map((t) => <Tag key={t} label={t} />)}
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden flex-none bg-[#1a1a1a]" style={sizeStyle}>
      <div className="absolute bottom-4 left-4 flex gap-3 items-center z-10">
        {item.tags?.map((t) => <Tag key={t} label={t} />)}
      </div>
    </div>
  );
}

function ProjectCard({ item, heightPx }: { item: PortfolioItem; heightPx: number }) {
  return (
    <div className="flex flex-col gap-[10px] w-full">
      <CardImage item={item} heightPx={heightPx} />
      <div className="flex items-center justify-between w-full">
        <p
          className="font-black text-[36px] text-black tracking-[-1.44px] uppercase whitespace-nowrap"
          style={{ ...interStyle, lineHeight: "1.1" }}
        >
          {item.title}
        </p>
        <ArrowIcon size={32} />
      </div>
    </div>
  );
}

function MobileCard({ item }: { item: PortfolioItem }) {
  return (
    <div key={item._id} className="flex flex-col gap-[10px] w-full">
      <CardImage item={item} aspectRatio="3/4" />
      <div className="flex items-center justify-between w-full">
        <p
          className="font-black text-[24px] text-black tracking-[-0.96px] uppercase"
          style={{ ...interStyle, lineHeight: "1.1" }}
        >
          {item.title}
        </p>
        <ArrowIcon size={28} />
      </div>
    </div>
  );
}

const LEFT_HEIGHTS  = [744, 699];
const RIGHT_HEIGHTS = [699, 744];

export default async function SelectedWork() {
  const { data: projects } = await sanityFetch({ query: SELECTED_WORK_QUERY });

  const left  = projects.slice(0, 2) as PortfolioItem[];
  const right = projects.slice(2, 4) as PortfolioItem[];

  return (
    <section id="work" className="bg-white">

      {/* ── Desktop ── */}
      <div className="hidden md:flex flex-col gap-[61px] px-8 py-20">

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

        <div className="flex gap-6 items-end w-full">
          <div className="flex-1 flex flex-col items-start justify-between self-stretch min-w-0 gap-[24px]">
            {left.map((item, i) => (
              <ProjectCard key={item._id} item={item} heightPx={LEFT_HEIGHTS[i]} />
            ))}
            <div className="w-[465px]">
              <CTABox />
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-[117px] pt-[240px] min-w-0">
            {right.map((item, i) => (
              <ProjectCard key={item._id} item={item} heightPx={RIGHT_HEIGHTS[i]} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Mobile ── single column */}
      <div className="md:hidden flex flex-col gap-10 px-4 py-12">

        <div className="flex items-start justify-between w-full">
          <div className="font-light text-black uppercase" style={{ ...interStyle, fontSize: "48px", letterSpacing: "-3.84px" }}>
            <p style={{ lineHeight: "0.86" }}>Selected</p>
            <p style={{ lineHeight: "0.86" }}>Work</p>
          </div>
          <p className="text-[14px] leading-[1.1] text-[#1f1f1f]" style={monoStyle}>004</p>
        </div>

        <div className="flex flex-col gap-10 w-full">
          {(projects as PortfolioItem[]).map((item) => (
            <MobileCard key={item._id} item={item} />
          ))}
        </div>

        <CTABox />
      </div>

    </section>
  );
}
