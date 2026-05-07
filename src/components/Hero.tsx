"use client";

import { useState } from "react";
import Image from "next/image";

const HERO_IMAGE =
  "https://www.figma.com/api/mcp/asset/db9db575-d6cd-4647-821d-83882c2c74a4";

const NAV_LINKS = ["About", "Services", "Projects", "News", "Contact"] as const;

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative h-screen min-h-[640px] overflow-hidden">
      {/* Background photo */}
      <Image
        src={HERO_IMAGE}
        alt=""
        fill
        sizes="100vw"
        quality={100}
        className="object-cover object-center scale-[1.15] origin-center"
        priority
      />

      {/* Frosted glass overlay — bottom ~349 px, fades upward */}
      <div
        className="absolute bottom-0 inset-x-0 h-[349px] backdrop-blur-[10px] bg-[rgba(217,217,217,0.01)]"
        style={{
          maskImage: "linear-gradient(to bottom, transparent, black 45%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 45%)",
        }}
      />

      {/* Layered content — no z-index so mix-blend-mode on children blends through to image */}
      <div className="relative h-full flex flex-col px-4 md:px-8">

        {/* ── Navbar ── */}
        <nav className="flex-none flex items-center justify-between py-6">
          <span className="font-semibold text-base tracking-[-0.04em] text-black whitespace-nowrap">
            H.Studio
          </span>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-14 font-semibold text-base tracking-[-0.04em] text-black">
            {NAV_LINKS.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="hover:opacity-60 transition-opacity"
              >
                {l}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <button className="hidden md:flex items-center justify-center bg-black text-white text-sm font-medium tracking-[-0.035em] px-4 py-3 rounded-full">
            Let&apos;s talk
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] py-1"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className="block w-6 h-[1.5px] bg-black" />
            <span className="block w-6 h-[1.5px] bg-black" />
            <span className="block w-4 h-[1.5px] bg-black" />
          </button>
        </nav>

        {/* Mobile dropdown */}
        {open && (
          <div className="md:hidden absolute inset-x-0 top-[73px] z-20 bg-black/90 backdrop-blur-sm px-4 py-6 flex flex-col gap-5 border-b border-white/10">
            {NAV_LINKS.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="font-semibold text-base tracking-[-0.04em] text-white"
                onClick={() => setOpen(false)}
              >
                {l}
              </a>
            ))}
            <button className="self-start bg-white text-black text-sm font-medium tracking-[-0.035em] px-4 py-3 rounded-full">
              Let&apos;s talk
            </button>
          </div>
        )}

        {/* Mobile: elastic — pushes name to lower half. Desktop: fixed ~240 px gap matching Figma. */}
        <div className="flex-1 md:flex-none md:h-[clamp(80px,17.8vh,240px)]" />

        {/* ── Hero name ── */}
        <div className="mt-[50px]">
          {/* [ Hello i'm ] label */}
          <div className="flex items-center justify-center md:justify-start px-[18px] -mb-3">
            <span className="font-mono text-[14px] leading-[1.1] text-white uppercase mix-blend-overlay">
              [ Hello i&apos;m ]
            </span>
          </div>

          {/* Harvey Specter */}
          <h1
            className="font-medium capitalize text-white mix-blend-overlay text-center tracking-[-0.07em] leading-[0.8] lg:leading-[1.1] whitespace-pre-wrap md:whitespace-nowrap"
            style={{
              fontFamily: "var(--font-inter-var), Inter, sans-serif",
              fontSize: "clamp(166px, calc(13.75vw + 70px), 268px)",
            }}
          >
            {`Harvey   Specter`}
          </h1>
        </div>

        {/* ── Description + CTA ── */}
        <div className="flex justify-center md:justify-end py-6 md:py-8">
          <div className="flex flex-col gap-4 w-full max-w-[294px] md:mr-[40px]">
            <p
              className="italic font-bold text-[#1f1f1f] text-sm tracking-[-0.035em] uppercase leading-[1.1]"
              style={{ fontFamily: "var(--font-inter-var), Inter, sans-serif" }}
            >
              <span>H.Studio is a </span>
              <span className="font-normal">full-service</span>
              <span>
                {" "}
                creative studio creating beautiful digital experiences and
                products. We are an{" "}
              </span>
              <span className="font-normal">award winning</span>
              <span>
                {" "}
                desing and art group specializing in branding, web design and
                engineering.
              </span>
            </p>
            <button
              className="self-start bg-black text-white text-sm font-medium tracking-[-0.035em] px-4 py-3 rounded-full"
              style={{ fontFamily: "var(--font-inter-var), Inter, sans-serif" }}
            >
              Let&apos;s talk
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
