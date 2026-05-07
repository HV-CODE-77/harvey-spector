import React from "react";

const interStyle = { fontFamily: "var(--font-inter-var), Inter, sans-serif" };

const img1 = "https://www.figma.com/api/mcp/asset/b77b2a32-dcd8-42ca-b4af-f7ab0d5092c0";
const img2 = "https://www.figma.com/api/mcp/asset/f308400c-c3d8-48d2-9241-50658ac7ebe8";
const img3 = "https://www.figma.com/api/mcp/asset/a6b03973-409d-4558-be75-086095f2e1cc";

const ARTICLES = [
  { img: img1, offsetTop: false },
  { img: img2, offsetTop: true },
  { img: img3, offsetTop: false },
];

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <path
        d="M3.75 14.25L14.25 3.75M14.25 3.75H6.75M14.25 3.75V11.25"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArticleCard({ img, imgH }: { img: string; imgH: number }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative w-full overflow-hidden" style={{ height: imgH }}>
        <img src={img} alt="" className="absolute inset-0 w-full h-full object-cover" />
      </div>
      <p
        className="text-[14px] text-[#1f1f1f] tracking-[-0.56px] leading-[1.3]"
        style={interStyle}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </p>
      <div className="inline-flex gap-[10px] items-center border-b border-black py-1 self-start">
        <span
          className="text-[14px] font-medium text-black tracking-[-0.56px] leading-normal"
          style={interStyle}
        >
          Read more
        </span>
        <ArrowIcon />
      </div>
    </div>
  );
}

export default function News() {
  return (
    <section id="news" className="bg-[#f3f3f3]">

      {/* ── Desktop ── */}
      <div className="hidden md:flex items-end justify-between px-8 py-[120px]">

        {/* Rotated heading */}
        <div
          className="flex-none flex items-center justify-center"
          style={{ width: 110, height: 706 }}
        >
          <div style={{ transform: "rotate(-90deg)", whiteSpace: "nowrap" }}>
            <p
              className="font-light text-black uppercase"
              style={{ ...interStyle, fontSize: 64, letterSpacing: "-5.12px", lineHeight: 0.86 }}
            >
              Keep up with my latest
            </p>
            <p
              className="font-light text-black uppercase"
              style={{ ...interStyle, fontSize: 64, letterSpacing: "-5.12px", lineHeight: 0.86 }}
            >
              News &amp; Achievements
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="flex items-start gap-[31px]" style={{ width: 1020 }}>
          {ARTICLES.map((article, i) => (
            <React.Fragment key={i}>
              {i > 0 && (
                <div className="self-stretch bg-black flex-none" style={{ width: 1 }} />
              )}
              <div
                className="flex-none"
                style={{ width: 353, paddingTop: article.offsetTop ? 120 : 0 }}
              >
                <ArticleCard img={article.img} imgH={469} />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ── Mobile ── */}
      <div className="md:hidden flex flex-col gap-8 px-4 py-16">
        <p
          className="font-light text-black uppercase"
          style={{ ...interStyle, fontSize: 32, letterSpacing: "-2.56px", lineHeight: 0.86 }}
        >
          Keep up with my latest news &amp; achievements
        </p>

        <div
          className="flex gap-4 overflow-x-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" } as React.CSSProperties}
        >
          {ARTICLES.map((article, i) => (
            <div key={i} className="flex-none" style={{ width: 300 }}>
              <ArticleCard img={article.img} imgH={398} />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
