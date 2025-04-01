"use client";
import { motion } from "framer-motion";
const CtaAdaoSection = () => {
  return (
    <>
      <section className="tw-w-full tw-bg-[#020817] tw-py-24 min-h-[532px] tw-z-10 tw-relative">
        
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="tw-relative bg-gradient-yellow-red tw-text-white tw-rounded-xl tw-shadow-2xl tw-p-10"
          >
            <motion.div
              animate={{ rotate: [0, 3, -3, 0], scale: [1, 1.02, 1] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut"
              }}
              className="tw-absolute tw--top-5 tw-left-1/2 tw-transform tw--translate-x-1/2 tw-text-4xl"
            >
              ✨
            </motion.div>

            <h2 className="tw-text-4xl sm:tw-text-5xl tw-font-extrabold tw-mb-4 tw-tracking-wide tw-flex tw-items-center tw-justify-center tw-gap-3">
              🔒 Lock & Earn Big! 💰
            </h2>

            <div className="tw-w-full sm:tw-w-auto tw-mx-auto tw-bg-yellow-400 tw-text-yellow-900 tw-text-2xl sm:tw-text-3xl tw-font-bold tw-px-10 tw-py-3 tw-rounded-lg tw-border-2 tw-border-yellow-600 tw-shadow-xl tw-text-center tw-items-center tw-justify-center">
              🚀 ADAO Staking is Live!
            </div>

            <p className="tw-text-lg sm:tw-text-xl tw-mt-6 tw-font-medium tw-leading-relaxed tw-text-center">
              Earn passive rewards by staking ADAO. The longer you stake, the{" "}
              <span className="tw-font-bold tw-text-yellow-300">
                bigger the rewards!
              </span>
            </p>

            <motion.div
              className="tw-mt-6 tw-flex tw-justify-center tw-items-center tw-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.a
                href="https://agentdao.com/staking"
                target="_blank"
                rel="noopener noreferrer"
                className="tw-inline-flex  tw-px-8 tw-py-4 tw-bg-white tw-text-yellow-700 tw-font-extrabold tw-text-xl tw-rounded-lg tw-shadow-lg tw-transition-all tw-duration-300 tw-ease-in-out tw-transform hover:tw-bg-yellow-600 hover:tw-text-white hover:tw-scale-105 tw-text-center tw-items-center tw-justify-center tw-no-underline"
              >
                💎 Stake & Earn Now!
              </motion.a>
            </motion.div>

            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut"
              }}
              className="tw-absolute tw-bottom-5 tw-left-1/2 tw-transform tw--translate-x-1/2 tw-text-4xl"
            >
              ✨
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CtaAdaoSection;
