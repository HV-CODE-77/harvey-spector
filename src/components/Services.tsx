const monoStyle = { fontFamily: "var(--font-geist-mono), monospace" };
const interStyle = { fontFamily: "var(--font-inter-var), Inter, sans-serif" };

const DESC =
  "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.";

const SERVICES = [
  {
    num: "[ 1 ]",
    title: "Brand Discovery",
    imgD: "https://www.figma.com/api/mcp/asset/f2a722c8-565e-4e6f-b678-c81c225c9c32",
    imgM: "https://www.figma.com/api/mcp/asset/6308a626-185a-44ad-b118-cd58288818fd",
  },
  {
    num: "[ 2 ]",
    title: "Web design & Dev",
    imgD: "https://www.figma.com/api/mcp/asset/ea914b58-8fbb-46c2-9837-dcc1eb7e443e",
    imgM: "https://www.figma.com/api/mcp/asset/37929389-4fa9-44a5-986e-bb9d947a09a2",
  },
  {
    num: "[ 3 ]",
    title: "Marketing",
    imgD: "https://www.figma.com/api/mcp/asset/18f12b6a-84f3-4196-b91d-39118e32859f",
    imgM: "https://www.figma.com/api/mcp/asset/44738871-e797-48dd-9460-c129b08ede99",
  },
  {
    num: "[ 4 ]",
    title: "Photography",
    imgD: "https://www.figma.com/api/mcp/asset/b1b0d6e1-f65f-458c-a4a6-c1ed7e770c5a",
    imgM: "https://www.figma.com/api/mcp/asset/b84f7df2-cf6f-4e2b-beae-cba02bc594c5",
    cropD: { top: "-42.25%", height: "149.93%" },
    cropM: { top: "-40.14%", height: "149.93%" },
  },
];

function Divider() {
  return <div className="w-full h-px bg-white opacity-40" />;
}

function ServiceThumb({
  src,
  crop,
}: {
  src: string;
  crop?: { top: string; height: string };
}) {
  return (
    <div className="relative shrink-0 size-[151px] overflow-hidden">
      {crop ? (
        <img
          src={src}
          alt=""
          className="absolute left-0 max-w-none w-full"
          style={{ top: crop.top, height: crop.height }}
        />
      ) : (
        <img
          src={src}
          alt=""
          className="absolute inset-0 max-w-none size-full object-cover"
        />
      )}
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="bg-black">

      {/* ── Desktop ── */}
      <div className="hidden md:flex flex-col gap-12 px-8 py-20">

        {/* Header */}
        <p
          className="font-mono text-[14px] leading-[1.1] text-white uppercase whitespace-nowrap"
          style={monoStyle}
        >
          [ services ]
        </p>

        {/* [4]  DELIVERABLES */}
        <div
          className="flex items-center justify-between w-full font-light uppercase whitespace-nowrap text-white"
          style={{
            ...interStyle,
            fontSize: "96px",
            letterSpacing: "-7.68px",
            lineHeight: "normal",
          }}
        >
          <span>[4]</span>
          <span>Deliverables</span>
        </div>

        {/* Service list */}
        <div className="flex flex-col gap-12 w-full">
          {SERVICES.map((s) => (
            <div key={s.num} className="flex flex-col gap-[9px] w-full">
              {/* Number + rule */}
              <p
                className="font-mono text-[14px] leading-[1.1] text-white uppercase"
                style={monoStyle}
              >
                {s.num}
              </p>
              <Divider />

              {/* Title + description + image */}
              <div className="flex flex-wrap items-start justify-between w-full">
                <p
                  className="font-bold italic text-[36px] text-white uppercase whitespace-nowrap"
                  style={{
                    ...interStyle,
                    letterSpacing: "-1.44px",
                    lineHeight: "1.1",
                  }}
                >
                  {s.title}
                </p>
                <div className="flex flex-wrap gap-6 items-start">
                  <p
                    className="text-[14px] text-white w-[393px]"
                    style={{
                      ...interStyle,
                      letterSpacing: "-0.56px",
                      lineHeight: "1.3",
                    }}
                  >
                    {DESC}
                  </p>
                  <ServiceThumb src={s.imgD} crop={s.cropD} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Mobile ── */}
      <div className="md:hidden flex flex-col gap-8 px-4 py-12">

        {/* Header */}
        <p
          className="font-mono text-[14px] leading-[1.1] text-white uppercase whitespace-nowrap"
          style={monoStyle}
        >
          [ services ]
        </p>

        {/* [4]  DELIVERABLES */}
        <div
          className="flex items-center justify-between w-full font-light uppercase whitespace-nowrap text-white"
          style={{
            ...interStyle,
            fontSize: "32px",
            letterSpacing: "-2.56px",
            lineHeight: "normal",
          }}
        >
          <span>[4]</span>
          <span>Deliverables</span>
        </div>

        {/* Service list */}
        <div className="flex flex-col gap-12 w-full">
          {SERVICES.map((s) => (
            <div key={s.num} className="flex flex-col gap-3 w-full">
              {/* Number + rule */}
              <p
                className="font-mono text-[14px] leading-[1.1] text-white uppercase"
                style={monoStyle}
              >
                {s.num}
              </p>
              <Divider />

              {/* Title */}
              <p
                className="font-bold italic text-[36px] text-white uppercase whitespace-nowrap"
                style={{
                  ...interStyle,
                  letterSpacing: "-1.44px",
                  lineHeight: "1.1",
                }}
              >
                {s.title}
              </p>

              {/* Description + image stacked */}
              <div className="flex flex-col gap-4 w-full">
                <p
                  className="text-[14px] text-white w-full"
                  style={{
                    ...interStyle,
                    letterSpacing: "-0.56px",
                    lineHeight: "1.3",
                  }}
                >
                  {DESC}
                </p>
                <ServiceThumb src={s.imgM} crop={s.cropM} />
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
