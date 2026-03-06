"use client";

import { useState, useEffect, useRef } from "react";
import Script from "next/script";
import { CheckCircle2, Coins, Clock } from "lucide-react";

const MOCK_TASKS = [
  {
    id: "mock-1",
    title: "Share the community on social media",
    description: "Post about the community on Twitter or LinkedIn and share the link.",
    reward: "50",
    rewardLabel: "rDAO",
    tag: "Social",
  },
  {
    id: "mock-2",
    title: "Complete your profile",
    description: "Add a bio, skills, and profile picture to help others find you.",
    reward: "25",
    rewardLabel: "rDAO",
    tag: "Onboarding",
  },
  {
    id: "mock-3",
    title: "Invite a contributor",
    description: "Invite someone to join and complete their first task.",
    reward: "100",
    rewardLabel: "rDAO",
    tag: "Referral",
  },
  {
    id: "mock-4",
    title: "Review a proposal",
    description: "Read and leave feedback on an open community proposal.",
    reward: "30",
    rewardLabel: "rDAO",
    tag: "Governance",
  },
];

export default function LatestTasksSection({ domain }) {
  const [showMock, setShowMock] = useState(false);
  const containerRef = useRef(null);
  const checkTimeoutRef = useRef(null);

  useEffect(() => {
    checkTimeoutRef.current = window.setTimeout(() => {
      const el = document.getElementById("blockchain-tasks");
      const hasContent =
        el &&
        (el.children.length > 0 ||
          (el.textContent && el.textContent.trim().length > 10));
      if (!hasContent) {
        setShowMock(true);
      }
    }, 3500);
    return () => {
      if (checkTimeoutRef.current) clearTimeout(checkTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (!containerRef.current || !showMock) return;
    const el = document.getElementById("blockchain-tasks");
    if (!el) return;
    const observer = new MutationObserver(() => {
      const hasContent =
        el.children.length > 0 ||
        (el.textContent && el.textContent.trim().length > 10);
      if (hasContent) setShowMock(false);
    });
    observer.observe(el, { childList: true, subtree: true, characterData: true });
    return () => observer.disconnect();
  }, [showMock]);

  return (
    <>
      <Script
        src={`https://tools.contrib.com/eservice/blockchaintasks?d=${domain}&container=blockchain-tasks`}
        strategy="afterInteractive"
      />
      <div
        id="blockchain-tasks"
        ref={containerRef}
        className="tw-min-h-[120px] tw-rounded-2xl tw-overflow-hidden tw-bg-white tw-shadow-lg tw-shadow-slate-200/60 tw-border tw-border-slate-200/80 tw-p-4 md:tw-p-6"
        aria-live="polite"
        aria-label="Latest tasks"
        style={showMock ? { position: "absolute", left: "-9999px", visibility: "hidden" } : {}}
      />
      {showMock && (
        <div
          className="tw-rounded-2xl tw-overflow-hidden tw-bg-white tw-shadow-lg tw-shadow-slate-200/60 tw-border tw-border-slate-200/80 tw-p-4 md:tw-p-6"
          aria-label="Latest tasks (demo)"
        >
          <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-4">
            {MOCK_TASKS.map((task) => (
              <div
                key={task.id}
                className="tw-p-4 tw-rounded-xl tw-border tw-border-slate-200/80 tw-bg-slate-50/50 hover:tw-bg-slate-50 tw-transition-colors"
              >
                <div className="tw-flex tw-items-start tw-justify-between tw-gap-3 tw-mb-2">
                  <h3 className="tw-font-display tw-font-semibold tw-text-slate-900 tw-text-base tw-leading-snug">
                    {task.title}
                  </h3>
                  <span className="tw-shrink-0 tw-inline-flex tw-items-center tw-gap-1 tw-px-2 tw-py-1 tw-rounded-lg tw-bg-amber-100 tw-text-amber-800 tw-text-xs tw-font-semibold">
                    <Coins className="tw-w-3.5 tw-h-3.5" />
                    {task.reward} {task.rewardLabel}
                  </span>
                </div>
                <p className="tw-text-slate-600 tw-text-sm tw-mb-3 tw-leading-relaxed">
                  {task.description}
                </p>
                <div className="tw-flex tw-items-center tw-justify-between">
                  <span className="tw-inline-flex tw-items-center tw-gap-1.5 tw-text-slate-500 tw-text-xs">
                    <Clock className="tw-w-3.5 tw-h-3.5" />
                    {task.tag}
                  </span>
                  <button
                    type="button"
                    className="tw-inline-flex tw-items-center tw-gap-1.5 tw-px-4 tw-py-2.5 tw-rounded-xl tw-bg-indigo-600 hover:tw-bg-indigo-500 tw-text-white tw-text-sm tw-font-semibold tw-transition-colors"
                  >
                    <CheckCircle2 className="tw-w-4 tw-h-4" />
                    Complete task
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
