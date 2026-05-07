const interStyle = { fontFamily: "var(--font-inter-var), Inter, sans-serif" };
const monoStyle = { fontFamily: "var(--font-geist-mono), monospace" };

export default function Footer() {
  return (
    <footer className="bg-black text-white">

      {/* ── Desktop ── */}
      <div className="hidden md:block pt-12 px-8">

        {/* Top row: CTA | Social center | Social right */}
        <div className="flex items-start justify-between mb-12">

          {/* Left — CTA */}
          <div className="flex flex-col gap-3" style={{ width: 298 }}>
            <p
              className="font-light italic text-[24px] text-white tracking-[-0.96px] uppercase leading-[1.1]"
              style={interStyle}
            >
              Have a{" "}
              <strong className="font-black not-italic">project</strong>
              {" "}in mind?
            </p>
            <button
              className="self-start border border-white rounded-[24px] px-4 py-3 text-[14px] font-medium text-white tracking-[-0.56px] leading-normal"
              style={interStyle}
            >
              Let's talk
            </button>
          </div>

          {/* Center — Facebook / Instagram */}
          <div
            className="text-center text-[18px] text-white tracking-[-0.72px] uppercase leading-[1.1]"
            style={{ ...interStyle, width: 298 }}
          >
            <p>Facebook</p>
            <p>Instagram</p>
          </div>

          {/* Right — X.com / Linkedin */}
          <div
            className="text-right text-[18px] text-white tracking-[-0.72px] uppercase leading-[1.1]"
            style={{ ...interStyle, width: 298 }}
          >
            <p>X.com</p>
            <p>Linkedin</p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-white opacity-20" />

        {/* Bottom row: H.Studio | Legal */}
        <div className="flex items-end justify-between">

          {/* H.Studio + [ Coded By Claude ] */}
          <div className="relative overflow-hidden flex-1" style={{ height: 219 }}>

            {/* [ CODED BY CLAUDE ] — rotated vertical label at far left */}
            <div
              className="absolute flex items-center justify-center"
              style={{ width: 15, height: 160, left: 0, top: "50%", transform: "translateY(-50%)" }}
            >
              <span
                className="text-[14px] text-white uppercase whitespace-nowrap"
                style={{ ...monoStyle, transform: "rotate(-90deg)", display: "block" }}
              >
                [ Coded By Claude ]
              </span>
            </div>

            {/* H.Studio */}
            <div
              className="absolute font-semibold capitalize text-white whitespace-nowrap"
              style={{
                ...interStyle,
                fontSize: 290,
                letterSpacing: "-17.4px",
                lineHeight: 0.8,
                left: 20,
                top: "50%",
                transform: "translateY(-50%) translateY(6.5px)",
              }}
            >
              H.Studio
            </div>
          </div>

          {/* Legal */}
          <div
            className="flex gap-[34px] items-center pb-8 text-[12px] text-white text-center tracking-[-0.48px] uppercase whitespace-nowrap flex-none"
            style={interStyle}
          >
            <span className="underline decoration-solid">Licences</span>
            <span className="underline decoration-solid">Privacy Policy</span>
          </div>
        </div>
      </div>

      {/* ── Mobile ── */}
      <div className="md:hidden flex flex-col gap-12 pt-12 px-4">

        {/* Top section */}
        <div className="flex flex-col gap-6">

          {/* CTA + social links */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <p
                className="font-light italic text-[24px] text-white tracking-[-0.96px] uppercase leading-[1.1]"
                style={interStyle}
              >
                Have a{" "}
                <strong className="font-black not-italic">project</strong>
                {" "}in mind?
              </p>
              <button
                className="self-start border border-white rounded-[24px] px-4 py-3 text-[14px] font-medium text-white tracking-[-0.56px]"
                style={interStyle}
              >
                Let's talk
              </button>
            </div>
            {["Facebook", "Instagram", "X.com", "Linkedin"].map((link) => (
              <p
                key={link}
                className="text-[18px] text-white tracking-[-0.72px] uppercase leading-[1.1]"
                style={interStyle}
              >
                {link}
              </p>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-white opacity-20" />
        </div>

        {/* Bottom section */}
        <div className="flex flex-col gap-4 overflow-hidden">
          <div
            className="flex gap-[34px] items-center text-[12px] text-white tracking-[-0.48px] uppercase"
            style={interStyle}
          >
            <span className="underline decoration-solid">Licences</span>
            <span className="underline decoration-solid">Privacy Policy</span>
          </div>
          <p className="text-[10px] text-white uppercase" style={monoStyle}>
            [ Coded By Claude ]
          </p>
          <p
            className="font-semibold capitalize text-white whitespace-nowrap text-center w-full"
            style={{
              ...interStyle,
              fontSize: 91.425,
              letterSpacing: "-5.4855px",
              lineHeight: 0.8,
            }}
          >
            H.Studio
          </p>
        </div>
      </div>

    </footer>
  );
}
