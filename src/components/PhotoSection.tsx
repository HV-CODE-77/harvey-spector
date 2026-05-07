import Image from "next/image";

const PHOTO_SRC =
  "https://www.figma.com/api/mcp/asset/2d1dd327-efb6-461f-8c4c-960cef40cfa4";
const PHOTO_SRC_MOBILE =
  "https://www.figma.com/api/mcp/asset/624df088-dd3b-4c70-9832-1d73f611e39e";

export default function PhotoSection() {
  return (
    <section id="photo">
      {/* ── Desktop ── full-bleed landscape */}
      <div className="hidden md:block relative w-full h-[680px] overflow-hidden">
        <Image
          src={PHOTO_SRC}
          alt="Photographer at work"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* ── Mobile ── portrait crop, face centred */}
      <div
        className="md:hidden relative w-full overflow-hidden"
        style={{ aspectRatio: "390 / 560" }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={PHOTO_SRC_MOBILE}
            alt="Photographer at work"
            className="absolute h-full max-w-none"
            style={{ left: "-36.41%", top: "-0.04%", width: "213.34%" }}
          />
        </div>
      </div>
    </section>
  );
}
