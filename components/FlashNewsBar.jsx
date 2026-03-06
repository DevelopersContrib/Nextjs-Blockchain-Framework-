"use client";

import Link from "next/link";
import { Megaphone } from "lucide-react";

const FLASH_NEWS_LINK = "https://adao.ai/?referral=jstack.com";
const FLASH_NEWS_TEXT =
  "ADAO token is dropping to your Base chain soon! Get ADAO today while it's on sale!";

export default function FlashNewsBar() {
  return (
    <section
      className="tw-w-full tw-pt-[44px] tw-bg-[#1A122A] tw-bg-gradient-to-r tw-from-[#1A122A] tw-via-[#1e1635] tw-to-[#1A122A] tw-text-white tw-border-b tw-border-white/10 tw-overflow-hidden tw-shadow-lg tw-shadow-black/20"
      aria-label="Flash news"
    >
      <div className="tw-flex tw-items-stretch tw-min-h-[40px]">
        {/* Label with icon */}
        <div className="tw-inline-flex tw-items-center tw-gap-2 tw-shrink-0 tw-pl-4 tw-pr-4 tw-py-2 tw-border-r tw-border-white/10 tw-bg-white/5">
          <Megaphone className="tw-w-4 tw-h-4 tw-text-cyan-400 tw-shrink-0" aria-hidden />
          <span className="tw-text-[#00f6ff] tw-text-sm tw-font-bold tw-tracking-wide tw-uppercase">
            Flash News
          </span>
          <span className="tw-flex tw-items-center tw-gap-1 tw-text-[10px] tw-font-semibold tw-text-emerald-400 tw-uppercase tw-tracking-wider">
            <span className="tw-w-1.5 tw-h-1.5 tw-rounded-full tw-bg-emerald-400 tw-animate-pulse" />
            Live
          </span>
        </div>

        {/* Ticker area with edge fade */}
        <div className="tw-flex-1 tw-min-w-0 tw-relative tw-overflow-hidden">
          <div
            className="tw-absolute tw-inset-y-0 tw-left-0 tw-w-8 tw-z-10 tw-pointer-events-none tw-bg-gradient-to-r tw-from-[#1A122A] tw-to-transparent"
            aria-hidden
          />
          <div
            className="tw-absolute tw-inset-y-0 tw-right-0 tw-w-16 tw-z-10 tw-pointer-events-none tw-bg-gradient-to-l tw-from-[#1A122A] tw-to-transparent"
            aria-hidden
          />
          <Link
            href={FLASH_NEWS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flash-news-ticker tw-inline-block tw-min-h-[40px] tw-whitespace-nowrap tw-text-sm tw-text-white/95 hover:tw-text-white tw-py-2 tw-pl-2 tw-pr-6 tw-leading-[2rem] focus:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-cyan-400 focus-visible:tw-ring-inset"
          >
            <span className="tw-inline-block tw-pr-10" aria-hidden>
              {FLASH_NEWS_TEXT}
            </span>
            <span className="tw-inline-block tw-pr-10" aria-hidden>
              {FLASH_NEWS_TEXT}
            </span>
            <span className="tw-inline-block tw-pr-10" aria-hidden>
              {FLASH_NEWS_TEXT}
            </span>
            <span className="tw-inline-block tw-pr-10" aria-hidden>
              {FLASH_NEWS_TEXT}
            </span>
            <span className="tw-inline-block tw-pr-10" aria-hidden>
              {FLASH_NEWS_TEXT}
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
