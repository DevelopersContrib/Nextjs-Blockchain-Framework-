"use client";

import { motion } from "framer-motion";
import Logo from "@/components/logo";
import Container from "@/components/Container";

const fadeInUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export default function HeroSection({ domain, logo }) {
  return (
    <section className="tw-min-h-[calc(100vh-44px)] tw-py-12 md:tw-py-16 tw-flex tw-w-full tw-items-center tw-justify-center tw-relative tw-overflow-hidden">
      {/* Video background */}
      <video
        className="tw-object-cover tw-w-full tw-h-full tw-absolute tw-top-0 tw-left-0 tw-min-w-full tw-min-h-full tw-scale-105"
        src="https://cdn.vnoc.com/videos/video-blockchain6.mp4"
        autoPlay
        loop
        playsInline
        muted
        aria-hidden
      />

      {/* Primary gradient overlay - darker edges, readable center */}
      <div
        className="tw-absolute tw-inset-0 tw-pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(6,13,19,0.55) 0%, rgba(6,13,19,0.5) 25%, rgba(6,13,19,0.55) 50%, rgba(6,13,19,0.55) 75%, rgba(6,13,19,0.75) 100%)",
        }}
      />

      {/* Subtle cyan tint for brand cohesion */}
      <div
        className="tw-absolute tw-inset-0 tw-pointer-events-none tw-opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(6,182,212,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Vignette - softer, larger for a cinematic look */}
      <div
        className="tw-absolute tw-inset-0 tw-pointer-events-none"
        style={{
          boxShadow: "inset 0 0 180px 40px rgba(0,0,0,0.5)",
        }}
      />

      <div className="tw-container tw-relative tw-px-4 sm:tw-px-6 tw-text-white tw-text-center tw-pb-20 tw-w-full">
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="tw-max-w-4xl tw-mx-auto tw-w-full"
        >
          {/* Badge */}
          <motion.div
            variants={fadeInUp}
            className="tw-inline-flex tw-items-center tw-gap-2 tw-mb-6 tw-px-4 tw-py-2 tw-rounded-full tw-bg-white/10 tw-border tw-border-white/15 tw-backdrop-blur-sm"
          >
            <span className="tw-w-2 tw-h-2 tw-rounded-full tw-bg-emerald-400 tw-animate-pulse" />
            <span className="tw-text-sm tw-font-medium tw-text-white/90">
              DAO · Community · Rewards
            </span>
          </motion.div>

          <motion.div variants={fadeInUp} className="tw-mb-6">
            <Logo domain={domain} logo={logo} />
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="tw-font-display tw-font-bold tw-text-3xl sm:tw-text-4xl md:tw-text-5xl lg:tw-text-6xl xl:tw-text-7xl tw-leading-[1.1] tw-tracking-tight tw-mb-5 tw-px-2"
          >
            Join our community on{" "}
            <span className="tw-text-cyan-300 tw-font-extrabold">
              {domain}
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="tw-text-white/90 tw-text-base sm:tw-text-lg md:tw-text-xl tw-font-medium tw-max-w-2xl tw-mx-auto tw-mb-10 tw-leading-relaxed"
          >
            Build with great people around the world. Earn Eshares, compensation,
            and experience with like-minded contributors.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="tw-max-w-xl tw-mx-auto"
          >
            <div className="tw-relative tw-rounded-2xl tw-p-[1px] tw-bg-gradient-to-b tw-from-white/20 tw-to-white/5 tw-shadow-2xl tw-shadow-black/30">
              <div className="tw-rounded-2xl tw-border tw-border-white/10 tw-bg-black/40 tw-backdrop-blur-xl tw-p-6 md:tw-p-8">
                <Container domain={domain} />
              </div>
            </div>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="tw-text-white/60 tw-text-xs sm:tw-text-sm tw-mt-6 tw-font-medium tw-text-center"
          >
            Join 5,000+ contributors building on Contrib
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
