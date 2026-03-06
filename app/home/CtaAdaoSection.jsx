"use client";

import { motion } from "framer-motion";
import { Sparkles, Zap, ArrowRight } from "lucide-react";

const CtaAdaoSection = () => {
  return (
    <section className="tw-w-full tw-bg-slate-900 tw-py-16 md:tw-py-24 tw-z-10 tw-relative tw-overflow-hidden">
      {/* Subtle radial glow behind card */}
      <div
        className="tw-absolute tw-inset-0 tw-pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(251,191,36,0.08) 0%, transparent 60%)",
        }}
      />
      <div className="container tw-relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="tw-relative tw-max-w-3xl tw-mx-auto tw-rounded-3xl tw-overflow-hidden tw-p-[1px]"
          style={{
            background: "linear-gradient(135deg, rgba(251,191,36,0.5) 0%, rgba(245,158,11,0.2) 40%, rgba(251,191,36,0.3) 100%)",
            boxShadow: "0 0 60px -12px rgba(251,191,36,0.25), 0 25px 50px -12px rgba(0,0,0,0.5)",
          }}
        >
          <div className="tw-rounded-3xl tw-bg-slate-900/95 tw-backdrop-blur-sm tw-p-8 md:tw-p-12 tw-border tw-border-amber-500/20">
            {/* Live badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="tw-inline-flex tw-items-center tw-gap-2 tw-mb-6 tw-px-4 tw-py-2 tw-rounded-full tw-bg-amber-500/20 tw-border tw-border-amber-400/40"
            >
              <span className="tw-w-2 tw-h-2 tw-rounded-full tw-bg-amber-400 tw-animate-pulse" />
              <span className="tw-text-amber-300 tw-text-sm tw-font-bold tw-uppercase tw-tracking-wider">
                Live now
              </span>
              <Sparkles className="tw-w-4 tw-h-4 tw-text-amber-400" aria-hidden />
            </motion.div>

            <h2 className="tw-font-display tw-text-3xl sm:tw-text-4xl md:tw-text-5xl tw-font-bold tw-tracking-tight tw-mb-4">
              <span className="tw-text-white">ADAO staking </span>
              <span className="tw-text-amber-400">
                is live
              </span>
            </h2>
            <p className="tw-text-slate-300 tw-text-lg md:tw-text-xl tw-mb-8 tw-max-w-xl tw-leading-relaxed">
              Earn passive rewards by staking ADAO. The longer you stake, the bigger the rewards.
            </p>

            {/* Benefit hint */}
            <div className="tw-flex tw-flex-wrap tw-gap-4 tw-mb-8">
              <span className="tw-inline-flex tw-items-center tw-gap-2 tw-text-amber-300/90 tw-text-sm tw-font-medium">
                <Zap className="tw-w-4 tw-h-4" aria-hidden />
                Passive income
              </span>
              <span className="tw-inline-flex tw-items-center tw-gap-2 tw-text-amber-300/90 tw-text-sm tw-font-medium">
                <Sparkles className="tw-w-4 tw-h-4" aria-hidden />
                Compound rewards
              </span>
            </div>

            <motion.a
              href="https://agentdao.com/staking"
              target="_blank"
              rel="noopener noreferrer"
              className="tw-inline-flex tw-items-center tw-gap-3 tw-px-8 tw-py-4 tw-rounded-2xl tw-bg-amber-400 hover:tw-bg-amber-300 tw-text-black tw-font-bold tw-text-lg tw-no-underline tw-transition-all tw-shadow-lg tw-shadow-amber-500/40 hover:tw-shadow-amber-400/50 hover:tw-scale-[1.02] tw-duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Stake & earn now
              <ArrowRight className="tw-w-5 tw-h-5 tw-text-black" aria-hidden />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaAdaoSection;
